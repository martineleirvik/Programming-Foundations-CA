
// question 1

var outOfStock;
var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

console.log(outOfStock);


//question 2

for (var i = 15; i<=25; i++) {
    if (i===17 && i===20) {
    console.log(i);
    }
}


//question 3

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: undefined,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

var gamesContainer = document.querySelector("ul");

for (var i = 0; i < games.length; i++) {
	var rating = games[i].rating;
	var gamesRating = games[i].title + ": " + games[i].rating;
	if (rating < 3.5) {
		gamesContainer.innerHTML += "<li>" + gamesRating + "<li>";
	}
}


//question 4

var whatIDontLike = "bugs";

if (typeof val === "string") {
    console.log("Variable is a string");
} else {
    console.log("Variable is not a string");
}



function whatIDontLike(bugs) {
	var typeofFirst = typeof bugs;
	
	// if (typeofFirst ! =="string") {
		return "Please send in a string"
	}

	// return bugs;
// }





// question 5

function addition(num1, num2) {
	var convertedNum1 = parseFloat(num1);
	var convertedNum2 = parseFloat(num2);

	if (isNaN(convertedNum1) || isNaN(convertedNum2)) {
		return "Invalid argument(s)";
	}

	return convertedNum1 + convertedNum2;
}



// question 6

var title = document.querySelector("title");
var button = document.querySelector(".page");
var body = document.querySelector("body");
var heading = document.querySelector("h1");
var remove = document.querySelector("ul");


function changedTitle() {
	title.innerHTML = "Updated title";
	body.style.backgroundColor = "yellow";
	heading.style.backgroundColor = "green";
	heading.style.fontFamily = "impact";
	heading.innerHTML = "<a href='#'>" + heading.innerHTML + "<a>";
	remove.style.padding = "none";
	remove.style.listStyleType = "none";
}

button.onclick = changedTitle;


// question 7

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];


var button = document.querySelector(".price");

function loopToys() {
	title.innerHTML = "Updated title";
}

button.onclick = loopToys;


for (var i = 0; i < toys.length; i++) {
    console.log(toys[i]);
}



