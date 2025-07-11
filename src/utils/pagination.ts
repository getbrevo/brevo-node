import type { PaginationParams, PaginatedResponse } from "../types/common";

/**
 * Pagination iterator for automatically handling paginated API responses
 */
export class PaginationIterator<T> {
  private currentOffset = 0;

  constructor(
    private readonly fetcher: (
      params: PaginationParams
    ) => Promise<PaginatedResponse<T>>,
    private readonly limit: number = 50
  ) {}

  /**
   * Get the next page of results
   */
  async next(): Promise<{ value: T[]; done: boolean }> {
    const response = await this.fetcher({
      limit: this.limit,
      offset: this.currentOffset,
    });

    // Extract the items array from the response
    const items = this.extractItems(response);
    const hasMore =
      items.length === this.limit &&
      this.currentOffset + this.limit < response.count;

    if (hasMore) {
      this.currentOffset += this.limit;
    }

    return {
      value: items,
      done: !hasMore,
    };
  }

  /**
   * Iterate through all pages
   */
  async *[Symbol.asyncIterator](): AsyncIterableIterator<T[]> {
    let hasMore = true;

    while (hasMore) {
      const { value, done } = await this.next();
      yield value;
      hasMore = !done;
    }
  }

  /**
   * Get all items from all pages
   */
  async all(): Promise<T[]> {
    const allItems: T[] = [];

    for await (const page of this) {
      allItems.push(...page);
    }

    return allItems;
  }

  /**
   * Extract items array from paginated response
   * The items might be under different keys depending on the endpoint
   */
  private extractItems(response: PaginatedResponse<T>): T[] {
    // Common keys where items might be stored
    const possibleKeys = [
      "campaigns",
      "contacts",
      "lists",
      "folders",
      "templates",
      "items",
      "data",
    ];

    for (const key of possibleKeys) {
      if (key in response && Array.isArray(response[key])) {
        return response[key] as T[];
      }
    }

    // Fallback: return empty array if no items found
    return [];
  }

  /**
   * Reset iterator to beginning
   */
  reset(): void {
    this.currentOffset = 0;
  }
}

/**
 * Helper function to create a pagination iterator
 */
export function createPaginationIterator<T>(
  fetcher: (params: PaginationParams) => Promise<PaginatedResponse<T>>,
  limit = 50
): PaginationIterator<T> {
  return new PaginationIterator(fetcher, limit);
}

/**
 * Auto-paginate helper that collects all results
 */
export async function autoPaginate<T>(
  fetcher: (params: PaginationParams) => Promise<PaginatedResponse<T>>,
  maxItems?: number,
  pageSize = 50
): Promise<T[]> {
  const iterator = new PaginationIterator(fetcher, pageSize);
  const items: T[] = [];

  for await (const page of iterator) {
    items.push(...page);

    // Stop if we've reached the maximum number of items
    if (maxItems && items.length >= maxItems) {
      return items.slice(0, maxItems);
    }
  }

  return items;
}

/**
 * Page-based pagination helper
 */
export interface PageBasedParams {
  page?: number;
  limit?: number;
}

export interface PageBasedResponse<T> {
  items: T[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * Convert offset-based pagination to page-based
 */
export function offsetToPage(offset: number, limit: number): number {
  return Math.floor(offset / limit) + 1;
}

/**
 * Convert page-based pagination to offset-based
 */
export function pageToOffset(page: number, limit: number): number {
  return (page - 1) * limit;
}

/**
 * Create page-based pagination helper
 */
export function createPageBasedPagination<T>(
  fetcher: (params: PaginationParams) => Promise<PaginatedResponse<T>>
) {
  return async (
    params: PageBasedParams = {}
  ): Promise<PageBasedResponse<T>> => {
    const page = params.page ?? 1;
    const limit = params.limit ?? 50;
    const offset = pageToOffset(page, limit);

    const response = await fetcher({ offset, limit });
    const items = new PaginationIterator(fetcher, limit)["extractItems"](
      response
    );

    const totalPages = Math.ceil(response.count / limit);

    return {
      items,
      totalPages,
      currentPage: page,
      totalItems: response.count,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    };
  };
}
