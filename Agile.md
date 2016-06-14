# Agile and Work Items Management
This document will describe the tools and process utilize by teams to plan and track work done during the development process. As noted in the Readme we will be following the [Agile Kanban](http://kanbanblog.com/explained/index.html) process.

# Roles
- __Product Owner (PO):__ This person describes the work to be delivered and is responsible for grooming hte backlog to ensure the highest priortity work is on the top of the backlog and detailed acceptance criteria is written for this work. 
- __Scrum Master (SM):__ This person is responsible for the day to day management of the development process, ensuring the developers are operating efficiently and successfully and that the state of work items accurately reflect their current status. 
- __Developer (dev):__ This person is writing code. A PO or SM could also, be a developer, but not always. 

# Meetings
- __Daily Standup__: This is a short (15 minutes or less) meeting where each member of the develop team answers the following questions:
 - What did you do in the last day?
 - What do you plan to do in the next day?
 - Are there any roadblocks that are slowing you down?
- __Retrospective__: This meeting will occur once every four weeks where the development team discusses what went well in the last four weeks, and what would be improved in the next four weeks. 
- __Demo Showcase__: This meeting will occur once every four weeks where the development team demonstrates the functionality added to the product in the last four weeks. 

# Tools
The primary tool for work item management will be Rally. While not perfect Rally provides a complete toolchain for managing Features, User Stories, Tasks, and Defects. It enables teams to role up status in a manner well understood and utilized by App Software. It also provides views and work-flows that are well suited for Kanban. 

# Features, User Stories, and Tasks
- __Feature__: A major functional component of a product. Features should have associated Feature Spec (see __Reqs and Spec.md__ in this repository). Feature parent User Stories. 
- __User Story__: A single user facing peice of functionality. User stories may have short descriptive titles, but the details should be written from a user's perspective when ever possible. Detailed Acceptance Criteria should also be included in the User Story such that a developer has a good understanding of what is required to fully implmenent the user story. 
- __Tasks__: Tasks are the TODO list for developers working on a user story. Task titles and descriptions need only to be useful to the developer.

# User Story Process
In our Kanban process we will utilize the following states
- __Backlog:__ These is where all users stories are kept before work has been started. The backlog is kept in a stack rank order by the PO. Items on the top of the backlog's stack rank are the highest priorty and should be worked on first. 
 - __Backlog Ready to Pull:__ This is a meta state of a user story since it does not have its own column in the Kanban board. A user story enters this meta state when the PO has completely filled out the acceptance criteria for the User Story. 
Definition
In Work
Validation and Merge
Accepted

# Defects (Bugs)