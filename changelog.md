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

