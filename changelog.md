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

