# AGENTS.md: brevo-node

Instructions for AI coding agents working in, or with, this repository. For human-oriented docs see [README.md](README.md).

## What this is

`@getbrevo/brevo` is the official Node.js and TypeScript SDK for the [Brevo API](https://developers.brevo.com). It is **generated** from Brevo's OpenAPI definition with [Fern](https://buildwithfern.com). Most of `src/` is generated and is overwritten on every regeneration.

- Package: `@getbrevo/brevo` on npm
- Main class: `BrevoClient`
- Authentication: API key (`apiKey`) or OAuth 2.0 machine-to-machine (`clientId` and `clientSecret`)
- Base URL: `https://api.brevo.com/v3`
- Runtime: Node.js 18 or later; ESM and CommonJS builds; TypeScript types included

## Using the SDK (for code that depends on it)

- Import with `import { BrevoClient } from '@getbrevo/brevo';` and create the client with `new BrevoClient({ apiKey })`. Read the key from your own environment, for example `process.env.BREVO_API_KEY`; the SDK does not read an API key variable itself.
- For OAuth 2.0 M2M, pass `clientId` and `clientSecret`, or set `BREVO_CLIENT_ID` and `BREVO_CLIENT_SECRET`. Use one authentication method per client.
- Resources are properties on the client: `brevo.contacts`, `brevo.transactionalEmails`, `brevo.emailCampaigns`, and so on. Methods return Promises: `await brevo.<resource>.<method>(request)`. See [reference.md](reference.md) for every method and its types.
- Failed calls throw `BrevoError`, with `statusCode`, `body` and `rawResponse`.
- Defaults: 60 second timeout, and 2 retries on `408`, `429` and `5xx`. Override with the `timeoutInSeconds` and `maxRetries` client options, or per call in the request options.
- Never hard-code API keys.

Machine-readable docs: <https://developers.brevo.com/llms.txt> (append `.md` to any docs page URL for clean Markdown).

## Repository layout

```
src/Client.ts, BaseClient.ts   client wiring (generated)
src/api/resources/             one folder per API area (generated)
src/core/                      HTTP, retries, fetcher (generated)
src/auth/, src/errors/         authentication and error classes (generated)
tests/unit/, tests/wire/       unit tests and wire tests against a mock server (generated)
reference.md                   method reference (generated)
README.md                      hand-written
AGENTS.md                      hand-written
changelog.md                   hand-written
banner.png                     hand-written
.fernignore                    lists the files Fern must not overwrite
```

## Working in this repo

**Do not edit generated files** (everything under `src/` and `tests/`, `reference.md`, `package.json`, `.github/`). Changes there are overwritten by the next regeneration. If generated code is wrong, open an issue; the fix belongs in the generator configuration.

Files listed in `.fernignore` are maintained by hand and survive regeneration. If you add another hand-written file, add it to `.fernignore`.

The package manager is pnpm. Commands:

```sh
pnpm install     # install dependencies
pnpm build       # build the CommonJS and ESM outputs
pnpm test        # run all tests (vitest); also test:unit and test:wire
pnpm check       # lint and format check (biome)
```

## Releasing

Maintainers release by pushing a version tag such as `v6.2.0`; CI publishes the package when a tag is pushed. Do not create tags or releases, or publish the package, unless a maintainer asks you to.

## Boundaries

- Do not commit secrets, tokens or API keys.
- Do not make breaking changes to generated code by hand.
- Do not change `.github/workflows/` by hand; it is generated.
