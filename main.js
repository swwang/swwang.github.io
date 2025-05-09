/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
var Id;
(function (Id) {
    Id.rsvp = "rsvp";
    Id.schedule = "schedule";
    Id.story = "story";
    Id.party = "party";
    Id.gettingAround = "getting-around";
    Id.forFun = "for-fun";
    Id.faqs = "faqs";
    Id.language = "language";
    Id.sectionIds = [Id.rsvp, Id.schedule, Id.story, Id.party, Id.gettingAround, Id.forFun, Id.faqs, Id.language];
    function getSection(id) {
        return document.getElementById(id);
    }
    Id.getSection = getSection;
    function getButton(id) {
        return document.getElementById(id + "-button");
    }
    Id.getButton = getButton;
    function getArrow() {
        return document.getElementById("arrow");
    }
    Id.getArrow = getArrow;
})(Id || (Id = {}));
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
    const section = Id.getSection(id);
    if (section) {
        section.onclick = () => {
            if (smallScreen()) {
                hideSection(id);
            }
        };
    }
}
function checkArrow() {
    let section = Id.getSection(currentSection);
    let arrow = Id.getArrow();
    if (!section) {
        arrow.style.display = "none";
        return;
    }
    if (hasOverflow(section)) {
        arrow.style.display = "block";
    }
    else {
        arrow.style.display = "none";
    }
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
    showSection("welcome");
}
start();

/******/ })()
;
//# sourceMappingURL=main.js.map