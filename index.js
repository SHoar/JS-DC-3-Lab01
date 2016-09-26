var prompt = require('./node_modules/game-prompt/');
var deck = require('./deck.js')
var p1 = require('./players.js')
var p2 = require('./players.js')

p1.username = 'player1'
p2.username = 'player2'

// console.log(deck.deckOfCards); // check that the deck is shuffled.

function dealHand(player){
  for (var i = 0; i < (deck.deckOfCards.length+1) /2 ; i++) {
    player.hand[i] = deck.deckOfCards[i] //TODO: .shift() or find a way to remove cards from deck
    console.log(player.hand); // assign deckOfCards[i] into player.hand
    // deck.deckOfCards[i].shift() //
    console.log("player.hand["+i+"] = "+" deck.deckofCards["+i+"] ")
  }
}

dealHand(p1)
console.log((p1.hand));

/* TODO:
while p1.hand.length > 0 && p2.hand.length > 0:
compare p1.hand[i] to p2.hand[i]
for whichever card is higher, take card and move to other player's hand.
while card value of p1.hand[i] == p2.hand[i], compare next card (p1.hand[i+1]) to (p2.hand[i+1])
log whichever player wins round/iteration
log p1.hand.length // see who is winning
log p2.hand.length // see who is winning

// console.log(p1.hand);

/* TODO: add gamePrompt to  gameplay for cli notification */
