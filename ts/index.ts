
namespace Id {
	const rsvp = "rsvp";
	const schedule = "schedule";
	const story = "story";
	const party = "party";
	const gettingAround = "getting-around";
	const forFun = "for-fun";
	const faqs = "faqs";
	const language = "language";

	export const sectionIds = [rsvp, schedule, story, party, gettingAround, forFun, faqs, language];

	export function getSection(id : string) : HTMLElement {
		return document.getElementById(id);
	}

	export function getButton(id : string) : HTMLElement {
		return document.getElementById(id + "-button");
	}

	export function getInfo() : HTMLElement {
		return document.getElementById("info");
	}

	export function getArrow() : HTMLElement {
		return document.getElementById("arrow");
	}

	export function getClose() : HTMLElement {
		return document.getElementById("close");
	}
}


type Rec = {
	name: string;

}
namespace Recs {
	const bayArea = [

	]
}

function smallScreen() : boolean {
	return window.innerWidth < 1024;
}
function hasOverflow(elm : HTMLElement) {
  return elm.scrollHeight > elm.clientHeight;
}

let currentSection = "";
let stickySection = "";
let english = true;

function hideSection(id : string) : void {
	let section = Id.getSection(id);
	section.style.opacity = "0";
	section.style.display = "none";
	document.getElementById("info").style.display = "none";

	if (currentSection === id) {
		currentSection = "";
	}
	if (stickySection === id) {
		stickySection = "";
	}

	checkArrow();
}

function selectSection(id : string) : void {
	if (id === stickySection) {
		hideSection(stickySection);
		stickySection = "";
		currentSection = "";
		return;
	}

	if (stickySection !== "") {
		hideSection(stickySection);
	}

	stickySection = id;
	showSection(id);
}

function showSection(id : string) : void {
	if (id === currentSection) {
		return;
	}
	if (stickySection !== "" && stickySection !== id) {
		return;
	}

	if (currentSection !== "") {
		hideSection(currentSection);
	}

	let section = Id.getSection(id);
	document.getElementById("info").style.display = "block";
	section.style.display = "block";
	setTimeout(() => {
		section.style.opacity = smallScreen() ? "1" : "0.9";
	}, 1);

	currentSection = id;
	console.log(currentSection);
	checkArrow();
}

function showButton(id : string, delay : number, offset : number, onClick : () => void, onMouse : () => void) : void {
	const button = Id.getButton(id);

	setTimeout(() => {
		button.style.visibility = "visible";
		button.style.left = offset + "%";

		button.onclick = onClick;

		if (onMouse) {
			button.onmouseover = onMouse;
		}
	}, delay);
}

function checkArrow() : void {
	let section = Id.getSection(currentSection)
	let arrow = Id.getArrow();
	let close = Id.getClose();

	if (!section) {
		arrow.style.display = "none";
		close.style.display = "none";
		return;
	}

	if (hasOverflow(section)) {
		arrow.style.display = "block";
	} else {
		arrow.style.display = "none";
	}
	close.style.display = "block";
}

function setDisplay(collection : HTMLCollectionOf<Element>, display : string) : void {
	for (let i = 0; i < collection.length; ++i) {
		(<HTMLElement>collection[i]).style.display = display;
	}
}
function toggleLanguage() : void {
	if (english) {
		setDisplay(document.getElementsByClassName("en"), "none");
		setDisplay(document.getElementsByClassName("zh"), "inline-block");
	} else {
		setDisplay(document.getElementsByClassName("zh"), "none");
		setDisplay(document.getElementsByClassName("en"), "inline-block");
	}

	checkArrow();
	english = !english;
}

function start() : void {
	let delay = 0;
	let offset = 10;
	for (const id of Id.sectionIds) {
		showButton(id, delay, offset, () => {
			if (id === "language") {
				toggleLanguage();
			} else {
				selectSection(id);
			}
		}, () => {
			if (id !== "language" && window.innerWidth > 1024) {
				showSection(id);
			}
		});

		delay += 200;
		if (offset <= 0) {
			offset = 10;
		} else {
			offset -= 5;
		}
	}

	let close = Id.getClose();
	close.onclick = () => {
		hideSection(currentSection);
	}

	if (!smallScreen()) {
		let welcome = Id.getSection("welcome");
		showSection("welcome");
	}

	let ropes = document.getElementById("ropes");
	let buttons = document.getElementById("buttons");
	ropes.style.height = buttons.clientHeight + 25 + "px";

	window.onresize = () => {
		ropes.style.height = buttons.clientHeight + 25 + "px";
	}
}

start();