const highScoresElement = document.querySelector('#highscores')
const clearScoresElement = document.querySelector('#clear')
const highScoresData = JSON.parse(localStorage.getItem('highScores')) || {}

let highScoresList = ``

Object.keys(highScoresData).forEach(user => {
  highScoresList += `<li>${user} - ${highScoresData[user]}</li>`
})

highScoresElement.innerHTML = highScoresList

function removeDataFromLocalStorage (dataToRemove) {
  localStorage.removeItem(dataToRemove)
}

clearScoresElement.addEventListener('click', () => {
  removeDataFromLocalStorage('highScores')
  highScoresElement.innerHTML = ''
})