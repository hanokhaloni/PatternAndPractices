# ❗ Errors

* Handle errors where you can decide (e.g. catch an exception at a decision point)
* Use build-in types for errors (prefer Exceptions)
* Distinguis operational errors vs programmer errors

## Levels of treating an error

\[Robust means always returning a result, even ^

* if sometimes the result is not accurate]
* Use a neutral value (e.g., background color)
* Substitute the next piece of valid data (e.g., next selected color)
* Same answer as previous time (e.g., leave existing color)
* Closest legal value (e.g., closest allowable color)
* Log a warning message to a file
* Return an error code
* Call an error processing routine
* Print/display an error message
* Shutdown V \[Correct means never returning an inaccurate result, even if you don’t always return a result at all; it is better to return no result than to return an inaccurate result]
