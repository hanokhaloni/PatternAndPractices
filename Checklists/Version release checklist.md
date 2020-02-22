# Version release checklist

- Pass through tasks in current release in jira
- Create SVN/GIT TAG
- Build in jenkins
- Email client, link binaries to FTP / artifactory

## another version

- update version and verify in dev it's visible (either client, logs, or footers)
- Create release notes
- Deploy on test
- Dev test on TEST (sanity)
- QA test on TEST
- Read LOGS
- Contact client – we changed test env – please review
- Client test on TEST
- Deploy on Prod
- Dev test on PROD(sanity) – try to make it a READ-ONLY oriented as possible
- Read LOGS
- If any step fails, go back to step 1
