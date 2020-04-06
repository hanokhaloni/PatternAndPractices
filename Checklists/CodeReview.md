# Code review notes

## Super-basic stuff

- [ ] The code compiler without errors and without warnings.
- [ ] Unit tests all PASS (including your newly added functionality).

## Beginner

- [ ] The code is easy to understand. Simplicity should be a key goal in design and unnecessary complexity should be avoided. (Keep it simple).
- [ ] Code is not repeated or duplicated. No sign for copy-paste-development.  (Don't repeat yourself).
- [ ] No code can be replaced with library functions (Don't reinvent the wheel).
- [ ] Names are simple and if possible short.
- [ ] There is no commented out code.
- [ ] There is no dead code.
- [ ] No empty blocks of code.
- [ ] No complex/long boolean expressions.
- [ ] Variables defined close to where they are used. (in methods only).
- [ ] All class, variable, and method modifiers are correct.
- [ ] There are no usages of 'magic numbers' (use enums or constans instead).

## A bit more advanced

- [ ] Follows coding conventions (or linted or formatted)
- [ ] Function name explains what it does.
- [ ] Required logs are present
- [ ] Debugging code is absent
- [ ] No System.out.println or similar calls exist
- [ ] No stack traces are printed
- [ ] Variables are not accidentally used with null values
- [ ] Variables are immutable where possible
- [ ] Code is not repeated or duplicated. No sign for copy-paste-development.
- [ ] There is an else block for every if clause even if it is empty
- [ ] No complex/long boolean expressions
- [ ] No negatively named boolean variables
- [ ] No empty blocks of code
- [ ] Ideal data structures are used
- [ ] Constructors do not accept null/none values
- [ ] Collections are initialised with a specific estimated capacity
- [ ] Arrays are checked for out of bound conditions
- [ ] Catch clauses are fine grained and catch specific exceptions
- [ ] Exceptions are not eaten if caught, unless explicitly documented otherwise
- [ ] APIs and other public contracts check input values and fail fast
- [ ] Files/Sockets/Cursors and other resources are properly closed even when an exception occurs in using them
- [ ] StringBuilder is used to concatenate strings
- [ ] Null/None are not returned from any method
- [ ] Floating point numbers are not compared for equality
- [ ] Loops have a set length and correct termination conditions
- [ ] Blocks of code inside loops are as small as possible
- [ ] Order/index of a collection is not modified when it is being looped over
- [ ] No methods with boolean parameters
- [ ] No object exists longer than necessary
- [ ] Design patterns if used are correctly applied
- [ ] No memory leaks
- [ ] Law of Demeter is not violated
- [ ] Methods return early without compromising code readability
  
## Documentation

- [ ] Comments exist and describe rationale or reasons for decisions in code. 
- [ ] All public methods/interfaces/contracts are commented describing usage
- [ ] All edge cases are described in comments
- [ ] All unusual behaviour or edge case handling is commented
- [ ] Data structures and units of measurement are explained

## Threading

- [ ] Code is thread-safe. Objects accessed by multiple threads are accessed only through a lock, or synchronized methods.
- [ ] Race conditions have been handled
- [ ] No deadlocks - Locks are acquired and released in the right order to prevent deadlocks, even in error handling code.
- [ ] StringBuffer is used to concatenate strings in multi-threaded code

## Security

- [ ] All data inputs are checked (for the correct type, length/size, format, and range)
- [ ] Invalid parameter values handled such that exceptions are not thrown
- [ ] No sensitive information is logged or visible in a stacktrace

## Also check that:

- [ ] Perform algorithm with needed results.
- [ ] Code is refactored with a tool.
- [ ] Check singleton for deadlock.
- [ ] Take out similar code to separate function.
- [ ] Ask questions if you didn’t understand something.
- [ ] Add valid config files to project folder.
- [ ] Unite code by ideas and logic.
- [ ] Delete testing code (unless it's a unit test that's effectively asserting the system functionality).
- [ ] Write lambdas in extended mode (not in one line).
- [ ] NEVER write if/else with one code instruction without   {}.
- [ ] Use understandable names for commits and without repeats.
- [ ] Variable initialization with nullptr in new style: QString *str{nullptr}.
- [ ] Make code compact without blank lines.
- [ ] One QTimer – one task.
- [ ] If variable has setter function, use it to set value.
- [ ] Don’t forget to assign issues, move to WIP column, set related branches.

## CPP only

- [ ] Constants starts with a capital letter, ends with the value type (i.e. MSec) and use constexpr where possible.
- [ ] Organize code sections in *.h files by this order: public, public slots, signals, private (functions), private slots, private (m_members).

## Java only
- [ ] Appropriate JCIP annotations are used
- [ ] No use of Object class, use generics instead
- [ ] Uses final modifier to prevent mistaken assignments
