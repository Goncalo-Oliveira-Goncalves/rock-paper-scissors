const OPTIONS = ["Rock", "Paper", "Scissors"]

function generateRandomIndex() {
    return Math.floor(Math.random() * 3)
}

function convertIndex(index) {
    return OPTIONS[index]
}

function generateComputerChoice() {
    let index = generateRandomIndex()
    return convertIndex(index)
}

function checkChoiceValidity(choice) {
    return OPTIONS.includes(choice)
}

function getUserChoice() {
    let choice;
    let valid = null;
    while (valid != true) {
        choice = prompt("Rock, Paper or Scissors (Case Sensitive)");
        valid = checkChoiceValidity(choice);
    }

    return choice
}

function checkUserWin(userChoice, pcChoice) {
    if (userChoice == pcChoice) {
        return null // tie
    }
    else if (userChoice == "Rock") {
        if (pcChoice == "Scissors") {
            return true
        }
        else {
            return false
        }
    }
    else if (userChoice == "Scissors") {
        if (pcChoice == "Paper") {
            return true
        }
        else {
            return false
        }
    }
    else if (userChoice == "Paper") {
        if (pcChoice == "Rock") {
            return true
        }
        else {
            return false
        }
    }
    else {
        console.log("something is wrong with checkUserWin function, but I do not know what.")
    }
}

function displayWin() {
    alert("You Won!")
}
function displayLoss() {
    alert("You Lost!")
}
function displayTie() {
    alert("Tie!")
}

function chooseDisplay(winState) {
    if (winState == true) {
        displayWin()
    }
    else if (winState == false) {
        displayLoss()
    }
    else if (winState == null) {
        displayTie()
    }
    else {
        console.log("Errodious Input to function Choose Display")
    }
}

function main() {
    wonValue = null
    while (wonValue != true) {
        userChoice = getUserChoice()
        pcChoice = generateComputerChoice()

        console.log(`Computer choose ${pcChoice}`)

        wonValue = checkUserWin(userChoice, pcChoice)

        chooseDisplay(wonValue)
    }
    // in case won
    chooseDisplay(wonValue)
}