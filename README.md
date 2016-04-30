# NGPractices
Best practices and notes for our projects



# Coding styles
## General recommendation

* Any violation of the rukes is allowed IF it rnchances readability.

## Naming Conveniton
### Names representing types must be in mixed case starting with upper case.
'''java
Line, SavingsAccount, User
'''

### Variable names must be in mixed case starting with lower case.
'''java
line, savingsAccount
'''

### Named constants (including enumeration values) must be all uppercase using underscore to separate words.
'''java
MAX_ITERATIONS, COLOR_RED, PI
'''
 In general, the use of such constants should be minimized. In many cases implementing the value as a method is a better choice:
'''java
int getMaxIterations() // NOT: MAX_ITERATIONS = 25
{
  return 25;
}
'''
This form is both easier to read, and it ensures a unified interface towards class values.

### Names representing methods or functions must be verbs and written in mixed case starting with lower case.
'''java
getName(), computeTotalWidth()
'''

### Names representing namespaces should be all lowercase.
'''java
model::analyzer, io::iomanager, common::math::geometry
'''

### Names representing template types should be a single uppercase letter (????)
'''java
template<class T> ...
template<class C, class D> ...
'''

# Practices
TBD
# Tips and ticks
TBD

