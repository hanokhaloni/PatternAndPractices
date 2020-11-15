# Logs checklist

## The general points

1. Do use a proper LOG library
2. Log at the proper level (trace, debug, info, warn, error, fatal)
3. Use the correct log category (e.g. classes that respect the simple responsibility prnciple)
4. Write meaningful log messages
5. Write log messages in English, Make the Logs Human-Readable as Well
6. Add context to your log messages (e.g. transaction 3414 failed OR user AMRAM successfully registered email AMRAM1020@gmail.com)
7. Log in Machine Parseable Format (e.g. 2013-01-12 17:49:37,656 [T1] INFO  c.d.g.UserRequest  User 1334563 plays 4 of spades in game 23425656)
8. Don’t Log Sensitive Information


## Additional notes

Don’t Log for Troubleshooting Purposes Only
Think of Your Audience (e.g. end users, technicains, sysadmins, or other developers)


## APP-S-SUB-CODE scheme

APP-S-CODE or APP-S-SUB-CODE, with respectively:
APP: your application name on 3 letters
S: severity on 1 letter (ie D: debug, I: info…)
SUB: the sub part of the application this code pertains to
CODE: a numeric code specific to the error in question

## Don’t log too much or too Little

Log too much - it's really hard to get any value from the logs.
Log too little - the logs are not indicative of actual problems.

One way to overcome this issue is during development to log as much as possible (do not confuse this with logging added to debug the program). Then when the application enters production, perform an analysis of the produced logs and reduce or increase the logging statement accordingly to the problems found. 