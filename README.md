[![Build Status](https://travis-ci.org/prestwick/webcharts-jqx-projectplan.svg?branch=master)](https://travis-ci.org/prestwick/webcharts-jqx-projectplan)

# webcharts-jqx-projectplan
Documents describing the project plan and process for JQX and WebCharts. Using Github to explore and refine the process.

# Goals
This repo collects project plan and process documentation for delivering custom elements by the JQX and WebCharts teams. This is being done on Github to vet the git process, integrated continuous integration, and automated release.

# Process Architecture
The process utilized by these teams will be detailed in the following documents. 
 - [Requirements and Documentation] (docs/Reqs and Docs.md)
 - [Agile and Work Item Management] (docs/Agile.md)
 - [Version Control, Branching, and Continuous Integration] (docs/VC and CI.md)
 - [Release] (docs/Release.md)
 
# Tooling
- Tests run using Karma and Jasmine
- CI provided by Travis-ci
- Artifact repository provided by s3. Minified artifacts deployed on every submit
- Release deployment via NPM and s3. Deployments occur when tagging a branch.

# Getting Started
1. Install [node.js and npm](https://nodejs.org/dist/v4.4.5/node-v4.4.5.pkg)
2. Clone this repo
3. Run `npm install`
4. Run `npm test`
