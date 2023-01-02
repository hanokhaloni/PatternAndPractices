# Java

Java SE Development Kit 8u25 on a 64-bit Windows 8

Set the following user environment variables (== environment variables of type user variables)

JAVA\_HOME : C:\Program Files\Java\jdk1.8.0\_25 JDK\_HOME : %JAVA\_HOME% JRE\_HOME : %JAVA\_HOME%\jre CLASSPATH : .;%JAVA\_HOME%\lib;%JAVA\_HOME%\jre\lib PATH : your-unique-entries;%JAVA\_HOME%\bin (make sure that the longish your-unique-entries does not contain any other references to another Java installation folder. Notice that all these environment variables are derived from the "root" environment variable JAVA\_HOME. This makes it easy to update your environment variables when updating the JDK. Just point JAVA\_HOME to the fresh installation.

There is a blogpost explaining the rationale behind all these environment variables. http://gedankenverlust.blogspot.co.il/2012/05/java-environment-variables-definitive.html
