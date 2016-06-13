# Requirement Gathering and Specification Documents
This document will describe the process and expectations for creating gathering requirements and creating specs. 

# Gathering Requirements
Collecting requirements can be part process, part art, part personnel wrangling. The final list of requirements should be collected and stored in specification document. These requirements should be as detailed as possible and a hand-shake should occur between the Product Owner and the developer to ensure the requirements are fully understood before a User Story that completes one or more of the requirements move to in-work. Broadly requirements can come from the following sources:
- The LabVIEW IDE requested functionality
- Johnny Cash requested functionality 
- Any other future or existing Web application
- Customer feedback/Market research
- Non-functional enhancements and bug fixes described by the development team

The single source of truth for requirments is the specification document, but details of the requirements may be externally linked as is common for specifications using the NITalk template. 

# Feature Specifications
Specification documents can be immensely useful for communicating the needs of our customers along side technical implementation. They can also be erroneous and frustrating. Our goal should be to utilize a specification process that maximises the value while minimizing the process. For example it is not uncommon to have large portions of spec documents with boiler plate that is not useful. We should be utilizing retrospective meetings to review our process to make it as simple, efficient, and useful as possible. 

## The Process
Not all work should require a spec, so a spec should not be required for every user story in the backlog. In most cases a spec is written for a feature, which represents are large piece of functionality in the product. Features broken down into a collection of work items that are children of the feature. In instances where a User Story must be created and executed that does not cleanly fit into a specification (and feature) is not required. Furthermore there may be instances where the implementation details cannot or should not be researched and defined until work begins on a user story. In this case the Feature Specification owning this user story may link to an design document. Feature Specifications shouldn't be created until the feature is committed. If a feature is moved from green to red after the creation of the specification then the document should be deleted. 

1. Product Owner works with external actors to define feature requirements
2. Product Owner creates a Feature is created in the work item management tool (TODO link to the Agile.md document)
3. Product Owner copies the Spec template into a new document and fills out the requirements and any other required boilerplate (TODO: Get more specific of what boilderplate here.) and sets the state of the Specification to *Brainstorming* 
4. Development team determines a developer owner for the Feature
5. Developer fills additional boilerplate (TODO: Get more specific of what boilderplate here.)
6. Developer creates or links to design details in the document. 
7. Development team reviews design documents
8. Product Owner provides feedback to developer as needed and approves the Specification document and sets the state of the Specification to *Approved*
9. Developer and development team repete steps 6 and 7 as needed during development.
10. Product owner set the state of the Specification *Complete* when all work items have been accepted.

### Specification States
- **Brainstorming** The initial state of the spec when it has been created and not yet reviewed by the Product Owner or develropment team
- **Approved** The state of the spec after it as been reviewed and approved by the development team and the Product Owner and active development is occuring on the feature
- **Complete** The state of the spec when all work items have been accepted by the Product Owner
- **Rejected** The state of the spec when its been determined that no work will be done for the feature.

### Differences between JQX and WebCharts
In most instances we want the process followed by JQX and WebCharts to be identical. But due to the fact that JQX is 3rd party to NI some process differences are unavoidable. The main differences as it concerns the Specification process are as follows. 
- JQX will keep specifications in version control (git) within a directory named *Specifications*
 - External design documents should also be kept in source control in the same location of a subdirectory of the *Specifications* directory 
- JQX Feature Specification in the *Rejected* state should be deleted after the state has been commited in version control. 
- WebCharts will use the NITalk specification template

## Specification Template for JQX
TODO: Create unique document for the template, so it can be versioned independent of the process doc. 

## Specification Template for WebCharts
[App & Emb SW Specs](https://nitalk.jiveon.com/groups/application-embedded-sw-specifications)