# Porting questioneer

### Platform-Specific Information

1\.       What is your current development platform for the application?

2\.       What platform does the application currently run on?

3\.       Has this application been deployed on any other platform than the development one? If so, which version of the platform is it running on?

4\.       Describe any hardware (that is, graphics adapters or cards) used by your application and whether the required drivers are available on the Linux platform.

5\.       Please describe your application and its architecture in detail.

6\.       What are the different components of your software? Please provide

7\.       Which of these pieces needs to be ported or not ported? Please provide

8\.       What percentage of the application(s) to be ported is/are written in the following programming languages?

a.       Java

b.       C#

c.       C

d.       C++

e.       Assembler

f.        VB

g.       Shells (ksh,csh,perl,awk or others)

9\.       Please provide a rough estimate of the number of lines of code in the software, listed by language types.

10\.   For Java apps: Does the application use the JNI9 to link native libraries? Please describe.

11\.   Does the application use kernel modules? If so, please describe.

12\.   Is this a 2D/3D graphics application? Please describe.

13\.   Does the application use UNIX pipes, message queues, shared memory, signals, or semaphores? Please describe.

14\.   Is the application, or any of its components, multithreaded? If so, which threads library is currently being used? Does the application rely on any proprietary threading priorities on your development platform?

15\.   Does the application perform operations that assume specific byte storage order? Is this likely to be an issue during the port?

This question relates to the “endian-ess” of the application. Most Linux ports will target the Intel platform, which is small-endian, whereas most source platforms will be big-endian. Nonportable code that assumes endian-specific characteristics will break when not ported correctly. Worse yet, the ported  code will not exhibit errors during the porting phase. The problem usually crops up during system testing, where it is harder to find.

16\.   Which compiler(s) and version are used in the development platform?

17\.   In addition to the development environment, are there any dependencies on debugging tools such as memory leak debuggers, performance analysis tools, exception handling, and so forth?

18\.   Is this a socket-based application? If so, does it use RPC? Please describe.

Although Linux supports standards-based socket and RPC semantics, the intent is to ascertain portability. Asking this question may bring to light nonportable architecture the customer may have implemented in the application. This question can also lead to questions on what setup is needed at the testing phase.

19\.   Does the application use any third-party software components (database tools, application server, or other middleware)? If so,which ones?

20\.   How is the application delivered and installed? Does it use standard packaging? Will the installation scripts need to be ported, too?

21\.   Is the application or any of its components currently in 64-bit? Will any component need to be migrated to 64-bit?

&#x20;

### Database Information

1\.       What databases are currently supported? Please include version numbers.

2\.       What database is the ported application expected to run with?In addition to Question 1 in this section, what database do you expect the ported application to run with on the Linux platform?

3\.       Does the application use any nonrelational or proprietary databases?

4\.       How does the application communicate with the database?

a.       Programming language(s) (for example, Java, C/C++, other)

b.       Database interface(s) (for example, ODBC, OCI, JDBC)

5\.       Does the application require the use of extended data types (XML, audio, binary, video, and so on)?

&#x20;

### Porting Project Time Schedule Information

1\.       What is the desired General Availability date for the application on the target platform?

2\.       Has the porting of the application already started on the target platform?

3\.       What is the estimated port complexity level (low, medium, or high)?

4\.       What factors were considered in this complexity ranking?

5\.       If the application has been ported to another platform, how long did that port take? How many resources were dedicated to it? What problems were encountered?

6\.       What is your rough estimate of the project porting time and resources required?

&#x20;

### Testing-Specific Information

1\.       Please describe the acceptance testing setup.

2\.       What kind of networking and database setup will be required for unit testing?

3\.       How much testing will be required after porting (number of days, number of resources)?

4\.       Do you have established test scripts and application performance measurements?

5\.       Will benchmarks need to be run for comparison testing?

6\.       Is performance data available on current platforms?

7\.       When were the performance tests last executed?
