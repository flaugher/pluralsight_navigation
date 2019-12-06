function toggleMenu() {
    var el = document.getElementById("primaryNav");
    if (el.className === "closed") {
        el.className = "open";
    } else {
        el.className = "closed";
    }
}

var btn = document.getElementById('hamburgerBtn');
btn.onclick = toggleMenu;