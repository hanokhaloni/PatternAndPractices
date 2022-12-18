# Postmortem format 

## Timeline

- Tell me what happened and ~when (no need to go to any time resolution, justtell what happened when?)
- Use ISO date format to ouline each entry in timeline.

## Detection 

- Who detected how and what (and when)? When did we detect this issue?
- Why didn't we detect the issue earlier?

## Business impact

- What was the actual buisness impact? Did we lose anything? Was there any downtime?

## Root cause

- Ask why a lot. Don't blame. Try to figure out the root cause of the problem.
- If you were the man behind the bug, What do we need to do in order to prevent such a vulnerability?
- Keep in mind that human error is an effect of systematic Vulnerabilities deeper inside the organization.

## Action items

- Who need to do what by when? e.g. add tests, add monitoring, ignore it, document how to handle, ask for a refactor, etc...
- When we propose a solution - is it the best solution? what other solutions did we consider? Are we sure that this solution solves the problem?

# Documentation Checklist
-  Keep it written
-  Add JIRA/other ticket + "PostMortem" label
-  tell your friends about it

עברית# 
=======

1. רצף אירועים – מה קרה מתי?
2. מי זיהה את הבעיה ואיך?
3. מה האימפקט של הבעיה?
4. מה הגורם שגרם לבעיה? מה הסיבה?
5. מטלות לביצוע
