//your JS code here. If required.
let x = document.getElementById("sizeInfo");
function showhw() {
	let w = window.innerWidth;
	let h = window.innerHeight;
	x.innerHTML = "Width: " + w + " and Height: " + h;
}
showhw();
window.addEventListener('resize', showhw);
