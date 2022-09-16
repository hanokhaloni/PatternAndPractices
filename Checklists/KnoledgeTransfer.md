# Team structure:

- Members of the team
- Hierarchy and responsibilities, reporting
- The customer's / related teams' / vendor's contacts
- - Telephone number
- - Email address
- - A note about core reposibility of the member
- - A note about how to communicate effectively with him

# Business requirements, trying to get access to:

- Description of business requirements
- - What is the functionality the software enables?
- - What are the stakeholders concerns and how the software full-fills these concerns?
- - - What person, is involved on what feature, and what are his/her primary concerns?
- User documentation
- Test cases
- - Last version STR status (# tests passed, failed and not run)
- - What are the major (sanity) flows of the system

# Source code:

- Repository URLs
- Creating accounts with the required rights
- Getting all configuration scripts and requirements for developers' workstations
- If possible, creating automated scripts of environment deployment or creating system images – to save precious time for the developers.
- general overview of components and their dependencies
- What environemts exist? How to interact with PROD environments? What tools, URLS, credentials are provided for each component?

# Technical documentation:

- System architecture
- Sub-system architecture
- Databases structure (Tables, relataion between them and entities list)
- Architecture in terms of technical primitives
- Architecture in terms of business tasks, use cases
- Team's technical debts
- All technical findings and proposals regarding the existing system
- ADR design decisions (a nice level of decisions and a check-list for this can be found at P&P)
- What system quality attributes have identified and addressed how ?
- security
- third party tooling used

It is possible to carry out an experiment: ask the new team to create a "pattern" of the system with the purpose of identifying infrastructure components that ensure the system's operability, and superimpose business requirements on that – judging by my experience, people catch on the project much quicker.

# Delivery and environment system:

- CI/CD servers
- Test infrastructure
- Build versions
- Deployment strategies
- - The purpose of machine depended configuration settings
- - How the install the software? What's the release process?
- - How to roll the software back to an older version?
- - How to handle data migration? (Can you update the software without deleting the data?)

# Information systems (very important):

- User requests handling system (or SRS and manual flow)
- Bug tracking system (JIRA, TFS, or GITLAB)
- Exmail & messages
- - Important emails and summaries
- - Meeting notes (keep in mind to have the latest one updated!)
- UI/UX design files (axure, jpeg, pngs, invision)
- File directories (shared folders)
- - project documentation
- - latest updated work versions (hope you are using git to handle them!)
- - internal project progress reports
- Inventory list
- - Any software delivered to the customer (versions, tools)
- - Any software supplied from the customer (keys, IDE's, tools)
- - Any hardware supplied from the customer (keys, IDE's, tools)

# Knowledge base system / information portal

- How to get a new developer started
- Monitoring system
- User actions analytics system
- It is crucial to identify contact persons for all issues regarding each system
- Also all procedures and ceremonials: flow processing of user requests; flow approvals of new technical documentation

# Processes and a list of decision makers (DM):

- Procedures and a list of DMs connected with daily routines
- Procedures and a list of DMs connected with closing a sprint / iteration / work stage
- Procedures and a list of DMs connected with planning a new release / iteration
- Procedures connected with handling Change Requests, and a list of DMs
- Procedures and ceremonials connected with issuing a new release

# Testing, quality assurance team:

- Necessary to get access to all test script databases
- Necessary to get the description of release issue procedures

# User accounts – I bring them out, to keep in mind:

- Testing / staging / production user accounts for testing the product
- Accounts in the analytics / vendors / partners systems

# Field of action:

- Work plan
- Roadmap
- - Version
- - What version is provided when?
- - What are the major features / implementations / tasks / bugfies at each version
- - Milestones - how do these versions affect the client?
- - Payments - what did we get paid for, what are we going to get payed for nex? what about the next versions?
- Objectives definition in technical terms
- Objectives definition in terms of product

# Third party services, vendors, partners:

- Access to all third party systems with admin rights – to be able to add your own users
- Contacts of all vendors and partners, their DMs, interaction schedule, their team structure, responsibilities, and a brief description of the interaction domain and the team's objectives

# The "Objectives" Section is very important:

- What is required from the development, testing, and support teams?
- What are the objectives of the new team?
