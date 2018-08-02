
const suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
const rank = ['Ace', '2','3','4','5','6','7','8','9','10','Jack','Queen','King']
const deck = []
const discardPile = []

const createDeckOfCard = () => { 
// Creates Ordered Deck
for(let j = 0; j < suit.length; j++) {
  for (let i = 0; i < rank.length; i++) {
    deck.push(rank[i] + ' of ' + suit[j])
  }
}
// Shuffles Deck
for (i = 0; i < deck.length; i++) {
  let j = Math.floor(Math.random() * i)
  let temp = deck[i]
  deck[i] = deck[j]
  deck[j] = temp
}
}
// draw 2 cards   
const drawCard = () => {
  console.log(deck[deck.length - 1])
  const newLi = document.createElement('li')
  newLi.textContent = deck.pop()
  document.querySelector('.dealt-card').appendChild(newLi)
  const newLi2 = document.createElement('li')
  newLi2.textContent = deck.pop()
  document.querySelector('.dealt-card2').appendChild(newLi2)
  console.log(deck.length)
} 





document.addEventListener('DOMContentLoaded', createDeckOfCard)
document.querySelector('.deck-of-cards').addEventListener('click', drawCard)
