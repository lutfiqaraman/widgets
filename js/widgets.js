const buttonWidth = 64;
const tabWidth = 360;
const buttons = document.querySelectorAll("header button");
const contentInner = document.querySelector("#contentInner");
const tabs = document.querySelectorAll("#contentInner > div");
const background = document.querySelector("#background");

window.onload = function () {
    tabs.forEach((t, tabIndex) => {
        if (tabIndex === 0) {
            t.style.opacity = "1";
        } else {
            t.style.opacity = "0";
        }
    });
}

const toggleTab = (button, index) => {

    contentInner.style.transform = `translate(calc(0px - ${ index === 0 ? 0 : index + tabWidth }px, 0)`;
    background.style.transform   = `translate(${ index === 0 ? 0 : index * buttonWidth }px, 0)`;

    tabs.forEach((t, tabIndex) => {
        if (tabIndex === index) {
            t.style.opacity = "1";
        } else {
            t.style.opacity = "0";
        }
    });
}
