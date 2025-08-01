
import { Form } from 'form'

namespace Id {
	const beach = "beach";
	const wedding = "wedding";
	const rsvp = "rsvp";
	const schedule = "schedule";
	const story = "story";
	const party = "party";
	const gettingAround = "getting-around";
	const forFun = "for-fun";
	const faqs = "faqs";
	const language = "language";

	export const sectionIds = [beach, wedding, rsvp, schedule, story, party, gettingAround, forFun, faqs, language];

	export function shouldShow(section : string) : boolean {
		const now = new Date();

		const showBeach = now.getMonth() === 7 && now.getDate() === 30 && Form.isFriend();
		const showEvent = now.getMonth() === 7 && now.getDate() === 31; 

		if (section === beach) {
			return showBeach;
		}
		if (section === wedding) {
			return showEvent;
		}
		if (section === rsvp) {
			return !showEvent;
		}
		return true;
	}

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

type Bio = {
	name: string;
	title: string;
	desc: string;
	trivia: string[];
}
namespace Bios {
	const bios = new Map<string, Bio>([
		["sharon", {
			name: "Sharon",
			title: "The Bride",
			desc: "The bride to be. Tries to live as sustainably as possible.",
			trivia: ["Loses track of time gardening", "Big Tetris player", "Enjoys spending time with her stuffed animals"],
		}],
		["brian", {
			name: "Brian",
			title: "The Groom",
			desc: "The groom to be. Loves Mexican food, but not as much as he loves Sharon.",
			trivia: ["Can finish a burrito of any size", "Remembers everyone's birthdays", "Seems chill, but is an absolute tryhard"],
		}],
		["sharie", {
			name: "Sharie",
			title: "The Maid of Honor",
			desc: "The younger sister of the bride. In a committed palieship since childhood.",
			trivia: ["Has an epic frown", "Spends weekends playing with clay", "Always on the hunt for the best pastries"],
		}],
		["john", {
			name: "John",
			title: "The Best Man",
			desc: "<div class='section-img'><img src='./img/muffin.png' alt='muffin'></div>",
			trivia: ["Loves poetry (The Charge of the Light Brigade)", "Loves books (The Poisonwood Bible)", "Way too much energy (a screamer)"],
		}],
		["lena", {
			name: "Lena",
			title: "Mother of the Bride",
			desc: "The mother of the bride. Runs a profitable online retail operation along with her successful career.",
			trivia: ["A meal is incomplete without soup", "Recently picked up gardening", "Ask her about her recent go-live"],
		}],
		["jingming", {
			name: "Jingming",
			title: "Father of the Bride",
			desc: "The father of the bride. Loves talking to people and has a bit of a sweet tooth.",
			trivia: ["Has been a Costco fan since it was called Price Club", "Helped Brian get his car fixed"],
		}],
		["minjun", {
			name: "Minjun",
			title: "Mother of the Groom",
			desc: "The mother of the groom. Literally crocheted all the flowers for this event.",
			trivia: ["Bakes the best cakes", "Has been tutoring Brian in Mandarin"],
		}],
		["kent", {
			name: "Kent",
			title: "Father of the Groom",
			desc: "The father of the groom. Works hard and lets nothing go to waste.",
			trivia: ["Owns more than one tractor", "Can start a fire <em>right now</em>", "Has lots of surgery stories to tell"],
		}],
		["allen", {
			name: "Allen",
			title: "Literally Dragaux",
			desc: "The older brother of the groom. Enjoys suffering (running marathons, taking red-eye flights, attending medical school).",
			trivia: ["Does pushups for fun", "Once lost 20 times in a row in Smash Bros., refused to give up, and won the 21st match"],
		}],
		["derek", {
			name: "Derek",
			title: "Mr. Whee",
			desc: "The younger brother of the groom. Secretly a very disrespectful gamer, don't play him in Smash Bros if you value your dignity.",
			trivia: ["Can play the trombone (on the computer)", "#1 ranked Birdtown player worldwide"],
		}],
		["amy", {
			name: "Amy",
			title: "Amy Wamy",
			desc: "The college roommate of the bride. Has the biggest heart and sweet tooth.",
			trivia: ["Celebrates her birthday at The Cheesecake Factory every year", "Once ordered boba milk tea with extra extra boba, no milk tea"],
		}],
		["clarence", {
			name: "Clarence",
			title: "Clubbo",
			desc: "The college roommate of the groom. Lowkey the coolest guy at WashU.",
			trivia: ["Ask him about Pizza Fridays", "Watch out for his pocket pick Fiddlesticks"],
		}],
		["amarise", {
			name: "Amarise",
			title: "Ammy",
			desc: "College friend of the bride. Pro DIYer and plant mom.",
			trivia: ["Allergic to coconut", "Frequently falls asleep before the fun starts"],
		}],
		["paul", {
			name: "Paul",
			title: "Cronster",
			desc: "College friend of the groom. Crafts fantastic art and legitimately funny dad jokes.",
			trivia: ["Huge fan of Thai Country Cafe", "Makes the best postcards ever"],
		}],
		["harinee", {
			name: "Harinee",
			title: "Hayhoarder",
			desc: "College friend of the bride. Embodies work hard, play hard.",
			trivia: ["Has an infectious laugh", "Loves kids", "Will take all the hay in Catan"],
		}],
		["wei", {
			name: "Wei",
			title: "The Prophet",
			desc: "The esteemed wedding officiant. A man of mystery, Wei alternates between 1v9 carrying his team in Mafia and literally being confused out of his mind next game.",
			trivia: ["Grills a mean burger", "Avant-garde Halloween costume brainstormer", "Has beaten Broforce (co-op mode only)"],
		}],
	]);

	export function setup() : void {
		let box = document.getElementById("character-name-box");
		let name = document.getElementById("character-name");
		let title = document.getElementById("character-title");
		let desc = document.getElementById("character-desc");
		let trivia = document.getElementById("character-trivia");
		let triviaBlock = document.getElementById("character-trivia-block");

		bios.forEach((bio : Bio, id : string) => {
			let select = document.getElementById("character-" + id);
			let info = document.getElementById("character-info");

			select.onclick = () => {
				mapElements(document.getElementsByClassName("character"), (elm : HTMLElement) => {
					elm.classList.remove("character-selected");
				});

				info.style.display = "block";

				select.classList.add("character-selected");
				name.textContent = bio.name;
				title.textContent = bio.title;
				desc.innerHTML = bio.desc;

				if (bio.trivia.length > 0) {
					trivia.innerHTML = `<li>${bio.trivia.join("</li><li>")}</li>`;
					triviaBlock.style.display = "block";
				} else {
					triviaBlock.style.display = "none";
				}

				name.scrollIntoView({ behavior: "smooth" });
				checkArrow();
			};
		});
	}
}

type Rec = {
	name: string;
	loc: string;
	desc: string;
}
namespace Recs {
	const bayArea = [{
		name: "Great America",
		loc: "Santa Clara",
		desc: "An underrated amusement park where Sharon & Brian first met.",
	}, {
		name: "Mission Peak",
		loc: "Fremont",
		desc: "Popular hiking destination--moderately challenging with almost no shade.",
	}, {
		name: "Bay Trail",
		loc: "South Bay",
		desc: "Famous Bay Area trail that stretches along the Bay. Brian recommends the section near Palo Alto & Bixby Park.",
	}, {
		name: "Self Driving Cars",
		loc: "South Bay",
		desc: "Self driving cars are real and you can ride them now! Try them out in San Francisco or Mountain View, Sharon & Brian have been working on them for the better part of a decade.",
	}, {
		name: "Westfield Valley Fair / Santana Row",
		loc: "Santa Clara",
		desc: "The most popular indoor/outdoor shopping destination in the South Bay with many high end stores.",
	}, {
		name: "Montalvo Arts Center",
		loc: "Saratoga",
		desc: "Historic Italian villa with beautifully landscaped gardens and hiking trails.",
	}, {
		name: "Filoli",
		loc: "Woodside",
		desc: "Huge historical country estate in the mountains with beautifully designed gardens surrounding the mansion.",
	}];

	const santaCruz = [{
		name: "Henry Cowell Redwoods State Park",
		loc: "Felton",
		desc: "Really nice spot to see redwoods near the wedding venue. Remember to buy tickets online.",
	}, {
		name: "Big Basin Redwoods State Park",
		loc: "Santa Cruz Mountains",
		desc: "One of the first State Parks Brian visited. It was devastated by a wildfire in 2020, but the redwoods have been growing back.",
	}, {
		name: "Capitola",
		loc: "Capitola",
		desc: "Brian's favorite beach town. Make sure to check out the colorful homes on the beachfront.",
	}, {
		name: "Mystery Spot",
		loc: "Santa Cruz",
		desc: "Very popular attraction near Santa Cruz. Make sure to buy tickets online in advance.",
	}, {
		name: "Santa Cruz Boardwalk",
		loc: "Santa Cruz",
		desc: "The most popular tourist destination in Santa Cruz. Parking will be very difficult.",
	}, {
		name: "Natural Bridges State Beach",
		loc: "Santa Cruz",
		desc: "Sharon's favorite beach in Santa Cruz. Don't miss the tidepools and hiking trails nearby!",
	}, {
		name: "UC Santa Cruz Arboretum & Botanic Garden",
		loc: "Santa Cruz",
		desc: "Great place to take a walk in the garden and admire their lovely collection of plants.",
	}];

	const bayAreaFood = [{
		name: "Starbird Chicken",
		loc: "South Bay",
		desc: "The spot where Sharon & Brian had their first meal together. They specialize in fried chicken, Brian recommends the Chicken Chop salad.",
	}, {
		name: "Bonchon",
		loc: "South Bay",
		desc: "Sharon & Brian's favorite Korean fried chicken - it's the best reward after a tough week!",
	}, {
		name: "Pepper Lunch",
		loc: "Milpitas",
		desc: "A go-to spot frequented by Sharon & Brian for lunch. They specialize in 'DIY teppanyaki' (sizzling hot plates).",
	}, {
		name: "Paik's",
		loc: "Santa Clara",
		desc: "Sharon's favorite chewy noodles! Brian recommends the stir-fried noodles with oyster sauce.",
	}, {
		name: "Must Be Thai",
		loc: "Santa Clara",
		desc: "Cozy date spot serving Thai food from across the country.",
	}, {
		name: "Luna",
		loc: "San Jose",
		desc: "Nice date spot serving fresh, healthy, and authentic Mexican food.",
	}, {
		name: "Rocko's Ice Cream Tacos",
		loc: "Santa Clara",
		desc: "Sharon's favorite spot to design your custom taco with creative ice cream flavors.",
	}, {
		name: "Boba Drive",
		loc: "Sunnyvale",
		desc: "Sharon's favorite local boba shop. They make your drink in an instant!",
	}, {
		name: "Joyheart Cafe",
		loc: "San Jose",
		desc: "Inviting Taiwanese cafe that serves vegetarian homestyle dishes for lunch. Don't miss the adjacent health food store!",
	}, {
		name: "Zareen's",
		loc: "Palo Alto",
		desc: "Michelin guide casual eatery serving homestyle Pakistani/Indian food. Their chai is delicious!",
	}];

	const santaCruzFood = [{
		name: "Spanky's",
		loc: "Ben Lomond",
		desc: "Quaint diner near the wedding venue serving American classics.",
	}, {
		name: "Left Coast Sausage Worx",
		loc: "Capitola",
		desc: "Chill hot dog stand at Brian's favorite beach.",
	}, {
		name: "Pretty Good Advice",
		loc: "Santa Cruz",
		desc: "Breakfast/lunch place serving excellent light fare.",
	}, {
		name: "Cafe Brasil",
		loc: "Santa Cruz",
		desc: "Sharon's spot for a healthy acai bowl.",
	}, {
		name: "The Penny Ice Creamery",
		loc: "Santa Cruz",
		desc: "The toasted marshmallow fluff topping is a must-try!",
	}];

	function rand(array : Array<Rec>) : Rec {
		return array[Math.floor(Math.random() * array.length)];
	}
	export function getBayArea() : [Rec, Rec] {
		return [rand(bayAreaFood), rand(bayArea)];
	}
	export function getSantaCruz() : [Rec, Rec] {
		return [rand(santaCruzFood), rand(santaCruz)];
	}
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
let music = false;

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

function mapElements(collection : HTMLCollectionOf<Element>, cb : (elm : HTMLElement) => void) : void {
	for (let i = 0; i < collection.length; ++i) {
		cb(<HTMLElement>collection[i]);
	}
}
function setDisplay(collection : HTMLCollectionOf<Element>, display : string) : void {
	mapElements(collection, (elm : HTMLElement) => {
		elm.style.display = display;
	});
}
function toggleLanguage() : void {
	if (english) {
		setDisplay(document.getElementsByClassName("en"), "none");
		setDisplay(document.getElementsByClassName("zh"), "inline");
	} else {
		setDisplay(document.getElementsByClassName("zh"), "none");
		setDisplay(document.getElementsByClassName("en"), "inline");
	}

	checkArrow();
	english = !english;
}

function start() : void {
	document.getElementById("password").style.display = "none";
	document.getElementById("content").style.display = "block";

	mapElements(document.getElementsByClassName("welcome-names"), (elm : HTMLElement) => {
		elm.textContent = Form.names();
	});
	mapElements(document.getElementsByClassName("welcome-name"), (elm : HTMLElement) => {
		elm.textContent = Form.name();
	});
	mapElements(document.getElementsByClassName("form-link"), (elm: HTMLElement) => {
		(<HTMLLinkElement>elm).href = Form.link();
	});

	if (Form.isDev()) {
		mapElements(document.getElementsByClassName("dev"), (elm: HTMLElement) => {
			elm.style.display = "revert";
		});

		let emails = document.getElementById("email-links");
		let list = Form.createEmailLinks();
		emails.appendChild(list);
	}
	if (Form.isFriend()) {
		mapElements(document.getElementsByClassName("friend"), (elm: HTMLElement) => {
			elm.style.display = "revert";
		});
	}
	if (Form.isGroomsmen()) {
		mapElements(document.getElementsByClassName("groomsmen"), (elm: HTMLElement) => {
			elm.style.display = "revert";
		});
	}
	if (Form.isBridesmaid()) {
		mapElements(document.getElementsByClassName("bridesmaid"), (elm: HTMLElement) => {
			elm.style.display = "revert";
		});
	}
	if (Form.isWeddingParty()) {
		mapElements(document.getElementsByClassName("wedding-party"), (elm: HTMLElement) => {
			elm.style.display = "revert";
		});
	}

	let delay = 0;
	let offset = 10;
	for (const id of Id.sectionIds) {
		if (!Id.shouldShow(id)) {
			let button = Id.getButton(id);
			button.style.display = "none";
			continue;
		}

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
		showSection("welcome");
	}

	let ropes = document.getElementById("ropes");
	let buttons = document.getElementById("buttons");
	ropes.style.height = buttons.clientHeight + 25 + "px";

	window.onresize = () => {
		ropes.style.height = buttons.clientHeight + 25 + "px";
	}

	Bios.setup();

	let recBlock = document.getElementById("rec-block");
	let foodName = document.getElementById("rec-food-name");
	let foodLoc = document.getElementById("rec-food-loc");
	let foodDesc = document.getElementById("rec-food-desc");
	let sightName = document.getElementById("rec-sight-name");
	let sightLoc = document.getElementById("rec-sight-loc");
	let sightDesc = document.getElementById("rec-sight-desc");

	let recBay = document.getElementById("rec-bay");
	recBay.onclick = () => {
		const recs = Recs.getBayArea();
		foodName.textContent = recs[0].name;
		foodLoc.textContent = recs[0].loc;
		foodDesc.textContent = recs[0].desc;

		sightName.textContent = recs[1].name;
		sightLoc.textContent = recs[1].loc;
		sightDesc.textContent = recs[1].desc;

		recBlock.style.display = "block";
		recBlock.scrollIntoView({ behavior: "smooth" });

		checkArrow();
	};

	let recSantaCruz = document.getElementById("rec-sc");
	recSantaCruz.onclick = () => {
		const recs = Recs.getSantaCruz();
		foodName.textContent = recs[0].name;
		foodLoc.textContent = recs[0].loc;
		foodDesc.textContent = recs[0].desc;

		sightName.textContent = recs[1].name;
		sightLoc.textContent = recs[1].loc;
		sightDesc.textContent = recs[1].desc;

		recBlock.style.display = "block";
		recBlock.scrollIntoView({ behavior: "smooth" });

		checkArrow();
	};

	let bgm = new Audio("./bgm.mp3");
	bgm.loop = true;
	let musicButton = document.getElementById("music-button");
	let musicText = document.getElementById("music-text");
	let musicIcon = document.getElementById("music-icon");
	musicButton.onclick = () => {
		if (music) {
			musicText.textContent = "Off";
			musicIcon.textContent = "music_off";
			bgm.pause();
		} else {
			musicText.textContent = "On";
			musicIcon.textContent = "music_note";
			bgm.play();
		}

		music = !music;
	};
}

document.getElementById("password-form").onsubmit = () => {
	const passwordInput = <HTMLInputElement>document.getElementById("password-input");
	const password = passwordInput.value.trim().toLowerCase();

	if (Form.tryPassword(password)) {
		passwordInput.value = "";
		passwordInput.placeholder = "Welcome!";

		setTimeout(() => {
			start();
		}, 500);
	} else {
		passwordInput.value = "";
		passwordInput.placeholder = "Try again!";
	}
	return false;
};

const params = new URLSearchParams(window.location.search);
if (params.has("code")) {
	window.location.replace(Form.redirectLink(params.get("code")));
}