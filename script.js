
const loadTime = 750;
const clickTime = 3000;
const time = Date.now();

document.addEventListener("DOMContentLoaded", () => {
	let button = document.getElementById("button");
	let container = document.getElementById("container");
	let save = document.getElementById("save");
	let saveContent = document.getElementById("save-content");

	let click = () => {
	    button.style.display = "none";

	    save.style.backdropFilter = "blur(3px)";
	    save.style.backgroundColor = "rgba(0, 0, 0, 0.4)";

	    saveContent.style.opacity = "1";

	    container.style.backgroundSize = "133% auto";
	}

	setTimeout(() => {
	    button.style.opacity = "1";
	    button.style.cursor = "pointer";

	    setTimeout(() => {
	    	click();
	    }, clickTime);

	    button.onclick = () => {
	    	click();
	    };
	}, Math.max(1, loadTime - (Date.now() - time)));
});