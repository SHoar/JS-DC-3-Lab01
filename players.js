var Player = function (username) {
  return {
    username: username,
    hand: [],
    /* TODO: don't really want to showHand, but do want to showCard of hand[i]
    showHand: function(hand) {
    if ( !hand ) return console.log( 'no hand passed in as param' )
      else {
        for (var i = 0; i < hand.length; i++) {
          console.log(hand[i]);
        }
      }
    }*/
  }
}
module.exports = new Player('player', [])
// module.exports.p2 = new Player('player2', [])
// console.log(module.exports);
