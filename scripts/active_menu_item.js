const currentLocation = location.href;
const menuItem = document.querySelectorAll('.li_menu');
const menuLenght = menuItem.length

activateStyle();

function activateStyle() {
    for (let i = 0; i<menuLenght; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "li_menu active_menu";
        }
    }
}