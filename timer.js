var element;
var timeInterval = 1;

document.addEventListener("DOMContentLoaded", startTimer);
chrome.alarms.onAlarm.addListener(onAlarm);

function startTimer() {
	chrome.notifications.create("", {type: "basic", title: "Stream break!", message: "It's time to take a break from streaming.", iconUrl: "calculator-128.png"}, notificationCallback);
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
chrome.notifications.create("", {type: "basic", title: "Stream break!", message: "It's time to take a break from streaming.", iconUrl: "calculator-128.png"}, notificationCallback);
	}
}

function notificationCallback(notificationId) {}