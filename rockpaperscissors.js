var userInput
var verifiedInput
var compPick

var compScore = 0
var userScore = 0
var totalGames = 0

game()

function game () {
  userInput = prompt('Do you choose rock, paper or scissors?')
  if (_verifyUserInput() !== 0) {
    document.write(_compChoice())
    document.write(_compare(verifiedInput, compPick))
    totalGames++
    document.write('Total games played: ' + totalGames + '</br>')
    document.write('Total score: comp ' + compScore + ' : ' + userScore + ' you' + '</br>' + '</br>')
    game()
  } else {
    alert('Try again. You can only choose rock, paper or scissors.')
    game()
  }
}

function _verifyUserInput () {
  if (userInput === 'paper' || userInput === 'rock' || userInput === 'scissors') {
    verifiedInput = userInput
    return verifiedInput
  } else if (userInput === 'p') {
    verifiedInput = 'paper'
    return verifiedInput
  } else if (userInput === 'r') {
    verifiedInput = 'rock'
    return verifiedInput
  } else if (userInput === 's') {
    verifiedInput = 'scissors'
    return verifiedInput
  } else if (userInput === '') {
    return 0
  } else {
    return 0
  }
}

function _compChoice () {
  if (Math.random() < 0.34) {
    compPick = 'rock'
  } else if (Math.random() <= 0.67) {
    compPick = 'paper'
  } else {
    compPick = 'scissors'
  }
  return 'Computer: ' + compPick + '</br>'
}

function _compare (choice1, choice2) {
  if (choice1 === choice2) { return 'The result is a tie!' + '</br>' }

  else if (choice1 === 'rock') {
    if (choice2 === 'scissors') { userScore++; return 'rock wins' + '</br>' }
    else { compScore++; return 'paper wins' + '</br>' }
  }

  else if (choice1 === 'paper') {
    if (choice2 === 'rock') { userScore++; return 'paper wins' + '</br>' }
    else { compScore++; return 'scissors wins' + '</br>' }
  }

  else if (choice1 === 'scissors') {
    if (choice2 === 'rock') { compScore++; return 'rock wins' + '</br>' }
    else { userScore++; return 'scissors wins' + '</br>' }
  }
}
