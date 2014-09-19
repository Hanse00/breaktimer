var element;
var timeInterval = 1;

document.addEventListener("DOMContentLoaded", startTimer);
chrome.alarms.onAlarm.addListener(onAlarm);

function startTimer() {
	element = document.createElement("p");
	updateTime();
	chrome.alarms.create("alarm", {periodInMinutes: timeInterval});
	interval = setInterval(updateTime, 1000);
}

function updateTime() {
	var text = document.createTextNode(Date());

	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	element.appendChild(text);

	document.body.appendChild(element);
}

function onAlarm(alarm) {
	if (alarm && alarm.name == "alarm") {
		console.log("Alarm!");
	}
}