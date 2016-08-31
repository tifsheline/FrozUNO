//FUNCTION DECLARATIONS:
// drawPile and discardPile should be arrays, not objects with a hand array.
var game = {
  player1: {hand:[]},
  player2: {hand:[]},
  discardPile: []
}

game.currentPlayer = game.player1;

function logger(){
  console.log("Player 1 hand:", game.player1.hand);
  console.log("Player 2 hand:", game.player2.hand);
  console.log("Discard Pile:", game.discardPile);
}
//EVENT LISTENERS:
//Event Listener for when a player clicks the Start New Game Button
// function startGame(){
//
// var newGame = [];
//
// newGame[0] = "card rank-2";
// newGame[1] = "card rank-3";
// newGame[2] = "card rank-4";
// newGame[3] = "card rank-5";
// newGame[4] = "card rank-6";
// newGame[5] = "card rank-7";
// newGame[6] = "card rank-drawTwo";
// newGame[7] = "card rank-drawFour";
// newGame[8] = "card rank-wildCard";
// newGame[9] = "card rank-reverse";
// newGame[10] = "card rank-skip";
//
// var output = newGame.join();
//
//   console.log(output);
// }
//
// var startBtn = document.getElementById('startBtn');
// if(startBtn){
// startBtn.addEventListener('click',function(){
//   startGame();
// });
// };
//Event Listener for when a player clicks the Reset Button

//Event Listener for when a player clicks the End Game Button

//Event Listener for when a player clicks on a card to play it


//FUNCTIONS:

//Function to create a deck of FrozUNO cards

//Function to switch turns
function switchTurns(){
  if(game.currentPlayer == game.player1){
    game.currentPlayer = game.player2;
    alert ("Player 2's Turn")
  }
  else {
    game.currentPlayer = game.player1;
    alert("Player 1's Turn")
  }
}

//Function that places a card in the discard pile when starting a new Game

function newGame(){
  game.player1.hand = [];
  game.player2.hand = [];
  game.discardPile = [];
  game.deck = [
    {info: 2, color: 'red', quote:"Some people are worth melting for."},
    {info: 3, color: 'red', quote:"Hey! Do me a favor and grab my butt!"},
    {info: 4, color: 'red', quote:"Say it with us: Don't you dare!"},
    {info: 5, color: 'red', quote:"Who's the funky looking donkey over there?"},
    {info: 6, color: 'red', quote:"I don't have a skull...or bones."},
    {info: 7, color: 'red', quote:"Ice is my life!"},
    {info: 8, color: 'red', quote:"Oh, look at that. I've been impaled."},
    {info: 9, color: 'red', quote:"Some people are worth melting for."},
    {info: "Draw Two", color: 'red', quote:"Some people are worth melting for."},
    {info: 2, color: 'green', quote:"Some people are worth melting for."},
    {info: 3, color: 'green', quote:"Some people are worth melting for."},
    {info: 4, color: 'green', quote:"Some people are worth melting for."},
    {info: 5, color: 'green', quote:"Some people are worth melting for."},
    {info: 6, color: 'green', quote:"Some people are worth melting for."},
    {info: 7, color: 'green', quote:"Some people are worth melting for."},
    {info: 8, color: 'green', quote:"Some people are worth melting for."},
    {info: 9, color: 'green', quote:"Some people are worth melting for."},
    {info: "Draw Two", color: 'green', quote:"Some people are worth melting for."},
    {info: 2, color: 'blue', quote:"Some people are worth melting for."},
    {info: 3, color: 'blue', quote:"Some people are worth melting for."},
    {info: 4, color: 'blue', quote:"Some people are worth melting for."},
    {info: 5, color: 'blue', quote:"Some people are worth melting for."},
    {info: 6, color: 'blue', quote:"Some people are worth melting for."},
    {info: 7, color: 'blue', quote:"Some people are worth melting for."},
    {info: 8, color: 'blue', quote:"Some people are worth melting for."},
    {info: 9, color: 'blue', quote:"Some people are worth melting for."},
    {info: "Draw Two", color: 'blue', quote:"Some people are worth melting for."},
    {info: 2, color: 'yellow', quote:"Some people are worth melting for."},
    {info: 3, color: 'yellow', quote:"Some people are worth melting for."},
    {info: 4, color: 'yellow', quote:"Some people are worth melting for."},
    {info: 5, color: 'yellow', quote:"Some people are worth melting for."},
    {info: 6, color: 'yellow', quote:"Some people are worth melting for."},
    {info: 7, color: 'yellow', quote:"Some people are worth melting for."},
    {info: 8, color: 'yellow', quote:"Some people are worth melting for."},
    {info: 9, color: 'yellow', quote:"Some people are worth melting for."},
    {info: "Draw Two", color: 'yellow', quote:"Some people are worth melting for."},
    {info: "Draw Four", color: 'black', quote:"Some people are worth melting for."},
    {info: "Reverse", color: 'black', quote:"Some people are worth melting for."},
    {info: "Wild Card", color: 'black', quote:"Some people are worth melting for."},
    {info: "Skip", color: 'black', quote:"Some people are worth melting for."}
  ]

  // game.deck.sort(function(a, b){
  //   return 0.5 - Math.random();
  // });
  shuffle(game.deck)

for (var i = 0; i < 7; i++) {
  game.player1.hand.push(game.deck.pop());
  game.player2.hand.push(game.deck.pop());
}

// for (var i = 0; i < 1; i++) {
  game.discardPile.push(game.deck.pop());
// }

// for (var i = 0; i < game.deck.length; i++) {
  // game.drawPile.push(game.deck.pop());
// }

populateCards();

// $('body').on('click', '.discard', function() {
//     $('#discardPile').append('card');
// });

};

function populateCards() {
  game.player1.hand.forEach(function(card){
    $('#player1-hand').append("<div class='card " + card.color + "'>" + card.info + card.quote + "<button class='discard'>X</button></div>")
  })

  game.player2.hand.forEach(function(card) {
    $('#player2-hand').append("<div class='card " + card.color + "'>" + card.info + card.quote + "<button class='discard'>X</button></div>")
  })

  // game.drawPile.forEach(function(card) {
  //   $('#drawPile').append("<div class='card " + card.color + "'>" + card.info + card.quote + "<button class='discard'>X</button></div>")
  // })

  game.discardPile.forEach(function(card) {
    $('#discardPile').append("<div class='card " + card.color + "'>" + card.info + card.quote + "<button class='discard'>X</button></div>")
  })

  $('body').on('click', '.discard', function(card) {
      $('#discardPile').append();
       $(this).parent().remove();
       switchTurns();
  });

  player1.whoIsTheWinner();
  player2.whoIsTheWinner();

}
// function turn(){
//   $('body').on('click', '.discard', function() {
//       $('#discardPile').append(card);
//     // $(this).parent().remove()
//   })
// }

// function populateCards(){
//   game.player1.hand.forEach(function(card){
//     $(".deck").append("<div class='card " + card.color + "'>" + card.info + card.quote + "</div>");
//
//   game.player2.hand.forEach(function(card){
//     $(".deck").append("<div class='card " + card.color + "'>" + card.info + card.quote + "</div>");
//
//   game.drawPile.hand.forEach(function(card){
//     $(".drawPile").append("<div class='card " + card.color + "'>" + card.info + card.quote + "</div>");
//
//   game.discardPile.hand.forEach(function(card){
//     $(".discardPile").append("<div class='card " + card.color + "'>" + card.info + card.quote + "</div>");
//
//         });
//       });
//     });
//   });
// };

// $(document).ready(function(){
//   $("body").bind("touchstart", function(){
//
//   });
//   $(".fan div").hover(function(){
//     $(this).nextAll().each(function(i){
//       $(this).addClass("after prefix_" + (i+1));
//     });
//    $(this).prevAll().each(function(i){
//       $(this).addClass("before prefix_" + (i+1))
//     });
//   }, function(){
// $(this).nextall().each(function(i){
//   $(this).removeClass("after prefix_" + (i+1));
// });
// $(this).prevAll().each(function(i){
//   $(this).removeClass("before prefix_" + (i+1))
// })});
// $(this).find(".card").addClass("flipped").mouseleave(function(){
//   $(this).removeClass("flipped");
// });
//   return false;
// });


// var $turn = $('turn');
// //Check if info equals discard pile or color equals discard pile
// if(this.info == this.discardPile){
//   $('turn').on('click', function(){
//     $(game.player1.hand).append("<div class='card " + card.color + "'>" + card.info + card.quote + "</div>");
//   })
//   Winner();
//   switchTurns();
// }

var $resetBtn = $('#resetBtn');
// var $drawPile = $('.drawPile');

  $('#resetBtn').on('click', newGame);

// $('.drawPile').on('click', function(){
//   var card = game.deck.pop();
//   console.log(card)
//   var cardDiv = "<div class='card " + card.color + "'>" + card.info + card.quote + "</div>"
//   console.log(cardDiv)
//   $('.deck').append(cardDiv);
//   // game.deck.pop();
// });

function Winner(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
}

Winner.prototype.whoIsTheWinner = function(){
  if(this.player1){
    console.log("Player 1 Wins");
  }
  else{
    console.log("Player 2 Wins");
  };
};

var player1 = new Winner(true, false);
var player2 = new Winner(false, true);

// player1.whoIsTheWinner();
// player2.whoIsTheWinner();
//Function that shuffles cards
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

      // var $resetBtn = function(){

        // console.log("Hello");
      // };

//Functions for game rules
//Players must match card in the Discard pile by either number, color, or symbol/Action. If the player has no matches or chooses not to play any of their cards they must get a card from the Draw Pile.

//Function that allows players to get a card from the Draw Pile

//Function for simulating flip of the cards

//Function that alerts FrozUNO when a player has one card left

//Function that alerts there's a winner when a player has no cards left



//LOOPS:
