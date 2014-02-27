
// TIMER SCRIPT

/* DESCRIPTION
CREATE A TIMER
Using setTimeout, create a timer that will notify the user after a 
given amount of time. Create a variable called timeoutLength and set 
it equal to 10000. This represents 10 seconds. 
After 10 seconds of being on your page, I expect a notification built 
in HTML to ask me to extend the session or to leave. If I choose to 
extend the session, then the popup will be dismissed and another popup 
will occur 10 seconds later. Otherwise, redirect the page to www.google.com.
*/

// ===================================
// ============ VARIABLES ============
var TIMEOUTLENGTH = 10000; // 10000ms = 10s
var timeoutLengthInSeconds = TIMEOUTLENGTH / 1000;
var redirectTargetURL = "http://bing.com";
var message = "It's been " + timeoutLengthInSeconds + " seconds...Want to stay here?";
var intervalToKill = null;
// ===================================
// ============ FUNCTIONS ============

// Meant to be triggered at finish of timer.
// Opens the custom confirmation box to determine whether user will stay on page.
var atTimerFinish = function () {
	openCustomConfirm(message);
};

// The function to be invoked to initially start the timing process
// Also adds event listeners to the button elements of the custom confirmation page.

var startTimer = function() {
	setTimeout(atTimerFinish, TIMEOUTLENGTH);
	var increase = 1;
	var increaseAmount = 1;
	
	intervalToKill = setInterval(function(){
		$('#timerProgressBar').progressbar({value:increase});
		console.log(increase);
		increase += increaseAmount;
	},99);
	
}

var initialStart = function () {

	// initial start
	startTimer();
	
	stayButton.addEventListener('click',function() {
		if(document.getElementById("warningBox").style.display === 'block') {
			$('#timerProgressBar').progressbar({value:0});
			clearInterval(intervalToKill);
			warningBox.style.display = 'none';
			startTimer();
		}
	});
	
	goButton.addEventListener('click',function() {
		if(document.getElementById("warningBox").style.display === 'block') {
			warningBox.style.display = 'none';
			//window.location.replace(redirectTargetURL);
			window.location.href = redirectTargetURL; // This allows for a correct "back"
		}
	});
	
};

// Displays the custom confirmation element.
var openCustomConfirm = function (message) {
	var warningBox = document.getElementById("warningBox");
	warningBox.children[0].innerHTML = message;
	warningBox.style.display = 'block';
};

// ==================================
// START TIMER LOOP ON PAGE LOAD
window.onload = initialStart;

