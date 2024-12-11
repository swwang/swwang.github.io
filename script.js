
const loadTime = 750;
const clickTime = 5000;
const time = Date.now();

document.addEventListener("DOMContentLoaded", () => {
	let button = document.getElementById("button");
	let background = document.getElementById("background");
	let blur = document.getElementById("blur");
	let save = document.getElementById("save");
	let form = document.getElementById("form");

	let click = () => {
	    button.style.display = "none";
	    button.style.flex = "0";

	    blur.style.backdropFilter = "blur(3px)";
	    blur.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

	    save.style.opacity = "1";

	    background.style.backgroundSize = "auto 150%";

	    setTimeout(() => {
	    	form.style.bottom = "2em";
	    }, 3300);
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