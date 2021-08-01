import menuItem from "./menu.json";
import menuMarkup from "./templates.hbs";

const menuRef = document.querySelector(".js-menu");
const cardMenu = menuMarkup(menuItem);
menuRef.insertAdjacentHTML("beforeend", cardMenu);
const changeThemeRef = document.querySelector("#theme-switch-toggle");
changeThemeRef.addEventListener("change", changeTheme);
const bodyRef = document.querySelector("Body");

console.dir(changeThemeRef);
bodyRef.classList.add("light-theme");

function changeTheme(e) {
    if (changeThemeRef.checked && bodyRef.classList.contains("light-theme")) {
        bodyRef.classList.replace("light-theme", "dark-theme")

    }
    else { bodyRef.classList.replace("dark-theme", "light-theme") }
        
    // bodyRef.classList.remove("dark-theme");


}