# Release
Releases can be painful. We aim to make them as painless as possible by investing into automation and releasing continuously. 

# Versioning
This project follows common practice for (semantic versioning)[http://semver.org] for release builds deployed to production. In some cases its necesary to provide a version to a feature branch. In this case the version will be in the following form:

`<version of master from which branch was created>-<branch name>.<version increment>`

For example a feature branch named `my-feature` created from a master branch version 1.0.1 creating its third tag would appear as:

`v1.0.1-my-feature.3`

# Release Contents
At every release the following items are deployed. 
- s3 (minfied only)
 - Versioned endpoint
 - 'latest' endpoint
- NPM
 - Source code
 - Minified code
 - Documentation
- NuGet (coming soon)
 - Dource code
 - Minified code
 - Documentation

# Types of Deployments
In this project we have two types of deployments - "deploy to test" and "deploy to production." A Release is synonymous with deploying to production. In all cases much of the process and automation is the same. The key difference is where the software is located at the end of the process that makes all the difference. 

## Test
In Test the deployed minified code is available in the s3 artifect repository and is only available to developers and testers; e.g. they are not available publicly. These deployments occur in a completely automation fashion and are triggered by a passing CI.

## Production
In Production the packages and s3 endpoints are publicly available. Public in this point of time might just mean everyone at NI. These deployments are manually by tagging a branch. In this case code will be deployed to the artifact repository as well as to npm, and s3 endpoints. 

## Scripts
There shouldn't be a single script that automated all of the build and deploy process. Instead each step of the process should be individual scripts that are chained together by another script or similar. In this project package.json is used to chain these together. 

Some possible unique scripts include:
- Minifying code
- Sending a build artifact to the artifact repository. 
- Creating a package
- Creating a s3 endpoint
- Deploying a package to a registry

# Artifact Registry and s3 Endpoints
For this project the artifact registry will be AWS S3. The "CDN" will also be S3 endpoints. This is not strictly speaking a CDN but can be used as just the same. 
TODO setup the base URLs for each of these. 

# Release Process
We assume our code is always in a ready to release state due to our focus on continuous integration and documentation. The release process is a collection of smaller processes together that form our deployment pipeline.

## On every commit and merge
- Karma Unit Test Script
 - Run Unit Tests
 - Run lint and style checks
- Build Script
 - Minify Code
 - Send build artifacts (minified and unminified code) to artifact repository

Karma Acceptance Test Script
 - Run automated acceptance tests

## On Release
When automated acceptance tests pass the following additional steps occur. 
- Packaging Script
 - Create NPM Package
 - Send NPM Package to artifact repository
 - Create NuGet Package
 - Send NuGet Package to artifact repository
- Deployment Script
 - Create versioned test s3 Endpoint
 - Deploy to *latest* and verison test CND endpoints
 - Deploy NPM Package to test registry
 - Deploy NuGet Package to test registry
- Manual Test Script
 - Run manual tests
When all manual tests pass
- Deployment Script
 - Create versioned production s3 Endpoint
 - Deploy artifacts to *Latest* and versioned production s3 Endpoint
 - Deploy NPM Package to production registry
 - Deploy NuGet Package to production registry
- Smoke Test Script
 - Run Smoke Tests
