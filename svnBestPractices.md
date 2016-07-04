# Commit workflow
1. Developer + Team leader -> Plan the task
2. Developer -> code the task
3. Developer -> Checks the task
4. Developer + Team leader -> Code review
4.1. Team leader -> If anomaly is found - mark the associated task with PostMortem flag.
4.2. Developer -> If code review requires fixes - developer should return to step 2
5. Developer -> commit the task (make sure that the team leader acknoledges the change!).


# Do commit early and often
Commit every line you change if you can :) 

# ALWAYS comment your commits
Creating insightful and descriptive commit messages is one of the best things you can do for others who use the repository. It lets people quickly understand changes without having to read code. When doing history archeology to answer some question, good commit messages likewise become very important.

# Use the issue-tracker wisely
Try to create as many two-way links between Subversion changesets and your issue-tracking database as possible:
If possible, refer to a specific issue ID in every commit log message.
When appending information to an issue (to describe progress, or to close the issue) name the revision number(s) responsible for the change.
Add JIRA markup if exists (like BEEPEM-19 if you commit fixed BEEPEM-19 bug or task)

# Release tagging
Always tag a release with a version name. Use the same version name you use in JIRA.

# Understand mixed-revision working copies

Your working copy's directories and files can be at different "working" revisions: this is a deliberate feature which allows you to mix and match older versions of things with newer ones. But there are few facts you must be aware of:

1. After every svn commit, your working copy has mixed revisions. The things you just committed are now at the HEAD revision, and everything else is at an older revision.
2. Certain commits are disallowed:
2.1. You cannot commit the deletion of a file or directory which doesn't have a working revision of HEAD.
2.2. You cannot commit a property change to a directory which doesn't have a working revision of HEAD.
3. svn update will bring your entire working copy to one working revision, and is the typical solution to the problems mentioned in point #2.


# Use default project root
A "project root" contains exactly three subdirectories: /trunk, /branches, and /tags. A repository may contain only one project root, or it may contain a number of them.

# Know when to create branches - The Branch-When-Needed system

(This is the system used by the Subversion project.)

Users commit their day-to-day work on /trunk.
Rule #1: /trunk must compile and pass regression tests at all times. Committers who violate this rule are publically humiliated.
Rule #2: a single commit (changeset) must not be so large so as to discourage peer-review.
Rule #3: if rules #1 and #2 come into conflict (i.e. it's impossible to make a series of small commits without disrupting the trunk), then the user should create a branch and commit a series of smaller changesets there. This allows peer-review without disrupting the stability of /trunk.
Pros: /trunk is guaranteed to be stable at all times. The hassle of branching/merging is somewhat rare.

Cons: Adds a bit of burden to users' daily work: they must compile and test before every commit.



# DO NOT

1. commit anything that can be regenerated from other things that were committed.
Things that can be regenerated include binaries, object files, jars, .class, flex/yacc generated code, etc. Really the only place there is room for disagreement about this is if something might take hours to regenerate (rendered images, eg, but see Dividing work into repositories for more best practices about this) or autoconf generated files (so people can configure and compile without autotools installed).
2. commit configuration files other than default developer configuration files.
Specifically configuration files that might change from environment to environment or for any reasons. 
3. commit large binary files (when possible)
