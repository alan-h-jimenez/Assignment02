// Get user data
let grade = parseInt(prompt('Enter the grade (Must be a number between 1 and 100): '))

// Verify value is in range
if (grade >= 0 && grade <= 100) {
    if (grade >= 90 && grade <= 100) {
        console.log('You received an A')
    } else if (grade >= 80 && grade <= 89) {
        console.log('You received an B')
    } else if (grade >= 70 && grade <= 79) {
        console.log('You received an C')
    } else if (grade >= 60 && grade <= 69) {
        console.log('You received an D')
    } else {
        console.log('You received an F')
    }
} else {
    // Value entered is not valid
    console.log(`You entered \'${grade}\'. Only values between 1 and 100 are accepted.`)
}