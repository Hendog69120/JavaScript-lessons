window.qs = function (selecteur) {
	return document.querySelector(selecteur);
}
window.qsa = function (selecteur) {
	return document.querySelectorAll(selecteur);
}
var debutElts = qs(".debut");

debutElts.classList.add("fin");