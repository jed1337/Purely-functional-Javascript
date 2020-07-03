## Purely functional Javascript
Based on [Haskell for Javascript programmers](https://www.youtube.com/watch?v=pUN3algpvMs) by [Tsoding](https://www.youtube.com/channel/UCEbYhDd6c6vngsF5PQpFVWg)

### Information
* A list is made by nesting pairs `[1,2,3,4,5] = (1,(2,(3,(4,(5,null)))))`
* Use recursion since we can't use loops

### Rules
1. No loops
2. No ifs
3. Function is a single return
4. No side effects
5. No assignments in functions
6. No arrays
7. Only functions with 0 or 1 arguments

### Sample usage
```javascript
//Create a pair of objects from 1 to 10
let xs=range(1)(10)

//Print their sum
console.log(sum(xs))

//Strings are just an array of characters
//Convert an array to a pair data type then print it
let monicaPair=arrayToPair("Just Monika")
console.log(monicaPair)

//FizzBuzz from 1 to 100
pairToArray(map(fizzBuzz)(range(1)(100)))
```