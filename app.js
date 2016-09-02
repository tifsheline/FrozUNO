$('#instructions').click(function(){
  $('#instLang').slideToggle();
})

var game = {
  player1: {name: "player1", hand:[]},
  player2: {name: "player2", hand:[]},
  discardPile: []
}

game.currentPlayer = game.player1;

function logger(){
  console.log("Player 1 hand:", game.player1.hand);
  console.log("Player 2 hand:", game.player2.hand);
  console.log("Discard Pile:", game.discardPile);
}

function playSound() {
  $('#wandfx').get(0).play()
}

//Function to switch turns
function switchTurns(){
  if(game.currentPlayer == game.player1){
    game.currentPlayer = game.player2;
    console.log("Player 2's Turn")
  }
  else {
    game.currentPlayer = game.player1;
    console.log("Player 1's Turn")
  }
}

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
    {info: "Draw Two", color: 'red', quote:"Only an act of true love can thaw a frozen heart."},
    {info: 2, color: 'green', quote:"Hi, everyone. I'm Olaf and I like warm hugs!"},
    {info: 3, color: 'green', quote:"Let it go, let it go, can't hold it back anymore!"},
    {info: 4, color: 'green', quote:"Some people are worth melting for."},
    {info: 5, color: 'green', quote:"Say it with us: Don't you dare!"},
    {info: 6, color: 'green', quote:"Only an act of true love can thaw a frozen heart."},
    {info: 7, color: 'green', quote:"Ice is my life!"},
    {info: 8, color: 'green', quote:" Do you want to build a snowman?"},
    {info: 9, color: 'green', quote:"Some people are worth melting for."},
    {info: "Draw Two", color: 'green', quote:"Some people are worth melting for."},
    {info: 2, color: 'blue', quote:" Do you want to build a snowman?"},
    {info: 3, color: 'blue', quote:"Some people are worth melting for."},
    {info: 4, color: 'blue', quote:"Hi, everyone. I'm Olaf and I like warm hugs!"},
    {info: 5, color: 'blue', quote:"Ice is my life!"},
    {info: 6, color: 'blue', quote:"Only an act of true love can thaw a frozen heart."},
    {info: 7, color: 'blue', quote:"Some people are worth melting for."},
    {info: 8, color: 'blue', quote:"Let it go, let it go, can't hold it back anymore!"},
    {info: 9, color: 'blue', quote:"Some people are worth melting for."},
    {info: "Draw Two", color: 'blue', quote:"Say it with us: Don't you dare!"},
    {info: 2, color: 'yellow', quote:"Some people are worth melting for."},
    {info: 3, color: 'yellow', quote:"Let it go, let it go, can't hold it back anymore!"},
    {info: 4, color: 'yellow', quote:"Ice is my life!"},
    {info: 5, color: 'yellow', quote:"Only an act of true love can thaw a frozen heart."},
    {info: 6, color: 'yellow', quote:"Some people are worth melting for."},
    {info: 7, color: 'yellow', quote:" Do you want to build a snowman?"},
    {info: 8, color: 'yellow', quote:"Hi, everyone. I'm Olaf and I like warm hugs!"},
    {info: 9, color: 'yellow', quote:"Say it with us: Don't you dare!"},
    {info: "Draw Two", color: 'yellow', quote:"Oh, look at that. I've been impaled."},
    {info: "Draw Four", color: 'red', quote:"Only an act of true love can thaw a frozen heart."},
    {info: "Draw Four", color: 'green', quote:"Ice is my life!"},
    {info: "Draw Four", color: 'blue', quote:"Let it go, let it go, can't hold it back anymore!"},
    {info: "Draw Four", color: 'yellow', quote:"Oh, look at that. I've been impaled."},
    {info: "Wild Card", color: 'red', quote:"Say it with us: Don't you dare!"},
    {info: "Wild Card", color: 'green', quote:"Hi, everyone. I'm Olaf and I like warm hugs!"},
    {info: "Wild Card", color: 'blue', quote:"Some people are worth melting for."},
    {info: "Wild Card", color: 'yellow', quote:" Do you want to build a snowman?"}
  ];

  shuffle(game.deck);

for (var i = 0; i < 7; i++) {
  game.player1.hand.push(game.deck.pop());
  game.player2.hand.push(game.deck.pop());
};

  game.discardPile.push(game.deck.pop());

populateCards();

};

function populateCards() {
  game.player1.hand.forEach(function(card){
    $('#player1-hand').append("<div class='card " + card.color + "'>" + "<button class='discard'>*</button><br>" + card.info + "<br>" + card.quote + "</div")
  })

  game.player2.hand.forEach(function(card) {
    $('#player2-hand').append("<div class='card " + card.color + "'>" + "<button class='discard'>*</button><br>" + card.info + "<br>" + card.quote + "</div>")
  })

  game.discardPile.forEach(function(card) {
    $('#discardPile').append("<div class='card " + card.color + "'>" + "<button class='discard'>*</button><br>" + card.info + "<br>" + card.quote + "</div>")
  })

  $('body').on('click', '.discard', (function(card) {
    // the index of the card in the hand that was clicked:
    var index = $(this).parent().index()

    // go into the current player's hand, take out the discarded card...
    var cardToDiscard = game.currentPlayer.hand[index]
    var topOfDiscardPile = game.discardPile[game.discardPile.length - 1]

    console.log(cardToDiscard.color, cardToDiscard.info)

     if (cardToDiscard.info == "Draw Two"){

      console.log("Ok to discard! 2")
      // put that discarded card into discardPile array
      game.discardPile.push(game.currentPlayer.hand.splice(index, 1)[0])
      // removes the card div from the DOM
      $('#discardPile').html($(this).parent())

      switchTurns();

      var pluckACard = game.deck.pop();
      var pluckACard2 = game.deck.pop();
      game.currentPlayer.hand.push(pluckACard);
      game.currentPlayer.hand.push(pluckACard2);

    if(game.currentPlayer.name == game.player1.name){

      $('#player1-hand').append("<div class='card " + pluckACard.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard.info + "<br>" + pluckACard.quote + "</div>");

      $('#player1-hand').append("<div class='card " + pluckACard2.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard2.info + "<br>" + pluckACard2.quote + "</div>");

    }
    else{
      $('#player2-hand').append("<div class='card " + pluckACard.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard.info + "<br>" + pluckACard.quote + "</div>")

      $('#player2-hand').append("<div class='card " + pluckACard2.color + "'>" + "<<button class='discard'>*</button><br>" + pluckACard2.info + "<br>" + pluckACard2.quote + "</div>");
    }

    } else if (cardToDiscard.info == "Draw Four"){

      console.log("Ok to discard! 4")
      // put that discarded card into discardPile array
      game.discardPile.push(game.currentPlayer.hand.splice(index, 1)[0])
      // removes the card div from the DOM
      $('#discardPile').html($(this).parent());

      switchTurns();

      var pluckACard = game.deck.pop();
      var pluckACard2 = game.deck.pop();
      var pluckACard3 = game.deck.pop();
      var pluckACard4 = game.deck.pop();
      game.currentPlayer.hand.push(pluckACard);
      game.currentPlayer.hand.push(pluckACard2);
      game.currentPlayer.hand.push(pluckACard3);
      game.currentPlayer.hand.push(pluckACard4);

    if(game.currentPlayer.name == game.player1.name){

      $('#player1-hand').append("<div class='card " + pluckACard.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard.info + "<br>" + pluckACard.quote + "</div>");

      $('#player1-hand').append("<div class='card " + pluckACard2.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard2.info + "<br>" + pluckACard2.quote + "</div>");

      $('#player1-hand').append("<div class='card " + pluckACard3.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard3.info + "<br>" + pluckACard3.quote + "</div>");

      $('#player1-hand').append("<div class='card " + pluckACard4.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard4.info + "<br>" + pluckACard4.quote + "</div>");

    }
    else{
      $('#player2-hand').append("<div class='card " + pluckACard.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard.info + "<br>" + pluckACard.quote + "</div>")

      $('#player2-hand').append("<div class='card " + pluckACard2.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard2.info + "<br>" + pluckACard2.quote + "</div>");

      $('#player2-hand').append("<div class='card " + pluckACard3.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard3.info + "<br>" + pluckACard3.quote + "</div>");

      $('#player2-hand').append("<div class='card " + pluckACard4.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard4.info + "<br>" + pluckACard4.quote + "</div>");
    }
    }  else if((cardToDiscard.color == topOfDiscardPile.color) || (cardToDiscard.info == topOfDiscardPile.info) || (cardToDiscard.info == "Wild Card")) {


      console.log("Ok to discard " + cardToDiscard.color + " " + cardToDiscard.info)

      // put that discarded card into discardPile array
      game.discardPile.push(game.currentPlayer.hand.splice(index, 1)[0])
      // removes the card div from the DOM
      $('#discardPile').html($(this).parent())

      if(game.currentPlayer.hand.length == 1){
        $('#message').text("FrozUNO");
      }

      if (checkForWinner()){
        // what to do if somebody wins
        $('#message').text("FrozUNO out! You Win!");
      }
      else{
        switchTurns();
      }
        playSound();

    }
    else {
      console.log("Womp, color or number do not match...")
    }
  }));
}

$('#deck').on('click', function(){
  var pluckACard = game.deck.pop();
  game.currentPlayer.hand.push(pluckACard);

if(game.currentPlayer.name == game.player1.name){

  $('#player1-hand').append("<div class='card " + pluckACard.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard.info + "<br>" + pluckACard.quote + "</div>")

}
else{
  $('#player2-hand').append("<div class='card " + pluckACard.color + "'>" + "<button class='discard'>*</button><br>" + pluckACard.info + "<br>" + pluckACard.quote + "</div>")
}
})

// function checkForWinner()
// if current player's hand is == 0
//  return true
// otherwise
//  return false

function checkForWinner(){
  if(game.currentPlayer.hand == 0){
    return true;
  }
  else{
    return false;
  };
};


$('.show-hide-hand').on('click', function() {
  $(this).parent().siblings('.hand').fadeToggle()
})

var $resetBtn = $('#resetBtn');
// var $drawPile = $('.drawPile');
  $('#resetBtn').on('click', newGame);

  var $refreshBtn = $('#refreshBtn');
  $('#refreshBtn').on('click', function(){

    location.reload();
})

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
