# Release
Releases can be painful. We aim to make them as painless as possible by investing into automation and releasing continuously. 

# Release Contents
At every release the following items are deployed. In each deployment these are to be uniquely versioned and all items within a singe deployment are to have the same version.
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
In this project we have three types of deployments - "deploy to dev", deploy to test", and "deploy to production." A Release is synonymous with deploying to production. In all cases much of the process and automation is the same. The key difference is where the software is located at the end of the process that makes all the difference. 

## Test
In Test the packages and CDNs are only available to developers and testers; e.g. they are not available publicly. These deployments occur in a completely automation fashion and are triggered by a passing CI.

Each package and CDN will go both into a uniquely version place as well as a "Latest" location. For NPM and NuGet we get this for free due to how each registry works. For CDNs we will have an endpoint for the "latest" and create a new endpoint for each build. 

## Production
In Production the packages and CDNs are publicly available. Public in this point of time might just mean everyone at NI. These deployments are manually initiated but should use the same script as deploying to test. Its suggested to have a command line argument being the only required difference between deploying to test and production. 

## Dev
Using the same deployment script as Test and Production, developers should be able to perform their own deployments. In this case the deployment is exactly the same as a deployment to Test. The difference here is the developer is manually initiating the process. 

## Scripts
There shouldn't be a single script that automated all of the build and deploy process. Instead each step of the process should be individual scripts that are chained together by another script or similar. 

Some possible unique scripts include:
- Minifying code
- Sending a build artifact to the artifact repository. 
- Creating a package
- Creating a CDN endpoint
- Deploying a package to a registry

# Artifact Registry and CDNs
For this project the artifact registry will be AWS S3. The CDNs will also be S3 endpoints. This is not strictly speaking a CDN but can be used as just the same. 
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
- Packaging Script
 - Create NPM Package
 - Send NPM Package to artifact repository
 - Create NuGet Package
 - Send NuGet Package to artifact repository
- Deployment Script
 - Create versioned test CDN Endpoint
 - Deploy to *latest* and verison test CND endpoints
 - Deploy NPM Package to test registry
 - Deploy NuGet Package to test registry
Karma Acceptance Test Script
 - Run automated acceptance tests

## On Release
When automated acceptance tests pass the following additional steps occur. 
- Manual Test Script
 - Run manual tests
When all manual tests pass
- Deployment Script
 - Create versioned production CDN Endpoint
 - Deploy artifacts to *Latest* and versioned production CDN Endpoint
 - Deploy NPM Package to production registry
 - Deploy NuGet Package to production registry
- Smoke Test Script
 - Run Smoke Tests
