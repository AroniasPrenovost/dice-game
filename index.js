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

console.log(roll1 + ' ' + roll2);

function dtest(){
	if (roll1 === 1) {
		document.getElementById("dice1").innerHTML = dice1;
	} 

	if (roll1 === 2) {
		document.getElementById("dice1").innerHTML = dice2;
	} 

	if (roll1 === 3) {
		document.getElementById("dice1").innerHTML = dice3;
	} 

	if (roll1 === 4) {
		document.getElementById("dice1").innerHTML = dice4;
	} 

	if (roll1 === 5) {
		document.getElementById("dice1").innerHTML = dice5;
	} 

	if (roll1 === 6) {
		document.getElementById("dice1").innerHTML = dice6;
	} 

	if (roll2 === 1) {
		document.getElementById("dice2").innerHTML = dice1;
	} 

	if (roll2 === 2) {
		document.getElementById("dice2").innerHTML = dice2;
	} 

	if (roll2 === 3) {
		document.getElementById("dice2").innerHTML = dice3;
	} 

	if (roll2 === 4) {
		document.getElementById("dice2").innerHTML = dice4;
	} 

	if (roll2 === 5) {
		document.getElementById("dice2").innerHTML = dice5;
	} 

	if (roll2 === 6) {
		document.getElementById("dice2").innerHTML = dice6;
	} 


}

dtest();

}

document.getElementById("rollDice").onclick = rollDice;