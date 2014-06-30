var askButton = document.getElementById("btn");

function switchIMG() {

	var xhr = new XMLHttpRequest();

	xhr.open("GET","http://spongebobsquaredance.github.io/rawjs/pieces.html",true);
	xhr.responseType = "text";
	xhr.send();

	xmlDoc=xhr.responseText;

	document.body.appendChild(xmlDoc);

}

askButton.onclick = switchIMG;
