## 4.0.2 - 2026-02-23
* test: update test fixtures and CLI version
* Update test data structures and CLI version to maintain consistency across
* the codebase. The changes ensure tests remain compatible with the current
* API expectations while keeping development tooling up to date.
* Key changes:
* Update CLI version from 3.79.2 to 3.76.0 in metadata
* Simplify association test data by removing nested records structure
* Remove specific identifier details from garage associations in test fixtures
* 🌿 Generated with Fern

## 5.0.0 - 2026-02-18
* fix: update delete tier operations to return void instead of string
* Change deleteTierGroup and deleteTier methods to return void instead of string, which better reflects the actual API behavior for delete operations. This aligns the return types with the expected void response when deletion operations complete successfully.
* Key changes:
* Update deleteTierGroup return type from HttpResponsePromise<string> to HttpResponsePromise<void>
* Update deleteTier return type from HttpResponsePromise<string> to HttpResponsePromise<void>
* Modify internal implementation to return undefined data instead of response body
* Update test expectations to assert undefined response instead of string
* Remove unnecessary mock response bodies in test setup
* 🌿 Generated with Fern

## 4.1.0 - 2026-02-11
* feat: add npm publish workflow and configure package metadata
* Add automated publishing workflow with tag-based deployment that publishes to npm with proper versioning support for alpha, beta, and stable releases. Configure package name and SDK metadata headers for proper identification.
* Key changes:
* Add GitHub Actions publish workflow triggered on tag pushes
* Support alpha/beta/stable release channels with appropriate npm tags
* Set package name to "@getbrevo/brevo" in package.json
* Configure SDK name header for API request identification
* Remove placeholder User-Agent header from base client
* 🌿 Generated with Fern

## 4.0.0 - 2026-02-11
* chore: remove package name and publishing configuration
* Remove package name from configuration and eliminate automated publishing
* infrastructure. This change removes the npm package name from package.json
* and BaseClient.ts headers, and removes the entire publishing workflow
* from GitHub Actions.
* Key changes:
* Remove package name from package.json and SDK headers
* Delete publish job from GitHub Actions CI workflow
* Remove User-Agent header from BaseClient
* Eliminate automated npm publishing on tag creation
* 🌿 Generated with Fern

