var xhr = new XMLHttpRequest();

var phrases = Array("It is certain","It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful");

var randomPhrase = phrases[Math.floor(Math.random()*phrases.length)];

var div = document.getElementById("phrasediv");

var askButton = document.getElementById("btn");

var circle = document.getElementById("magicball");

var triangle = document.getElementById("die");

function supplyPhrase(){
	xhr.open("GET", "pieces.html");
	xhr.responseType = "document";
	xhr.send();
}

askButton.onclick = supplyPhrase;
