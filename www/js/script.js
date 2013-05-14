document.addEventListener('deviceready', onDeviceReady, false);
$(function() {
	$("body").append("document ready<br/>");
});

function onDeviceReady() {
	$("body").append("device ready<br/>");
}
