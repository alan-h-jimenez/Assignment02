// Get user data
let num1 = parseInt(prompt('Enter the first value to compare: '))
let num2 = parseInt(prompt('Enter the second value to compare: '))

// Compare values
if (num1 > num2) {
    // First value is greater than the secodn value
    document.write(`<h1>${num1} is greater than ${num2}.</h1>`)
} else if (num1 < num2) {
    // First value is less than the secodn value
    document.write(`<h1>${num2} is greater than ${num1}.</h1>`)
} else {
    // First value is equal to the second value
    document.write('<h1>The two values are equal.</h1>')
}