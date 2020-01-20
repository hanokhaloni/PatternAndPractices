# Project cheklist

- [ ] Decide about a project name, and tag.

## Project management lifecycle

- [ ] create jira with project name and tag.
- [ ] create sharepoint with same tag as in jira, with the [Frontpage.md](../Project template/Frontpage.md).
- [ ] create svn/git with same tag as in jira
- [ ] create isufit with same tag as in jira
- [ ] create jenkins ci build with same tag as in jira

## Development checklist

Make sure the followingexist in GIT repository:

- [ ] Has a [Readme.md](../Project%20template/Readme.md)
- [ ] Has a version number visible on the main page
- [ ] Has a Architecture Design Record
- [ ] Has SDD, and STR document

- [ ] Has a visible TESTING marker, so that product shows if it runs in test mode
- [ ] Has a visible e2e test for main scenarios (even if they do not cover client side)
- [ ] Has a db migration up+down option

- [ ] Has a build.bat
-- [ ] Has an active linter enabled and constantly working

- [ ] Has a deploy.bat
