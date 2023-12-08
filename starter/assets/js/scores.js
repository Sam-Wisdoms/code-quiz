// declaration and targeting of elements
const highScoresElement = document.querySelector('#highscores')
const clearScoresElement = document.querySelector('#clear')
const highScoresData = JSON.parse(localStorage.getItem('highScores')) || {}

// empty string for holding scores
let highScoresList = ``

// recoding high scores
Object.keys(highScoresData).forEach(user => {
  highScoresList += `<li>${user} - ${highScoresData[user]}</li>`
})

highScoresElement.innerHTML = highScoresList

// function for clearing local storage
function removeDataFromLocalStorage (dataToRemove) {
  localStorage.removeItem(dataToRemove)
}

clearScoresElement.addEventListener('click', () => {
  removeDataFromLocalStorage('highScores')
  highScoresElement.innerHTML = ''
})