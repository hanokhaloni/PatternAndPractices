# 👩💻 Code review



## Code review checklist

### Start cleaning up

* [ ] Avoid unnecessary comparisons
* [ ] Avoid negations
* [ ] Return boolean expressions directly
* [ ] Simplify boolean expressions
* [ ] Avoid NullPointerException in conditionals
* [ ] Avoid switch fallthrough
* [ ] Always use bracers
* [ ] Ensure code symmetry
* [ ] Always do null checks

### Code style

* [ ] Replace magic numbers with constants
* [ ] Favor enums over integer constants
* [ ] Favor for-each over for loops
* [ ] Avoid compute-intense operations during iteration
* [ ] Group with newlines
* [ ] Favor format over concatenation
* [ ] Favor API over DIY
* [ ] Minimize the function parameters\
  (3 or less)
* [ ] Avoid long methods
* [ ] Avoid train racks / call chains
* [ ] Avoid absolute paths

### Comments

* [ ] Remove superfluous comments
* [ ] Remove commented-out code
* [ ] Replace comments with constants
* [ ] Replace comments with utility methods
* [ ] Document implementation decision
* [ ] Document using examples
* [ ] Document using tests

### Naming

* [ ] Use language naming convention
* [ ] Avoid single letter names
* [ ] Avoid abbreviations
* [ ] Avoid meaningless terms
* [ ] Use domain terminology

### Error handling

* [ ] Fail fast &#x20;
* [ ] Always catch most specific exception
* [ ] Explain cause message
* [ ] Avoid breaking the cause chain
* [ ] Expose cause in variable
* [ ] Always check before cast
* [ ] Always close resources
* [ ] Explain empty catch&#x20;

### Asserts and tests

* [ ] Logs exist and are thorough
* [ ] Logs at appropriate log level
* [ ] Structure tests into Given-When-Then
* [ ] Use meaningful assertions
* [ ] Expected before actual value
* [ ] Minimize assertions per test
* [ ] Use reasonable tolerance values
* [ ] Let the test framework handle exceptions
* [ ] Describe your tests
* [ ] Favor standalone tests
* [ ] Parametrize your tests
* [ ] Cover edge cases

### Data flow

* [ ] Favor lambdas over anonymous classes
* [ ] Favor functional over imperative style
* [ ] Favor method reference over lambdas
* [ ] Avoid side effects
* [ ] Use collect for terminating complex streams
* [ ] Avoid exceptions in streams
* [ ] Favor optional over null
* [ ] Avoid optional fields or parameters
* [ ] JAVA- Use optionals for streams

### Advanced

* [ ] Remove unnecessary complexity should be avoided. (Keep it simple).
* [ ] Avoid code duplication (Don't repeat yourself).
* [ ] No code can be replaced with library functions (Don't reinvent the wheel).
* [ ] Remove dead code.
* [ ] Avoid complex/long boolean expressions.
* [ ] Define variables close to where used
* [ ] Use the correct access modifiers for methods and properties

## Reviewer notes

* Ask what the code does.
* Ask to show the code.
* Reviewer is driving the keyboard.
* Time frame 20 min.
* Never review a commit for more than 1 day of work.

## Do’s about code review

* Be nice (don’t curse, don’t be so negative about it)
* Make sure that the code does what it meant to do.
* Try to find bugs!&#x20;
* Use emojis, use nice language
* Asking > Telling. Ask a lot of questions : Ask yourself why did the reviewee write the code like this? Ask yourself why does the code work? Ask the reviewee how was the code tested? (bonus points - Can you test the code without running the product?)
* Aim for simplicity. Readable > “code that works” (OR - incomprehensible code is rarely correct). Read the code!
* Have someone set the bar
* Do meta-reviews (i.e. your R\&D manager/CTO should review some code reviews).
* As a reviewee - remember - it’s your professional choice which review rejects you take care of.
* If a PR has test that’s great, also reviewee test correctness
* Work in small PRs - 10 lines have 10 mistakes, 1k lines have no mistakes.

### Don’t

* Don’t have a committee about it
* Don’t give lectures
* Don’t fight for a best practice
* Don’t nag or harass the other side (reviewee and reviewer).
* Don’t blame / publicly show and tell

## Other notes

* Style issues should be enforced by CI (lint, checkstyle, fxcop, etc…)
* Junior should earn the right to commit code - by doing code reviews
* Consider not using a merge commit (squash commits, or add commits - or even order old commits and make sure they make sense!)

