# Requirements and Documentation
This document will describe the process and expectations for creating gathering requirements and creating user documentation. 

# Gathering Requirements
Collecting requirements can be part process, part art, part personnel wrangling. The final list of requirements must be stored in a Requirement document. These requirements should be as detailed as possible and a hand-shake should occur between the Product Owner and the development team to ensure the requirements are fully understood before a User Story that completes one or more of the requirements moves to in-work. Broadly requirements can come from the following sources:
- The LabVIEW IDE requested functionality
- Johnny Cash requested functionality 
- Any other future or existing Web application
- Customer feedback/Market research
- Non-functional enhancements and bug fixes described by the development team

The single source of truth for requirements is the requirements document. 

## The Process

1. Product Owner works with external actors to define feature requirements
2. Product Owner creates a Feature in the work item management tool (see __Agile.md__ in this repository)
3. Product Owner copies the requirement template into a new document enters all data gathered from interested parties including sales, marketing, and R&D. 
4. Final requirements are signed-off by the tech lead
5. Product Owner builds User Story backlog for the feature

## Requirements Template
See __Req Template.md__ in this repository.

# Documentation
Good documentation is as important as good code. Without it no one will know how to use your software. 

## API Docs
All public APIs should be fully documented. New code should not be pull into master without this. TODO Determine markup format for API docs.

## Concept Docs
Concept documents should be written as needed and determined by the development team or Product Owner. These documents explore high level concepts and are often paired with an example. 

## Examples
Working examples in JSFiddle should be created for each widget. This must be complete prior to the release of a new widget. 