
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
    if (i === 17 && i===20) {
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



for (var i = 0; i < games.length; i++) {
    console.log(games[i]);
}


//question 4

var whatIDontLike = "bugs";

if (typeof val === "string") {
    console.log("Variable is a string");
} else {
    console.log("Variable is not a string");
}


function whatIDontLike(bugs) {
    return typeof value === "string" 
}


// question 5

function logTwoArguments(yes, no) {
    console.log(yes + no);
}

logTwoArguments(2, 8);



// question 6

var title = document.querySelector("title");
var button = document.querySelector(".page");
var body = document.querySelector("body");
var heading = document.querySelector("h1");



function changedTitle() {
	title.innerHTML = "Updated title";
	body.style.backgroundColor = "yellow";
	heading.style.backgroundColor = "green";
	heading.style.fontFamily = "impact";
	

}

button.onclick = changedTitle;





// question 7




