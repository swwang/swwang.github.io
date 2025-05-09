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
    const bayArea = [];
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
}
start();

/******/ })()
;
//# sourceMappingURL=main.js.map