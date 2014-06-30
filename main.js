var askButton = document.getElementById("btn");

function switchIMG() {

	var xmlhttp;

	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}

	else{ // code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.open("GET","pieces.html",true);
	xmlhttp.responseType = "document";
	xmlhttp.send();

	xmlDoc=xmlhttp.responseXML;

	document.body.appendChild(xmlDoc);

}

askButton.onclick = switchIMG;
