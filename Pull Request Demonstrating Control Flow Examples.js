// Program 1 //

const name = 'Natasha';

if(name === 'Natasha') {
	alert('Hello Natasha, how are you today?');
}

// Program 2 //

let name = '';

if(name.length === 0) {
	name = prompt('Please type in your name.');
}

console.log(name);

// Program 3 //

let ageOfPersonOne = 10; 

if (ageOfPersonOne >= 18) {
	alert('You are growing too fast!')
}

let ageOfPersonTwo = 25;

if (ageOfPersonTwo <= 30) {
	alert('Enjoy being young while you can!');
}

// Program 4 // 

const commonShoeSizes = [6, 7, 8, 9];

if (commonShoeSizes === commonShoeSizes) {
	alert('The arrays are equal!');
}

// Program 5 //

let ageOfPerson = 17;

if (ageOfPerson === 17) {
	alert('Wow! You are almost an adult!');
} else {
	alert('Enjoy being young while you can haha!');
}

let ageOfNewPerson = 12

if (ageOfNewPerson !== 13) {
	alert('Wow you are almost a teenager!');
} else {
	alert('Wow you are growing up fast!');
}

// Program 6 //

let ageOfPeer = '100';

if (ageOfPerson === 100) {
	alert('100 is such a wonderful age!');
} else {
	alert('you are not 100 years old!');
}

let ageOfOtherPeer = 99; 

if (ageOfOtherPeer !== 100 && nameOfPerson === 'Natasha') {
	alert('Hi Natasha, you are still young!');
} else if (ageOfOtherPeer === 99 || name = 'Jade') {
	alert('You are almost there!');
} else if (ageOfOtherPeer > 90) {
	alert('Congratulations!');
} else {
	alert('That is nice!');
}

// Program 7 //

const name = 'Natasha';

switch(name) {
	case 'Natasha';
		alert('Hi Natasha!');
		break;
	deafult:
		alert('Who are you?');
}

// Program 8 // 

let desserts = 'Cupcakes';

switch(desserts.toLowerCase()) {
	case 'cake';
		alert('Cake is delicious!');
		break;
	case 'cupcakes';
		alert('Cupcakes are fun to bake!');
		break;
	case 'chocolate';
		alert('Make sure not to eat too much chocolate!');
		break; 
	case 'banana milkshake';
		alert('Potassium is great!')
		break;
	default:
		alert('Maybe one day you can make your own original dessert!');
}

// Program 9 //

const name = 'Natasha';

const greeting = name === 'Natasha'? 'Hi Natasha!' : 'Who are you?';

// Program 10 //

const ageOnePerson = 20; 

const isAdult = ageOfOnePerson >= 18 ? true : false;