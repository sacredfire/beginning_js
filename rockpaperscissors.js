// var userInput = 'rock'
var compPick = Math.random()
var userInput

game()

function game () {
  userInput = prompt('Do you choose rock, paper or scissors?')
  if (_verifyUserInput() === userInput) {
    document.write(_compChoice())
    document.write(_compare(userInput, compPick))
  }
  else {
    document.write('Try again. You can only choose rock, paper or scissors.' + '</br>')
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
  return ('Computer: ' + compPick + '</br>')
}

function _compare (choice1, choice2) {
  if (choice1 === choice2) { return 'The result is a tie!' + '</br>' }

  else if (choice1 === 'rock') {
    if (choice2 === 'scissors') { return 'rock wins' + '</br>' }
    else { return 'paper wins' + '</br>' }
  }

  else if (choice1 === 'paper') {
    if (choice2 === 'rock') { return 'paper wins' + '</br>' }
    else { return 'scissors wins' + '</br>' }
  }

  else if (choice1 === 'scissors') {
    if (choice2 === 'rock') { return 'rock wins' + '</br>' }
    else { return 'scissors wins' + '</br>' }
  }
}

