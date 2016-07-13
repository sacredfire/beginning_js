//var userInput = prompt('Do you choose rock, paper or scissors?')
var userInput = 'rock'
var compPick = Math.random()

game()

function game () {
  if (_verifyUserInput() === userInput) {
    console.log(_compChoice())
    console.log(_compare(userInput, compPick))
  }
  else {
    console.log('Try again. You can only choose rock, paper or scissors.')
    game()
  }
}

function _verifyUserInput () {
  if (userInput === 'paper' || userInput === 'rock' || userInput === 'scissors') {
    return userInput
  }
  else {
    return ''
  }
}

function _compChoice () {
  if (compPick < 0.34) {
    compPick = 'rock'
  } else if(compPick <= 0.67) {
    compPick = 'paper'
  } else {
    compPick = 'scissors'
  }
  return ('Computer: ' + compPick)
}

function _compare (choice1, choice2) {
  if (choice1 === choice2) { return 'The result is a tie!' }

  else if (choice1 === 'rock') {
    if (choice2 === 'scissors') { return 'rock wins' }
    else { return 'paper wins' }
  }

  else if (choice1 === 'paper') {
    if (choice2 === 'rock') { return 'paper wins' }
    else { return 'scissors wins' }
  }

  else if (choice1 === 'scissors') {
    if (choice2 === 'rock') { return 'rock wins' }
    else { return 'scissors wins' }
  }
}

