//Create a button and give it an ID of "hamburgerBtn"
//Attach an ID of "primaryNav" to the UL of the unordered list that holds your links
function toggleMenu() {
    // Add class "closed" to ul element if it's missing and remove it if it's there.
    document.getElementById("primaryNav").classList.toggle("closed");
}
// Creating this "x" allows you to put logic here instead of assigning an onclick event to the button HTML element.
// When the hamburger button is clicked, the toggleMenu function will run.
var btn = document.getElementById('hamburgerBtn');
btn.onclick = toggleMenu;