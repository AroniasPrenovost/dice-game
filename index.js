
function rollDice(){

	function shuffle(array) {
		var currentIndex = array.length,
		temporaryValue,
		randomIndex;

// While there remain elements to shuffle...
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

var rolls = [];
var dice = [1, 2, 3, 4, 5, 6];
var dice2 = [1, 2, 3, 4, 5, 6];
var roll1 = shuffle(dice)[0];
var roll2 = shuffle(dice2)[0];
// alert(roll1);


// hacky implementation for dice 1 
dice1 = '&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0<br>&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;<br>&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;111';
function d1(){
	document.getElementById("dice1").innerHTML = dice1;
}

dice2 = '&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0<br>&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;<br>&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;222';
function d2(){
	document.getElementById("dice1").innerHTML = dice2;
}

dice3 = '&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0<br>&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;<br>&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;333';
function d3(){
	document.getElementById("dice1").innerHTML = dice3;
}

dice4 = '&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0<br>&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;<br>&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;000';
function d4(){
	document.getElementById("dice1").innerHTML = dice4;
}

dice5 = '&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;<br>&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;';
function d5(){
	document.getElementById("dice1").innerHTML = dice5;
}

dice6 = '&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0<br>&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;<br>&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0';
function d6(){
	document.getElementById("dice1").innerHTML = dice6;
}


// hacky implementation for dice 1 
if (roll1 === 1) {
	d1();
} 

if (roll1 === 2) {
	d2();
} 

if (roll1 === 3) {
	d3();
} 

if (roll1 === 4) {
	d4();
} 

if (roll1 === 5) {
	d5();
} 

if (roll1 === 6) {
	d6();
} 

// hacky implementation for dice 2 
function d12(){
	document.getElementById("dice2").innerHTML = dice1;
}

function d22(){
	document.getElementById("dice2").innerHTML = dice2;
}

function d32(){
	document.getElementById("dice2").innerHTML = dice3;
}


function d42(){
	document.getElementById("dice2").innerHTML = dice4;
}

function d52(){
	document.getElementById("dice2").innerHTML = dice5;
}


function d62(){
	document.getElementById("dice2").innerHTML = dice6;
}
// hacky implementation for dice 2

if (roll2 === 1) {
	d12();
} 

if (roll2 === 2) {
	d22();
} 

if (roll2 === 3) {
	d32();
} 

if (roll2 === 4) {
	d42();
} 

if (roll2 === 5) {
	d52();
} 

if (roll2 === 6) {
	d62();
} 

console.log(roll1 + ' ' + roll2);

}

document.getElementById("rollDice").onclick = rollDice;