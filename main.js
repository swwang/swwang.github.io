/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
var Id;
(function (Id) {
    const rsvp = "rsvp";
    const schedule = "schedule";
    const story = "story";
    const party = "party";
    const gettingAround = "getting-around";
    const forFun = "for-fun";
    const faqs = "faqs";
    const language = "language";
    Id.sectionIds = [rsvp, schedule, story, party, gettingAround, forFun, faqs, language];
    function getSection(id) {
        return document.getElementById(id);
    }
    Id.getSection = getSection;
    function getButton(id) {
        return document.getElementById(id + "-button");
    }
    Id.getButton = getButton;
    function getInfo() {
        return document.getElementById("info");
    }
    Id.getInfo = getInfo;
    function getArrow() {
        return document.getElementById("arrow");
    }
    Id.getArrow = getArrow;
    function getClose() {
        return document.getElementById("close");
    }
    Id.getClose = getClose;
})(Id || (Id = {}));
var Recs;
(function (Recs) {
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
            desc: "Self driving cars are real and you can ride them now! Try them out in San Francisco, Sharon & Brian have been working on them for the better part of a decade.",
        }, {
            name: "Westfield Valley Fair / Santana Row",
            loc: "Santa Clara",
            desc: "The most popular indoor/outdoor shopping destination in the South Bay with many high end stores.",
        }, {
            name: "Montalvo Arts Center",
            loc: "Saratoga",
            desc: "Beautiful historic Italian villa with beautifully landscaped gardens and hiking trails.",
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
            name: "Zareen's",
            loc: "Palo Alto",
            desc: "Michelin guide casual eatery serving homestyle Pakistani/Indian food.",
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
    function rand(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    function getBayArea() {
        return [rand(bayAreaFood), rand(bayArea)];
    }
    Recs.getBayArea = getBayArea;
    function getSantaCruz() {
        return [rand(santaCruzFood), rand(santaCruz)];
    }
    Recs.getSantaCruz = getSantaCruz;
})(Recs || (Recs = {}));
function smallScreen() {
    return window.innerWidth < 1024;
}
function hasOverflow(elm) {
    return elm.scrollHeight > elm.clientHeight;
}
let currentSection = "";
let stickySection = "";
let english = true;
function hideSection(id) {
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
function selectSection(id) {
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
function showSection(id) {
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
function showButton(id, delay, offset, onClick, onMouse) {
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
function checkArrow() {
    let section = Id.getSection(currentSection);
    let arrow = Id.getArrow();
    let close = Id.getClose();
    if (!section) {
        arrow.style.display = "none";
        close.style.display = "none";
        return;
    }
    if (hasOverflow(section)) {
        arrow.style.display = "block";
    }
    else {
        arrow.style.display = "none";
    }
    close.style.display = "block";
}
function setDisplay(collection, display) {
    for (let i = 0; i < collection.length; ++i) {
        collection[i].style.display = display;
    }
}
function toggleLanguage() {
    if (english) {
        setDisplay(document.getElementsByClassName("en"), "none");
        setDisplay(document.getElementsByClassName("zh"), "inline-block");
    }
    else {
        setDisplay(document.getElementsByClassName("zh"), "none");
        setDisplay(document.getElementsByClassName("en"), "inline-block");
    }
    checkArrow();
    english = !english;
}
function start() {
    let delay = 0;
    let offset = 10;
    for (const id of Id.sectionIds) {
        showButton(id, delay, offset, () => {
            if (id === "language") {
                toggleLanguage();
            }
            else {
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
        }
        else {
            offset -= 5;
        }
    }
    let close = Id.getClose();
    close.onclick = () => {
        hideSection(currentSection);
    };
    if (!smallScreen()) {
        let welcome = Id.getSection("welcome");
        showSection("welcome");
    }
    let ropes = document.getElementById("ropes");
    let buttons = document.getElementById("buttons");
    ropes.style.height = buttons.clientHeight + 25 + "px";
    window.onresize = () => {
        ropes.style.height = buttons.clientHeight + 25 + "px";
    };
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
    };
}
start();

/******/ })()
;
//# sourceMappingURL=main.js.map