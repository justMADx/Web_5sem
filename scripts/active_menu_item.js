const currentLocation = location.href;
const menuItem = document.querySelectorAll('.li_menu a');
const menuLenght = menuItem.length
for (let i = 0; i<menuLenght; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "li_menu active_menu";
    }
}