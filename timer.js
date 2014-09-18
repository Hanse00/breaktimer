var element;

document.addEventListener("DOMContentLoaded", function () {
	startTimer();
});

function startTimer() {
	element = document.createElement("p");
	updateTime();
	interval = setInterval(function(){updateTime()}, 1000);
}

function updateTime() {
	var text = document.createTextNode(Date());

	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	element.appendChild(text);

	document.body.appendChild(element);
}