import menuItem from "./menu.json";
import menuMarkup from "./templates.hbs";

const menuRef = document.querySelector(".js-menu");
const cardMenu = menuMarkup(menuItem);
menuRef.insertAdjacentHTML("beforeend", cardMenu);
const changeThemeRef = document.querySelector("#theme-switch-toggle");
const bodyRef = document.querySelector("Body");
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


bodyRef.classList.add(Theme.LIGHT);

function changeTheme(e) {
    if (changeThemeRef.checked && bodyRef.classList.contains(Theme.LIGHT)) {
        bodyRef.classList.replace(Theme.LIGHT, Theme.DARK); localStorage.setItem("Theme", Theme.DARK);
        
    }
    else {
        bodyRef.classList.replace(Theme.DARK, Theme.LIGHT)
        localStorage.setItem("Theme", Theme.LIGHT);   
     }
           
}


function saveThemeLocalStorage() {
    const localStorageValue = localStorage.getItem("Theme");
    if (localStorageValue === Theme.DARK) {
        bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
        changeThemeRef.checked = true;
    }  
   

} 
changeThemeRef.addEventListener("change", changeTheme);
saveThemeLocalStorage();



