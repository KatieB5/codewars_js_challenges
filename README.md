# JavaScript CodeWars Challenges

This repository contains a number of CodeWars challenges solved using JavaScript.

All functions have been developed with full TDD using the Jest testing library.

## Challenge descriptions

### bitCounting

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

### geometricProgressionSequence

In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

Result should be separated by comma and space.

Example
geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'

More info: https://en.wikipedia.org/wiki/Geometric_progression

### multiplesOf3and5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

### pigIt

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); igPay atinlay siay oolcay
pigIt('Hello world !'); elloHay orldway !

### vaccineNation
You have been put in charge of administrating vaccinations for children in your local area. Write a function that will generate a list of vaccines for each child presented for vaccination, based on the child's age and vaccination history, and the month of the year.

- The function takes three parameters: age, status and month
- The parameter 'age' will be given in weeks up to 16 weeks, and thereafter in months. You can assume that children presented will be scheduled for vaccination (eg '16 weeks', '12 months' etc).
- The parameter 'status' indicates if the child has missed a scheduled vaccination, and the argument will be a string that says 'up-to-date', or a scheduled stage (eg '8 weeks') that has been missed, in which case you need to add any missing shots to the list. Only one missed vaccination stage will be passed in per function call.
- If the month is 'september', 'october' or 'november' add 'offer fluVaccine' to the list.
- Make sure there are no duplicates in the returned list, and sort it alphabetically.

Example input and output:
input     ('12 weeks', 'up-to-date', 'december')
output    ['fiveInOne', 'rotavirus']

input     ('12 months', '16 weeks', 'june')
output     ['fiveInOne', 'hibMenC', 'measlesMumpsRubella', 'meningitisB', 'pneumococcal']

input     ('40 months', '12 months', 'october') 
output    ['hibMenC', 'measlesMumpsRubella', 'meningitisB', 'offer fluVaccine', 'preSchoolBooster']

## Running the tests

'Node.js' must be installed if not already.

First, clone this repository and install dependencies:

'npm install'

To run the test suite:

'npm test'
