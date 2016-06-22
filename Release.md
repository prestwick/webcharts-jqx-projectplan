# Release
Release can be painful. We aim to make them as painless as possible by investing into automation and releasing continuously. 

# Release Contents
At every release the following items are deployed. In each deployment these should be uniquely verioned and all items within a singe deployment have the same version.
- Unminfied Code
 - NPM Package
 - NuGet Package
 - CDN
- Minified Code
 - NPM Package
 - NuGet Package
 - CDN
- Documentation
 - Included with source in NPM and NuGet unminified code packages
 - Hosted on Web page

# Types of Deployments
In this project we have two types of deployments - "deploy to test" and "deploy to production." A Release is synomous with deploying to production. In both cases much of the process and automation is the same. The key difference is where the software is located at the end of the process that makes all the difference. 

## Test
In Test the packages and CDNs are only available to developers and tests; e.g. they are not available publically. These deployments occur in a completely automation fashion and are triggered by a passing CI. 

Each package and CDN will go both into a uniquely version place as well as a "Latest" location 

## Production
In Production the packages, and CDNs are publically available. Public in this point of time might just mean everyone at NI. These deployments are deployments are manually initiated but should use the same script as deploying to test. Its suggested to have a command line argument being the only required difference between deploying to test and production. 

## Dev
Using the same deployment script as Test and Production developers should be able to deploy to their local machine using a command line argument. 

# Release Process
We assume our code is always in a ready to release state due to our focus on continuous integration and documentation. The release process is a collection of similar processes together that form our deployment pipeline.

## On every commit and merge
- Karma Unit Test Script
 - Run Unit Tests
- Build Script
 - Minify Code
 - Send build artifacts (minified and unminified code) to artifact reporsitory
- Packaging Script
 - Create NPM Package
 - Send NPM Package to artifact repository
 - Create NuGet Package
 - Send NuGet Package to artifact repository
- Deployment Script
 - Create versioned test CDN Endpoint
 - Deploy to *latests* and verison test CND endpoints
 - Deploy NPM Package to test registry
 - Deploy NuGet Package to test registry
Karma Acceptance Test Script
 - Run automated acceptance tests

## On Release
When automated acceptance tests pass the following additional steps occur. 
- Manaual Test Script
 - Run manual tests
When all manual tests pass
- Deployment Script
 - Create versioned production CDN Endpoint
 - Deploy artifacts to *Latest* and versioned production CDN Endpoint
 - Deploy NPM Package to production registry
 - Deploy NuGet Package to production registry
- Smoke Test Script
 - Run Smoke Tests
