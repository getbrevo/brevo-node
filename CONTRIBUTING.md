# Contributing

## Install and Setup

1. Clone the repository
2. Install dependencies with `yarn install`

## Updating the API based on Swagger Spec

1. Run `yarn generate` to update the `Brevo.ts` file.
2. Commit the changes

## Testing

There are automated tests that check that the generated file matches the current latest version of the API.

As the tests are dependant on the external swagger api spec they could fail on a future run with no code changes. If this happens you can run `yarn generate` to update the generated file to the latest version of the API.

## Publishing

The repo is setup to auto publish to npm when a release is created.

> Prerequisites:
>
> Add `NPM_TOKEN` to your github secrets with your npm token. The token needs to have `Read/Write` access to the package, scope, or all packages.

1. Update the version in `package.json`
2. Create a new release in github and publish
3. A build will automatically run and publish the new version to npm
