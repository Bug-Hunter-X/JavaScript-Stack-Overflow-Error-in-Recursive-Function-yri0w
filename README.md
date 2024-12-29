# JavaScript Stack Overflow Error
This repository demonstrates a common error in recursive JavaScript functions: a missing base case for negative input, leading to a stack overflow error.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides the corrected version with a proper base case to handle the negative input.

## How to reproduce
1. Clone this repository.
2. Open `bug.js` in a JavaScript environment (e.g., Node.js, browser console).
3. Run the code. You will see a stack overflow error when calling foo(-1).
4. Open `bugSolution.js` and observe the correction, the code gracefully handles negative inputs.

## Additional Notes
Stack overflow errors often occur when a recursive function lacks a proper base case or when the recursion depth exceeds the system's limits.  Always carefully consider the base case(s) of your recursive functions, and look for ways to optimize recursion or iterative solutions in cases where deep recursion might occur.