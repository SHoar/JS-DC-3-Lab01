var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

var Card = function (suit, rank) {
  return{
    suit: suit,
    rank: rank,
    title: rank +" of "+ suit,
    score: ranks.indexOf(rank)+1
  }
}


var Deck = function (suits,ranks){
  return {
    deckOfCards: this.deckOfCards, // typeof arr[objects] , deckOfCards[51].length = 52
    createNewDeck: function () {
      var deckOfCards = []
      for (suit in suits) {
        for (rank in ranks) {
          deckOfCards.push(new Card(suits[suit],ranks[rank]))
          }
        }
      return this.deckOfCards = deckOfCards
    },
    shuffleDeck: function (deckOfCards) {
      for (var i = deckOfCards.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       var temp = deckOfCards[i];
       deckOfCards[i] = deckOfCards[j];
       deckOfCards[j] = temp;
      }
      console.log("Card deck has been shuffled");
      return deckOfCards;
    }
    /* TODO: Build the function dealHand to deal a certain number of cards from the deck to the player
    Issues: current implementation sends undefined to player.hand
    ********
    dealHand: function (num) {
      for (var i = 0; i < num; i++) {
        player.hand[i] = this.deckOfCards[i])
      }
    }
    */
  }
}


var myDeck = new Deck(suits,ranks)
myDeck.createNewDeck() // step 1 - createNewDeck
myDeck.shuffleDeck(myDeck.deckOfCards) // step 2 - shuffle the deckOfCards
// console.log(myDeck); // confirm that deck is shuffled.
module.exports= myDeck

// console.log(myDeck.deckOfCards);
// console.log(myDeck.shuffleDeck(deckOfCards));
// module.exports = { Card, myDeck }
// console.log(module.exports);
