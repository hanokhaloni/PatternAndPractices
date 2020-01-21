# Project cheklist

- [ ] Decide about a project name, and tag.

## Project management lifecycle

- [ ] create jira with project name and tag.
- [ ] create frontpage entry with same tag as in jira, with the [Frontpage.md](../Project template/Frontpage.md).
-- [ ] Commit it to SYSNGS\projects! 
- [ ] create svn/git with same tag as in jira
- [ ] create isufit with same tag as in jira
- [ ] create jenkins ci build with same tag as in jira
- [ ] Update links in [README.md](../Project%20template/README.md)

## project layout

- [ ] Make sure you map to src dir (or if there are multiple src dirs, they are mapped in [README.md](../Project%20template/README.md))
- [ ] docs dir is there, SRS, SDD/HLD, STD and STR are there. also update in [README.md](../Project%20template/README.md)
- [ ] .gitignore is generated.
- [ ] .gradle / pom.xml / .sln / any build script in root.
- [ ] .docker in root.
- [ ] howto create dev env - update in [README.md](../Project%20template/README.md)
- [ ] howto deploy - update in [README.md](../Project%20template/README.md)
- [ ] original ee from google sheets + all parts filled - update in [README.md](../Project%20template/README.md)
- [ ] create schema + data scripts
- [ ] jenkins batch files for (prepare, build, test, zip-artifact)
- [ ] jenkins job link OR .gitlab-ci.yml

TODO: maybe this stuff should be in \ProjectTemplate ?

## Development checklist

Make sure the followingexist in GIT repository:

- [ ] Has a [README.md](../Project%20template/README.md).
- [ ] Has a version number visible on the main page.
- [ ] Has a Architecture Design Record.
- [ ] Has SDD, and STR document.

- [ ] Has a visible TESTING marker, so that product shows if it runs in test mode.
- [ ] Has a visible e2e test for main scenarios (even if they do not cover client side).
- [ ] Has a db migration up+down option.

- [ ] Has a build.bat
-- [ ] Has an active linter enabled and constantly working.

- [ ] Has a deployToCi.bat which deploys to local CI.
- [ ] Has a deployToTestEnv.bat which deploys to test env.
- [ ] Has a deployToProd.bat which deploys to prod.

