# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
In order to accomplish a cleaner and more readable code, the following refactorings were made in this project:

- I've installed prettier code formatter to turn the code more readable
- Refactoring to use modern Javascript, taking advantage of features such as ES6 modules, optional chaining, and null coalescing, which, consequently, turn a code more concise.
- To avoid a bunch of ifs and elses, which compromise code readability, and also to decople the code, improvements were made on it, such as:
  - Initializing candidate variable
  - Left constants in a separate file
  - Creating a function to normalize data using JSON.stringify(), avoiding code repetition
  - Creating a function 'createHash' to turn the code concise (DRY)
  - Creating a utils folder to better organization the project

New test cases were created to cover the whole code.
