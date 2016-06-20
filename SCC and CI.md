# Source Code Control, Branching, and Continuous Integration
This document describes the tools and policies used for version control, testing and continuous integration. The two pillars of this document are *everything is version controlled* and *continuous integration*. If no other policy or practice is followed these two must be utilized. 

# Version Control
Its more the just source code. Version control is a broad term because all code, tests, configuration, and documentation are kept version controlled. Doing so provides a single source of truth for all information related to the project. This also provides the ability to quickly bring new members on to the project. The goal for version control should be to allow a developer to have everything they need to participate in the project by synching the master brand and running `npm install` from the command line. 

Its well understood why source code is kept version controls. Tests are as important as source code and all developers should be able to easily access and run tests, and version control is the best way to facilitate it. 

Configuration files come in many forms, and must be kept in version control so that every developer can reproduce the exact configuration required to write, test, build, and deploy software developed during the project. For example package.json is kept in source control so we can ensure all developers have the same version of node modules installed on their development machine.

Documentation (specs, concept documents, readmes, etc) will also be kept in version control. This speaks to the single source of truth concept as well as making documents required for third parties to use this software available and accessible. 

# Continuous Integration
Continuous integration is what enables continuous deliver by ensuring that software is high quality with every commit and every branch merge. This project will utilize Travis-CI for its continuous integration server, which integrates well into Github as well as allow CI accessibility in every new branch. 

Most importantly the CI run all tests, as well as enforcing, style and syntax checking (via JSCS and JSLint). Eventually this server will be used to automate the creation of tags, packages, and managing built assets such as minfied code. 

*If a branch does not pass the CI it must be fixed before it can be merged.* If the CI is broken it the developer introducing the breaking change must address this immediately. The CI should never be left broken at the end the day.

# Git
Git and Github will be utilized for this project because of its accessibility for both NI and JQX, its simple yet powerful tooling/CI integration, and the branch/marge process which enforces code review as code is merged with the master branch. There is a lot of documentation and tutorials online on how to use git and github. This document assumes this knowledge. Everyone should read the following

- https://guides.github.com/activities/hello-world/
- http://nvie.com/posts/a-successful-git-branching-model/
- https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow


## Branches
We we be utilizing a master + feature branch(es) policy for this project. We will not be utilizing releases branches. Releases will occur out of master. Development should always occur in branches of the mainline repository rather than in developer repositories via forking. From the perspective of this project forks should only occur if team external to this team want to make changes or additions to our code with the eventual plan to contribute back and integrate with master. 

### `master`
The master branch serves as both trunk and release branch for the project. Features, user stories, and defects are not *done* until the code is merged with this branch. The CI on this branch should never fail and code failing the CI should never be merged into this branch. If at any time the CI is failing the entire development team should stop everything until the CI has been fixed. __Pull request into the master may only be approved by the tech lead.__

### `your-feature-branch`
Feature branches should have an informative title that are similar to the user story that is being worked on in the branch. When a feature branch is created the entire CI comes with it. Developers are encouraged to commit code to this feature branches often (1-2 times per hour). Frequent commits are encourage developers to plan on making code changes in small chunks, ensure the CI stays in a good state, and easily find issues when the CI does fail. In most cases each developer will be working out of a single branch at any given time, but it is not uncommon for two developers to work in a single branch if they are collaboratively on code development. In no cases should the entire team be working out of a single branch. 

# Tests
This is a V&V plan
## Automated Tests
Unit
Integration
Acceptance
## Manual Tests (Visual Verification)

