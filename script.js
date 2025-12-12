// Make body focusable
document.body.setAttribute("tabindex", "0");

// Always keep focus on the page
function keepFocus() {
    document.body.focus();
}

window.addEventListener("blur", keepFocus);
document.addEventListener("click", keepFocus);
document.addEventListener("mousedown", keepFocus);
document.addEventListener("mouseup", keepFocus);
document.addEventListener("keydown", keepFocus);

// Capture nearly all keyboard events
document.addEventListener("keydown", function(e) {
    e.preventDefault();   // Block browser shortcuts
    
    const key = document.getElementById(e.code);
    console.log(key);
    if (key) key.classList.add("active");
});

document.addEventListener("keyup", function(e) {
    e.preventDefault();   // Stop browser actions
    const key = document.getElementById(e.code);
    //if (key) key.classList.remove("active");
});
