let gameStarted = false;
let memoryArray = [];
let memoryCounter = [];
let playerArray = [];
let playerCounter = [];
let levelCounter = [];
let level = 1;
let memory = [];
let user;
let playLevel;
let userCounter = [];
let startMemory;
let matchArrays = true;
const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}
const getRandomCardsPositions = (numberOfRandomCards) => {
  const totalNumberOfCards = 16;
  const randomCardsPositions = [];
  while (randomCardsPositions.length < numberOfRandomCards) {
    nextCardPosition = getRandomNumberInRange(1, totalNumberOfCards);
    console.log(nextCardPosition);
    if (!randomCardsPositions.includes(nextCardPosition)) {
      randomCardsPositions.push(nextCardPosition)
    }
  }
  return randomCardsPositions;
}
window.addEventListener('load', () => {
  console.log('Rad1')
  const startButton = document.querySelector('#btn');
  const cardsContainer = document.querySelector('#cards-container');
  const cards = cardsContainer.children;
  startButton.addEventListener('click', () => {
    /*startButton.disabled = true;*/
    console.log('Rad2')
    gameStarted = true;
    cardPositions = getRandomCardsPositions(level)
    console.log(cardPositions);
    cardPositions.forEach((position, index) => {
      const card = cards[position - 1];
      if (card) {
        setTimeout(() => {
          card.style.backgroundColor = 'red';
        }, 0 + index * 500);
        setTimeout(() => {
          card.style.backgroundColor = '#62b6cb';
        }, ((level+ 1) * 1000))
      }
    })
    level = level + 1; /* incrfease level by 1 */
  });
});