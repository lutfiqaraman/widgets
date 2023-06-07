const
    buttonWidth = 64,
    tabWidth = 360,
    buttons = document.querySelectorAll("header button"),
    contentInner = document.querySelector("#contentInner"),
    tabs = document.querySelectorAll("#contentInner > div"),
    background = document.querySelector("#background");

const toggleTab = (button, index) => {
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    contentInner.style = `transform: translate(calc(0px - ${ index === 0 ? 0 : index + tabWidth }px, 0)`;
    background.style = `transform: translate(${ index === 0 ? 0 : index * buttonWidth }px, 0)`;

    tabs.forEach((t) => {
        t.style = "opacity: 0;";
    });

    tabs[index].style = "opacity: 1;";
}
