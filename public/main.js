// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)


const suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
const rank = ['Ace', '2','3','4','5','6','7','8','9','10','Jack','Queen','King']
const deck = []

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



const drawCard = () => {
  console.log(deck[deck.length - 1])
  const dealtCard = deck.pop()
  console.log(dealtCard, deck.length)
  const newLi = document.createElement('li')
  newLi.textContent = deck[i]
  document.querySelector('dealt-card').appendChild(newLi)
} 





document.addEventListener('DOMContentLoaded', createDeckOfCard)
document.querySelector('.deck-of-cards').addEventListener('click', drawCard)
