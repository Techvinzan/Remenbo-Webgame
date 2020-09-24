document.addEventListener('DOMContentLoaded', () => {

  // Card options
  const cardArray = [
    {
      name: 'bread',
      img: 'images/Remenbo-bread.jpg'
    },
    {
      name: 'bread',
      img: 'images/Remenbo-bread.jpg'
    },

    {
      name: 'burger',
      img: 'images/Remenbo-burger.jpg'
    },
    {
      name: 'burger',
      img: 'images/Remenbo-burger.jpg'
    },

    {
      name: 'chips-drink',
      img: 'images/Remenbo-chips-drink.jpg'
    },
    {
      name: 'chips-drink',
      img: 'images/Remenbo-chips-drink.jpg'
    },

    {
      name: 'coffee-chips',
      img: 'images/Remenbo-coffee-chips.jpg'
    },
    {
      name: 'coffee-chips',
      img: 'images/Remenbo-coffee-chips.jpg'
    },

    {
      name: 'cornroll',
      img: 'images/Remenbo-cornroll.jpg'
    },
    {
      name: 'cornroll',
      img: 'images/Remenbo-cornroll.jpg'
    },

    {
      name: 'pizza',
      img: 'images/Remenbo-pizza.jpg'
    },
    {
      name: 'pizza',
      img: 'images/Remenbo-pizza.jpg'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelectorAll('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

// Create the Game board

function createBoard() {
  for (let i =0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'images/White cover.png')
    card.setAttribute('data-id, i')
    // card.addEventListener('click', flipcard)
    grid.appendChild(card)
  }
}


// check for matches
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0]) === cardsChosen[1] {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'images/White cover.png')
    cards[optionTwoId].setAttribute('src', 'images/White cover.png')
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/Coloured.png')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2)
  resultDisplay.textContent = 'Congratulations! Completed!'
}


// flip your card
function flipCard () {
  var cardId = this.getAttribute ('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()

})
