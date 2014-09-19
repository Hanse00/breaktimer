document.addEventListener("DOMContentLoaded", onReady);
chrome.alarms.onAlarm.addListener(onAlarm);

function onReady() {
	document.getElementById("setButton").addEventListener("click", setTime);
	document.getElementById("resetButton").addEventListener("click", resetTime);
}

function setTime() {
	resetTime();
	var input = parseInt(document.getElementById("timeInterval").value);
	if (!isNaN(input) && input != 0) {
		console.log("It's a number!");
		chrome.alarms.create("alarm", {periodInMinutes: input});
	}
	console.log(input);
	console.log("Set clicked");
}

function resetTime() {
	chrome.alarms.clear("alarm");
	console.log("Reset clicked");
}

function onAlarm(alarm) {
	if (alarm && alarm.name == "alarm") {
		console.log("Alarm!");
		chrome.notifications.create("alarm", {type: "basic", title: "Stream break!", message: "It's time to take a break from streaming.", iconUrl: "calculator-128.png"}, alarmCall);
	}
}

function alarmCall() {}