window.addEventListener("click", function(e) {
	e.preventDefault();
	var elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	} else if (elem.mozRequestFullScreen) {
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	}
});
