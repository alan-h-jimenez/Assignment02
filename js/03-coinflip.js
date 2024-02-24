// Set the coin flip value
let randomNum = Math.round(Math.random())

// Get user guess
let choice = prompt('Heads or Tails? ').toLowerCase()

if (randomNum < 0.5) {
    // Coin flip is heads
    if (choice == 'heads') {
        // User picked Heads
        alert('The flip was heads and you chose heads...you win!')
    } else if (choice == 'tails') {
        // User picked Tails
        alert('The flip was heads but you chose tails...you lose!')
    } else {
        // User didn't picked heads or tails
        alert('You didn\'t select Heads or Tails.')
    }
} else {
    // Coin flip is tails
    if (choice == 'heads') {
        // User picked Heads
        alert('The flip was tails but you chose heads...you lose!')
    } else if (choice == 'tails') {
        // User picked Tails
        alert('The flip was tails and you chose tails...you win!')
    } else {
        // User didn't picked heads or tails
        alert('You didn\'t select Heads or Tails.')
    }
}