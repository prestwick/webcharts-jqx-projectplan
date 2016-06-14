# Agile and Work Items Management
This document describes the tools and process utilized by teams to plan and track work during the development process. We will be following the [Agile Kanban](http://kanbanblog.com/explained/index.html) process.

# Roles
- __Product Owner (PO):__ This person describes the work (User Stories) to be delivered and is responsible for grooming the backlog to ensure the User Stories are stack-ranked and include detailed acceptance criteria is written.
- __Scrum Master (SM):__ This person is responsible for the day to day management of the development process, ensuring the developers are operating efficiently, successfully, and that the state of work items accurately reflect their current status. 
- __Developer (dev):__ This person is writing code. A PO or SM could also, be a developer, but not always. 
- __Tech Lead:__ Synonymous with Code Owner, this is the senior developer on the team responsible for maintaining overall code quality and architectural adherence. This role is not typical in Agile, but has been found to be critical to software projects. 

# Meetings
- __Daily Standup__: This is a short (15 minutes or less) meeting where each member of the development team answers the following questions:
 - What did you do in the last day?
 - What do you plan to do in the next day?
 - Are there any roadblocks that are slowing you down?
- __Retrospective__: This meeting will occur once every four weeks where the development team discusses what went well in the last four weeks, and what would be improved in the next four weeks. 
- __Demo Showcase__: This meeting will occur once every four weeks where the development team demonstrates the functionality added to the product in the last four weeks. 

# Tools
The primary tool for work item management will be Rally. While not perfect Rally provides a complete toolchain for managing Features, User Stories, Tasks, and Defects. It enables teams to role up status in a manner well understood and utilized by App Software. It also provides views and work-flows that are well suited for Kanban. 

# Features, User Stories, and Tasks
- __Feature__: A major functional component of a product. Features have associated Feature Spec (see __Reqs and Spec.md__ in this repository). Features parent User Stories. 
- __User Story__: A single user facing piece of functionality. User stories may have short descriptive titles, but the details should be written from a user's perspective whenever possible. Detailed Acceptance Criteria should also be included in the User Story such that a developer has a good understanding of what is required to fully implement the user story before they begin work. 
- __Tasks__: Tasks are the TODO list for developers working on a user story. Task titles and descriptions need only to be useful to the developer.

# User Story Process
In our Kanban process we will utilize the following states
- __Backlog:__ (Rally Submitted) This state is where all users stories are kept before work has been started. The backlog is kept in a stack rank order by the PO. Items on the top of the backlog's stack rank are the highest priority and should be worked on first. 
 - __Backlog Ready to Pull:__ This is a meta state of a user story since it does not have its own column in the Kanban board. A user story enters this meta state when the PO has completely filled out the acceptance criteria for the User Story. 
- __Definition:__ (Rally Definition) This state where a developer adds tasks, write implementation details, and (if performing test driven development) writes tests. We encourage developers to think deeply about what they are planning to build before beginning work. This may be the most important state in the workflow. 
- __In Progress:__ (Rally In Progress) This state is where development occurs. Developers move tasks between the *Defined, In Progress, and Complete* as they implement the user story.
- __Merge:__ (Rally Complete) This state is where implementation is complete the code branch is being merged into the master. All tests should pass. This signals the PO that the user story can be reviewed. 
- __Accepted:__ (Rally Accepted) This is the final state of the user story signifying that all work is complete and the functionality has been reviewed and accepted by the PO. 

## Story Points, Velocity, and Affinity Estimation
In order to have the ability to estimate our progress between the current time and any future release we use Story Points to calculate velocity. 
- __Story Points:__ A relative measure of the size of a given user story. The values we will use are: *1, 3, 5, 10, 20*. These number don't mean anything until after several weeks of work. 
- __Velocity:__ The number of story points that are completed on average for a given period of time. Typically the period of time is four weeks. 
- __Affinity Estimate:__ The activity where the team collectively assigns Story Point value to User Stories. This activity does not occur often, but will occur at the beginning of any new project and after approximately 6 months of runtime for the project. 

# Defects (Bugs)
Rally's weirdness is on complete display when dealing with defects since they can both have User Story states (Schedule State) and state unique to defects (Defect State). For all intents and purposes we will ignore the Schedule State and use the Defect State.

## Creating a Defect
Please note the following fields. If a field is not described here it is optional. 
- Go to [JQX]() or [WebCharts]() Defects (TODO: Give this a real location)
- Create a new defect by selecting Actions > New Defect...
Fill out fields
- __Defect Name:__ This should be a short description of the problem.
- __Defect State:__
 - Submitted: The defect has been created but has work has not begun.
 - Open: An owner has been assigned and the defect is actively in work. 
 - Fixed: The owner has fixed the bug and the fix has been checked into the master branch.
 - Closed: The submitter of the defect has verified the issue has been successfully addressed. At this time the Schedule State should also be set to *Accepted*.
- __Description:__ There are three parts to the description that should be included in this field
 - Details (Optional): If the title is sufficiently short more a more details should be written to describe the bug. 
 - Steps to Reproduce: If you do nothing else, do this. This should be step by step instructions for reproducing the bug. A defect without this may be subject to rejection. 
 - Work-Around (Optional): If there is an obvious work-around to the issue that should be included. This will be used when evaluating if the defect should be rejected or deferred. 
- __Schedule > Release:__ Set to the release that will include the fix. 
- __Environment:__ We we be limiting our Choices to *Development* (eg found by the dev team before release) or *Release: Customer Use* (eg found by a developer or customer in the released product).
- __Priority:__ Choose the most appropriate category.
- __Severity:__ Choose the most appropriate category.
- __Owner:__ If you are working on a defect change the owner to yourself. The PO may also assign a defect to a particular developer as needed. 

## Closing a Defect
- __Defect State:__ Move the Defect State to Fixed
- __Resolution:__ Choose the most appropriate category
- __Fixed in Build:__ Provide the branch name that includes the fix.
 
## Validating a Defect
- __Defect State:__ Change the Move the Defect State to Closed
- __Schedule State:__ Change the Schedule State to Accepted