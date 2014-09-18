document.addEventListener("DOMContentLoaded", function () {
	var element = document.createElement("p");
	var text = document.createTextNode("Hi there!");

	element.appendChild(text);

	document.body.appendChild(element);
});