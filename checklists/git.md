---
description: Git related stuff
---

# ⚡ Git

## Pre-push flow

* [ ] Compile code, make sure there are no warnings.
* [ ] Run static code analysis, make sure code is cleaner than the last commit.
* [ ] Run tests and make sure they pass.
* [ ] Update the trunk/local master folder.
* [ ] Resolve conflicts if needed.
* [ ] Run tests again and make sure they pass.&#x20;
* [ ] Have your changeset be reviewed and approved.
* [ ] Write a complete check-in comment.

## Writing a commit message

Good commit messages follow these criterions:

* They say why you did these changes.
* They shortly describe what was done so we can effectively glance through the history and find what we need.
* They are self-contained – It’s great that you have a bug tracker, but don’t make me have to open it to understand why a commit was made.
* They are in present tense

## Commit message template

```
JIRA-XYZ/NO-JIRA: Summary of contents of commit
Description: Full description of contents and purpose of commit. 
Any other details of commit go here, such as issue summary and how or why this commit fixes it. 
Complex issues and rationale belong in JIRA comments, however. 
External reference http://tracker.example.com/id 
Reviewed by : name.surname@ngsoft.com 
```

### Bad commit message examples

* MATAN-872
* Bug fix
* More work
* Aaaaaaaaaaaaaaa
* Upload new file
* Tweaks to applicationInfo.cs file
* Testss
* TopBar almost finished
* Add CommunityManager class
* Change release information details
* Fix tests broken by a null decoder.MonitorId
* Topbar : added controls for login, icon, and volume control

### Good commit messages

* MATAN-123 commit-graph: return 64-bit generation number
* No-jira : Fix failing CompositePropertySourceTests
* Refactor: extract AlertDetails from Alert
* MATAN-872 - Alerter - Replace severity name to severity level
