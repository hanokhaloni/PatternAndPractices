# 📦 Release

Each version has a SemVer notation "MAJOR.MINOR.PATCH" where:

*   MAJOR version - denotes project scope (whole)


*   MINOR version - denotes project milestone


* PATCH version - denotes small changes

### Mark the version

* Make sure that the version number is visible (either in client - text or tooltip, logs, footers or a designated "About" popup)!
* Update version strings with final version information.
* Create install and configuration scripts as needed.
* Update readme.md/deploy.md about how to deploy steps.
* Remove debugging and testing code from the software.
* Remove seeded defects from the software.

### Create release notes

* Review release notes from jira.
* Verify latest STR was filled and attached to docs dir.
* Close released version and create release notes in JIRA.
* Update frontpage.md - what version was released when.
* Write "Known Issues" List.

### Create SVN/GIT TAG - so that you freeze the final list of files to be distributed.

* Attach “release notes” and "Known Issues" to tag notes in Gitlab.

### Build in jenkins or Gitlab should:

* Compile the code
* Verify all test/regression test are green
* Schedule Acceptance Test date with customer (and instructor)
* Verify copyright, license, and other legal materials.
* Consistency check: SRS, User Manual, System Tests, Staged Delivery Plan, and Software must all match!
* Synchronize date/time stamp on all release files.
* Prepare a zip file with the content.

### Release (TEST / PROD)

* Mark the revision (Tag with "X.X.X-Staged")
* Update the readme.md/deploy.md about staged delivery plan.
* Deploy on TEST
* Dev test on TEST (sanity)
* Reset the machine (the virtual machine) and make sure all required services are up (for distributed systems make sure you repeat this step a couple of times)
* QA test on TEST
* Read LOGS
* Contact client – we changed test env – please review
* Client test on TEST
* If client approves, deploy on PROD

### Email summary (based on this checklist).

* Attach zip or route.
* Attach “release notes” and "Known Issues"

\


## Questions to ask yourself before you start

* What is the SVN/GIT tag?
* What is the JIRA version?
* Make sure there is a backup that works?
* Were the tests running?
* Did they pass?
* What version am I deploying?
* When was the last deployment?
* Has anyone else committed since?
* Is a deploy already running?
* Are there any config changes?
* Where are the dashboards?
* What do I do after the deployment?
* Is the site working now?
* Are there any incidents in progress?
* Is anyone testing on QA now?
