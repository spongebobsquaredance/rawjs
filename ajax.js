var phrases = Array("It is certain","It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful");

var randomPhrase = phrases[Math.floor(Math.random()*phrases.length)];

var askButton = document.getElementById("btn");

function loadXMLDoc() {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 ) {
           if(xmlhttp.status == 200){
               document.getElementById("dynamic_content").innerHTML = xmlhttp.responseText;
               document.getElementById("phrasediv").innerHTML = randomPhrase;
               askButton.classList.add("hide");
           }
           else if(xmlhttp.status == 400) {
              alert('There was an error 400')
           }
           else {
               alert('something else other than 200 was returned')
           }
        }
    }

    xmlhttp.open("GET", "pieces.txt", true);
    xmlhttp.send();

}

function changePhrase() {
	function phrasePiece() {
		return phrases[Math.floor(Math.random()*phrases.length)];
	}
	var returnedPhrase = phrasePiece();
	document.getElementById("phrasediv").innerHTML = returnedPhrase;
}

function switchBTN() {
	var againButton = document.createElement("button");
	againButton.setAttribute("id", "agn");
	var agn_content = document.createTextNode("Ask The 8 Ball Again");
	againButton.appendChild(agn_content);
	againButton.onclick = changePhrase;
	var parentDiv = askButton.parentNode;
	parentDiv.replaceChild(againButton, askButton);
}

askButton.addEventListener("click", loadXMLDoc, false);
askButton.addEventListener("click", switchBTN, false);











