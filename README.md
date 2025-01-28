# Unexpected NaN Result in JavaScript Function Due to Type Coercion

This repository demonstrates a common JavaScript error: unexpected NaN results stemming from loose typing and type coercion.  The `foo` function intends to double a numeric input. However, it fails to explicitly handle non-numeric inputs, leading to unexpected NaN outputs.

## Bug Description
The provided JavaScript code has a function that is supposed to double a number. However, if a non-numeric string such as 'abc' is passed as an argument, it will produce a NaN (Not a Number) output instead of handling the error gracefully. This is due to JavaScript's implicit type coercion during the multiplication operation.

## Solution
The solution involves explicit type checking and handling of non-numeric inputs to avoid implicit type coercion and unexpected NaN results.  A try-catch block could also be considered for more robust error handling.