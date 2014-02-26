
// CREATE HEADER/FOOTER ELEMENTS
//var head = document.createElement('div');
var header = document.createElement('div');
var footer = document.createElement('div');

// FOR REFERENCE...
//var pageTitleHolder = document.getElementById('pageTitleHolder');

var asdf = "<link rel='stylesheet' href='css/all.css'>";

// PREPARE INNERHTML FOR HEADER/FOOTER ELEMENTS
/*var headHTML = "<head>" +
		"<title>" + pageTitleHolder.innerHTML + "</title>" +
		"<meta charset='UTF-8'>" +
		asdf +
		"<link rel='tylesheet' href='css/todo.css'>" +
	"</head>";
	
	// NOTE: I ceased this portion of the project because I was struggling to have CSS load correctly.
	
*/	
var headerHTML = "<header>" +
			"<nav>" +
				"<ul>" +
					"<li><a class='navButton' href='index.html'>Intro</a></li>" +
					"<li><a class='navButton' href='timer.html'>JavaScript Timer</a></li>" +
					"<li><a class='navButton' href='angular.html'>Examples</a></li>" +
					"<li><a class='navButton' href='http://angularjs.org' target='_blank'>AngularJS.org</a></li>" +
				"</ul>" +
			"</nav>" +
			"<a href='index.html'><img id='angularLogo' src='css/img/AngularJS-large.png' /></a>" +
		"</header>";

var footerHTML = "<footer class='pageEnd'>" +
			"<div class='subscribe'>" +
				"<form>" +
					"<input type='email' placeholder='Drop us your email for updates'></input>" +
					"<input id='emailSubmitButton' type='submit' class='emailSubmitButton'></input>" +
				"</form>" +
			"</div>" +
			"<address>" +
				"You can contact the author, <a href='https://www.facebook.com/matthewdsheets1'>Matthew Sheets</a>, " +
				"at <a href='mailto:matthewsheets1@gmail.com'>matthewsheets1@gmail.com</a>." +
			"</address>" +
		"</footer>";

// SET INNERHTML
//head.innerHTML = headHTML;
header.innerHTML = headerHTML;
footer.innerHTML = footerHTML;

// INSERT INTO DOCUMENT
var body = document.body;
//head = pageTitleHolder.parentNode.replaceChild(head.children[0],pageTitleHolder);
body.insertBefore(header.children[0],body.firstChild);
body.appendChild(footer.children[0]);