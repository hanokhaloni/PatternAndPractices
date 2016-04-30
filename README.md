# NGPractices
Best practices and notes for our projects



# Coding styles
## General recommendation
Most of the following are taken from these links:
[Source 1](http://named-data.net/codebase/platform/documentation/ndn-platform-development-guidelines/cpp-code-guidelines/)
[Source 2](https://github.com/google/styleguide)

* Any violation of the rukes is allowed IF it rnchances readability.
* 

## Naming Conveniton
### Names representing types must be in mixed case starting with upper case.
```java
Line, SavingsAccount, User
```

### Variable names must be in mixed case starting with lower case.
```java
line, savingsAccount
```

### Named constants (including enumeration values) must be all uppercase using underscore to separate words.
```java
MAX_ITERATIONS, COLOR_RED, PI
```
 In general, the use of such constants should be minimized. In many cases implementing the value as a method is a better choice:
```java
int getMaxIterations() // NOT: MAX_ITERATIONS = 25
{
  return 25;
}
```
This form is both easier to read, and it ensures a unified interface towards class values.

### Names representing methods or functions must be verbs and written in mixed case starting with lower case.
```java
getName(), computeTotalWidth()
```

### Names representing namespaces should be all lowercase.
```java
model::analyzer, io::iomanager, common::math::geometry
```

### Names representing template types should be a single uppercase letter (????)
```java
template<class T> ...
template<class C, class D> ...
```

### Abbreviations and acronyms must not be uppercase when used as name
```java
exportHtmlSource(); // NOT: exportHTMLSource();
openDvdPlayer();    // NOT: openDVDPlayer();
```
Using all uppercase for the base name will give conflicts with the naming conventions given above. A variable of this type whould have to be named dVD, hTML etc. which obviously is not very readable. Another problem is illustrated in the examples above; When the name is connected to another, the readbility is seriously reduced; the word following the abbreviation does not stand out as it should.

### Private class variables should not have any underscore
Most modern IDE can tell the difference form private to public (or protected) members.

### Generic variables should have the same name as their type.
```java
void setTopic(Topic* topic) // NOT: void setTopic(Topic* value) 
                            // NOT: void setTopic(Topic* aTopic)
                            // NOT: void setTopic(Topic* t)
void connect(Database* database) // NOT: void connect(Database* db)
                                 // NOT: void connect(Database* oracleDB)
```
Reduce complexity by reducing the number of terms and names used. Also makes it easy to deduce the type given a variable name only.If for some reason this convention doesn’t seem to fit it is a strong indication that the type name is badly chosen.Non-generic variables have a role. These variables can often be named by combining role and type:
```java
Point startingPoint, centerPoint;
Name loginName;
```
### All names should be written in English.
```java
transactionLog; // NOT : sikumPeulot
```
English is the preferred language for software development.

### Variables with a large scope should have long names, variables with a small scope can have short names
Scratch variables used for temporary storage or indices are best kept short. A programmer reading such variables should be able to assume that its value is not used outside of a few lines of code. Common scratch variables for integers are i, j, k, m, n and for characters c and d.

### The name of the object is implicit, and should be avoided in a method name.
```java
line.getLength(); // NOT: line.getLineLength();
```
The latter seems natural in the class declaration, but proves superfluous in use, as shown in the example.




# Practices
[Source](https://github.com/thomasdavis/best-practices)
## Plan, Plan, Plan.
It is much cheaper to do it correctly the first time than to redo it later on. The sooner a problem is identified and fixed, the cheaper it is to do so.

"The general who wins a battle makes many calculations in his temple before the battle is fought. The general who loses a battle makes but few calculations beforehand. Thus do many calculations lead to victory, and few calculations to defeat: how much more no calculation at all! It is by attention to this point that I can foresee who is likely to win or lose."

"Plans are worthless, planning is invaluable."- Sir Winston Churchill

For this to work, everyone involved has to listen, everyone has to be open, everyone has to be responsive. Or we could keep flailing away with the fucked up attitude that “it has to be this way” because the sacred project plan says it’s this way. Because that really is a lot of fun, isn’t it?

## Premature optimization is the root of all evil.
Programmers waste enormous amounts of time thinking about, or worrying about, the speed of noncritical parts of their programs, and these attempts at efficiency actually have a strong negative impact when debugging and maintenance are considered. 
[Source](http://c2.com/cgi/wiki?PrematureOptimization)

## Programming is also Teaching your team
... a team of mediocre, inexperienced coders who work together and write for the benefit of the team has the capability to become a great team, and they can take that learning approach to create other great teams. It all comes down to whether the team sees its work as simply writing code... or writing with the goal of both code and learning" (Emphasis mine)

– Reginald Braithwaite
[Source](http://www.theserverside.com/news/1374204/Programming-is-Also-Teaching-Your-Team)

# Tips and ticks

[Source](https://github.com/thomasdavis/best-practices)


