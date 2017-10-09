function rollDice(){

  function shuffle(array) {
    var currentIndex = array.length,
    temporaryValue,
    randomIndex;

// While there remain elementsd to shuffle...
while (0 !== currentIndex) {
// Pick a remaining element...
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex -= 1;

// And swap it with the current element.
temporaryValue = array[currentIndex];
array[currentIndex] = array[randomIndex];
array[randomIndex] = temporaryValue;
}
return array;
}

var diceSides = [1, 2, 3, 4, 5, 6];
var diceSides2 = [1, 2, 3, 4, 5, 6];
var roll1 = shuffle(diceSides)[0];
var roll2 = shuffle(diceSides2)[0];

dice1 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

dice2 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

dice3 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;<br>&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;<br>&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

dice4 = '&nbsp;.&nbsp;&nbsp;&nbsp;.&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;.&nbsp;&nbsp;&nbsp;.&nbsp;';

dice5 = '&nbsp;.&nbsp;&nbsp;&nbsp;.&nbsp;<br>&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;<br>&nbsp;.&nbsp;&nbsp;&nbsp;.&nbsp;';

dice6 = '&nbsp;.&nbsp;&nbsp;&nbsp;.&nbsp;<br>&nbsp;.&nbsp;&nbsp;&nbsp;.&nbsp;<br>&nbsp;.&nbsp;&nbsp;&nbsp;.&nbsp;';

var dealerSpeak = "You rolled a " + roll1 + " and a " + roll2 + ". Nice!";
document.getElementById("rollResult").innerHTML = dealerSpeak;
console.log(dealerSpeak);

// Matches dice #'s number to dice
var dShapes = [dice1, dice2, dice3, dice4, dice5, dice6];
var dShapes2 = [dice1, dice2, dice3, dice4, dice5, dice6];
for (var i = 1; i < 7; i++) {
  if (roll1 === i) {
    document.getElementById("dice1").innerHTML = dShapes[0];
    dShapes.shift();
  } 
  dShapes.shift();
  if (roll2 === i) {
    document.getElementById("dice2").innerHTML = dShapes2[0];
    dShapes2.shift();
  } 
  dShapes2.shift();
  }
}

document.getElementById("rollDice").onclick = rollDice;
