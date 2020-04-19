var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var btn1 = document.getElementById("braintab");
var btn2 = document.getElementById("gallerytab");

function openSmartBrain() {
	content1.style.transform = "translateX(0px)";
	content2.style.transform = "translateX(100%)";
	content1.style.transitionDelay = "0.3s";
	content2.style.transitionDelay = "0s";	
	btn1.style.color = "maroon"
	btn1.style.background = "linear-gradient(to right, rgb(192, 192, 192), rgb(50, 99, 96))"
	btn2.style.color = "teal"
	btn2.style.background = "transparent"
}

function openGallery() {
	content1.style.transform = "translateX(100%)";
	content2.style.transform = "translateX(0px)";
	content1.style.transitionDelay = "0s";
	content2.style.transitionDelay = "0.3s";	
	btn1.style.color = "teal"
	btn1.style.background = "transparent"
	btn2.style.color = "maroon"
	btn2.style.background = "linear-gradient(to right, rgb(192, 192, 192), rgb(50, 99, 96))"
	btn2.style.borderTopRightRadius= "5px"
}

function collapse(showContent, hideContent1) {
	var showContent = document.getElementsByClassName(showContent)[0];
	if(showContent.style.display === 'block') {
		showContent.style.display = 'none';
		return;
	}	

	showContent.style.display = 'block';
	var hideContent1 = document.getElementsByClassName(hideContent1)[0];
	hideContent1.style.display = 'none';
}