# Version release checklist
Each version has a SemVer notation "MAJOR.MINOR.PATCH" where:
- MAJOR version - denotes project scope (whole)
- MINOR version - denotes project milestone
- PATCH version - denotes small changes

*Make sure that the version number is visible (either in client - text or tooltip, logs, footers or a designated "About" popup)!*

## Questions to ask yourslef before you start
- Were the tests tunning?
- Did they pass?
- What version am I deploying?
- When was the last deploy?
- Has anyone else comitted since?
- Is a deploy already running?
- Are there any config changes?
- Where are the dashboards?
- What do I do after the deploy?
- Is the site working now?
- Are there any incidents (i.e. blocker bugs) in progress?
- Is anyone testing on QA now?

## Test-release (TESTBED / Staged / Pre-prod)
- Mark the revision (optional Tag with "X.X.X-Staged")
- Update the readme.md/deploy.md about staged delivery plan.
- Deploy on test
- Dev test on TEST (sanity)
- Reset the machine (the virtual machine) and make sure all required services are up (for distributed systems make suyre you repeat this step a couple of times)
- QA test on TEST
- Read LOGS
- Contact client – we changed test env – please review
- Client test on TEST


## Pre-release 
- Update version strings with final version information
- Create install and configuration scripts as needed
- Update readme.md/deploy.md about how to deploy steps.
- Remove debugging and testing code from the software
- Remove seeded defects from the software
- Pass through tasks in current release in jira
- Release notesVerify version of readme.txt on "dist" dir
- Verify lastest STR was filled and attached to docs dir
- Verify copyright, license, and other legal materials
- Consistency check:  SRS, User Manual, System Tests, Staged Delivery Plan, and Software must all match!

## Release activity
- Create SVN/GIT *TAG* - so that you freeze final list of files to be distributed.
- Synchronize date/time stamp on all release files
- Prepare a zip file with the content (and put it somehere?)
- frontpage.md - what version was released when.
- Build in jenkins
  - Verify all  test/regression test are green
- Schedule Acceptance Test date with customer (and instructor)

## Release summary
Email summary (based on this checklist)
- Release notes
- Attach zip or route 
- Write "Known Issues" List.


