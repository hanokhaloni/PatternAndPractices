# Project Title

\<One Paragraph of project description goes here. What are this project's main use cases? This should be not longer than 150 words.\>

## Screenshots
\< Add about 3-4 descriptive screenshots here.\>

## Use cases

\<A couple of use cases that tell what the product does. Try to add main use cases here.>

## Glossary and terms

List of terms and definitions that depict the problem domain.

## Billing info

* Isufit customer \<name and number\>
* Isufit project \<name and number\>

## Links

* [CI deployed Web site](https://aimeos.org/integrations/typo3-shop-extension/)
* [TEST ENV](https://aimeos.org/integrations/typo3-shop-extension/)
* [PROD](https://aimeos.org/integrations/typo3-shop-extension/)
* [SLACK channel](https://sysngs.slack.com/archives/C6QS3EAQN)
* [Issue tracker](https://jira-soft.ngsoft.com/)
* [Source code](https://github.com/aimeos/aimeos-typo3)
* [CI link](http://jenkins/)

# Developer : Getting Started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Directory structure

```cmd
.
|─ Client
|  └─ src - whole clinet android source code
|     ├─ models - list of models used
|     ├─ controllers - list of controllers used
|     └─ views - list of views
└─ Server
   └─ src - WEBAPI .net core 5.3 server 
      ├─ models - list of models used
      ├─ controllers - list of controllers used
      └─ views - list of views

```

## Prerequisites

\<What things you need to install on your development machine, the software and how to install them.
Fill the following table :>

| type | Name | Version | URL |
| ----- | ----- | ---------| ------ |
| Operating system | ubuntu | 04.22 | https://releases.ubuntu.com/22.04/ubuntu-22.04-desktop-amd64.iso |
| Database | mssql | 2014 server edition | https://www.microsoft.com/en-us/download/details.aspx?id=42299 | 


Link installers to a directory (local FSERVER or atrifactory)

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds
* [node](https://nodejs.org/en/) used to run node and npm
* [gradle](https://gradle.org/) build tool
* [msbuild](https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=vs-2019)  a platform for building applications


## Installing developer environment

A step by step series of examples that tell you how to get a development env running

Say what the step will be
```cmd
git clone <add url here>
```

```cmd
Give the example of a command if needed like npm install
```

And repeat

```cmd
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

\<Explain how to run the automated tests for this system>

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

# Deployment

\<Add additional notes about how to deploy this on a live system>
\<Add a list of action items to serve as a deployment checklist>

1. Create release notes from JIRA, by releasing a version (in SEMVER format)
2. Create TAG in GITLAB - include release notres form 1
3. Build (preferrebly using CI task)
4. Test on local machine (sanity)
5. Test on test environment (sanity, retest, or STR)
6. Copy zip files of release to client dir on fserver
7. Send a summary + VDD format
8. With client approval, Install on PreProd and Prod Environments

## Recommended configuration

\<Define what are the recommended configurations here.>
\<Add reference to the recommended configuration files.>

## Custom configurations

\<Define what are the recommended configurations here.>
\<Add reference to the recommended configuration files.>
##

### DEVENV

* \<Local services, passwords, etc...>

### TEST environment

* \<Servers, services, passwords, etc...>
* \<Server names, logins, ips, stuff needed to deploy and use TEST environment\>

### PRODUCTION environemnt

* \<Server names, logins, ips, stuff needed to deploy and use PROD environment\>
* \<AWS credentials, private keys, super duper secret stuff, cia nra\>


# Documents
## Process documentation

* SRS </Add Software requirements link to docs dir or explain why it does not exist/>
* SDD/HLD </Add Doftware disighn document or equivalent - link to docs dir or explain why it does not exist/>
* STD </Add link to docs dir or explain why it does not exist/>
* STR </Add link to docs dir or explain why it does not exist/>
* ADR </Add link to docs/adr dir or explain why it does not exist/>

</Also add links to studio outlines, or axure site.>

## Important documents

* \<Add a link to EE1 or EE2\>
* \<Add a link to initial evaluation\>
* \<Add a link to kickoff meeting\>
* \<Add a lik to KT, lists or even major breakthrous or even Retrospective notes\>
* \<Add reference to local slides - postmorted of the project\>

# Versions

* </List of tags and release notes/>

# Management

## Contacts

* \<Add NGSOFT team members here. Don't forget the role.\>
* **Israel Israeli**, Team Lead
* **Israela Israeli**, Project manager
* \<Add customer members here, don't forget to add phone number, email and role.\>

# Important info

## Encountered problems

* \<List problems and solutions here and link to respective JIRA ticket\>
* \<User stories, behaviors, and strange bugs  should be listed here as well\>

## Best practices

* \<List all best practices used here.\>

## Authors

* **Hanokh Aloni** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
\<Fix if needed for commercial projects>

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
