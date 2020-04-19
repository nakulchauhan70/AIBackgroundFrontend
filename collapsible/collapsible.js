function collapse(showContent, hideContent1, hideContent2) {
	var showContent = document.getElementsByClassName(showContent)[0];
	if(showContent.style.display === 'block') {
		showContent.style.display = 'none';
		return;
	}	

	showContent.style.display = 'block';
	showContent.style.transition = 'all 2s';
	showContent.style.height = "50px";
	var hideContent1 = document.getElementsByClassName(hideContent1)[0];
	hideContent1.style.display = 'none';
	var hideContent2 = document.getElementsByClassName(hideContent2)[0];
	hideContent2.style.display = 'none';

}