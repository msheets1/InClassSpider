

var header = document.createElement('div');
var footer = document.createElement('div');
var headerHTML = "<header>" +
			"<nav>" +
				"<ul>" +
					"<li><a class='navButton' href='index.html'>Intro</a></li>" +
					"<li><a class='navButton' href='timer.html'>JavaScript Timer</a></li>" +
					"<li><a class='navButton' href='angular.html'>Examples</a></li>" +
					"<li><a class='navButton' href='http://angularjs.org' target='_blank'>AngularJS.org</a></li>" +
				"</ul>" +
			"</nav>" +
			"<a href='index.html'><img src='css/img/AngularJS-large.png' /></a>" +
		"</header>";
var footerHTML = "<footer class='pageEnd'>" +
			"<div class='subscribe'>" +
				"<form>" +
					"<input type='email' placeholder='Drop us your email for updates'></input>" +
					"<input type='submit'></input>" +
				"</form>" +
			"</div>" +
			"<address>" +
				"You can contact the author, <a href='https://www.facebook.com/matthewdsheets1'>Matthew Sheets</a>," +
				"at <a href='mailto:matthewsheets1@gmail.com'>matthewsheets1@gmail.com</a>." +
			"</address>" +
		"</footer>";
header.innerHTML = headerHTML;
footer.innerHTML = footerHTML;

document.getElementById('body').appendChild(header); //! .children()
document.getElementById('body').appendChild(footer);
//! REMOVE DIV PARENT!
