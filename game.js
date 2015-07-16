var deck =  [{ code: "&#x1F0A1", weight: 1, name: "Ace of Spades", suit: "Spades"},
            { code: "&#x1F0A2", weight: 2, name: "Two of Spades", suit: "Spades"},
            { code: "&#x1F0A3", weight: 3, name: "Three of Spades", suit: "Spades"},
            { code: "&#x1F0A4", weight: 4, name: "Four of Spades", suit: "Spades"},
            { code: "&#x1F0A5", weight: 5, name: "Five of Spades", suit: "Spades"},
            { code: "&#x1F0A6", weight: 6, name: "Six of Spades", suit: "Spades"},
            { code: "&#x1F0A7", weight: 7, name: "Seven of Spades", suit: "Spades"},
            { code: "&#x1F0A8", weight: 8, name: "Eight of Spades", suit: "Spades"},
            { code: "&#x1F0A9", weight: 9, name: "Nine of Spades", suit: "Spades"},
            { code: "&#x1F0AA", weight: 10, name: "Ten of Spades", suit: "Spades"},
            { code: "&#x1F0AB", weight: 11, name: "Jack of Spades", suit: "Spades"},
            { code: "&#x1F0AD", weight: 12, name: "Queen of Spades", suit: "Spades"},
            { code: "&#x1F0AE", weight: 13, name: "King of Spades", suit: "Spades"},
            { code: "&#x1F0B1", weight: 1, name: "Ace of Hearts", suit: "Hearts"},
            { code: "&#x1F0B2", weight: 2, name: "Two of Hearts", suit: "Hearts"},
            { code: "&#x1F0B3", weight: 3, name:"Three of Hearts", suit: "Hearts"},
            { code: "&#x1F0B4", weight: 4, name: "Four of Hearts", suit: "Hearts"},
            { code: "&#x1F0B5", weight: 5, name: "Five of Hearts", suit: "Hearts"},
            { code: "&#x1F0B6", weight: 6, name: "Six of Hearts", suit: "Hearts"},
            { code: "&#x1F0B7", weight: 7, name: "Seven of Hearts", suit: "Hearts"},
            { code: "&#x1F0B8", weight: 8, name: "Eight of Hearts", suit: "Hearts"},
            { code: "&#x1F0B9", weight: 9, name: "Nine of Hearts", suit: "Hearts"},
            { code: "&#x1F0BA", weight: 10, name: "Ten of Hearts", suit: "Hearts"},
            { code: "&#x1F0BB", weight: 11, name: "Jack of Hearts", suit: "Hearts"},
            { code: "&#x1F0BD", weight: 12, name: "Queen of Hearts", suit: "Hearts"},
            { code: "&#x1F0BE", weight: 13, name: "King of Hearts", suit: "Hearts"},
            { code: '&#x1F0C1', weight: 1, name: "Ace of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C2', weight: 2, name: "Two of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C3', weight: 3, name: "Three of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C4', weight: 4, name: "Four of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C5', weight: 5, name: "Five of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C6', weight: 6, name: "Six of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C7', weight: 7, name: "Seven of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C8', weight: 8, name: "Eight of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C9', weight: 9, name: "Nine of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CA', weight: 10, name: "Ten of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CB', weight: 11, name: "Jack of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CD', weight: 12, name: "Queen of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CE', weight: 13, name: "King of Diamonds", suit: 'Diamonds'},
            { code:'&#x1F0D1', weight: 1, name:'Ace of Clubs', suit: 'Clubs'},
            { code:'&#x1F0D2', weight: 2, name:'Two of Clubs', suit:'Clubs'},
            { code:'&#x1F0D3', weight: 3, name:'Three of Clubs', suit:'Clubs'},
            { code:'&#x1F0D4', weight: 4, name:'Four of Clubs', suit:'Clubs'},
            { code:'&#x1F0D5', weight: 5, name:'Five of Clubs', suit:'Clubs'},
            { code:'&#x1F0D6', weight: 6, name:'Six of Clubs', suit:'Clubs'},
            { code:'&#x1F0D7', weight: 7, name:'Seven of Clubs', suit:'Clubs'},
            { code:'&#x1F0D8', weight: 8, name:'Eight of Clubs', suit:'Clubs'},
            { code:'&#x1F0D9', weight: 9, name:'Nine of Clubs', suit:'Clubs'},
            { code:'&#x1F0DA', weight: 10, name:'Ten of Clubs', suit:'Clubs'},
            { code:'&#x1F0DB', weight: 11, name:'Jack of Clubs', suit:'Clubs'},
            { code:'&#x1F0DD', weight: 12, name:'Queen of Clubs', suit:'Clubs'},
            { code:'&#x1F0DE', weight: 13, name:'King of Clubs', suit:'Clubs'}
          ];

function dealHand(array, num){
  var arrayCopy = array.slice();
  if(num===undefined) {
    num = 1;
  }
  var randArray = [];
  for(var i=0;i<num;i++){
    var index = Math.floor(Math.random()*arrayCopy.length);
    randArray.push(arrayCopy.splice(index,1)[0]);
  }
  return randArray;
}
function contains(array, card){
  var contains=false;
  for(var i=0;i<array.length;i++)
    if(array[i].weight===card.weight)
      contains=true;
  return contains;
}

var msg = "";

function scoreHand(array) {
  if (array[0].weight === array[1].weight) {
    msg = "You fucking won.";
    return true;
  } else {
    msg = message();
    return false;
  }
}

function message(){
  switch(Math.floor(Math.random()*5)){
    case 1: return "You are terrible at this.";
            break;
    case 2: return "Really? Were the rules too complicated?";
            break;
    case 3: return "You should just give up.";
            break;
    case 4: return "Wow, still nothing?";
            break;
    case 5: return "Just kill yourself.";
            break;
    default: return "Your score is bad and you should feel bad.";
  }
}


function playGame(){
  hand = dealHand(deck,2);
  var win = scoreHand(hand);
  var handDiv = document.getElementById("handDiv");

  handDiv.innerHTML = "";
  for (i in hand) {
      handDiv.innerHTML += "<span class=\"hand\">"+hand[i].code+"</span>";
  }
  handDiv.innerHTML += "<br>";

  handDiv.innerHTML += "<span class=\"msg\">" + msg + "</span>";
  if (win){

  }
}

//
// window.onload = function(){
//   document.getElementById("btn").addEventListener("click", playGame());
//
// };
