document.addEventListener("DOMContentLoaded", function() {
    let storedColor = localStorage.getItem("buttonColor");
    if (storedColor) {
        document.getElementById("animatedButton").style.backgroundColor = storedColor;
    }
});

function changeColor() {
    let newColor = prompt("Enter a color (e.g., red, blue, yellow):");
    document.getElementById("animatedButton").style.backgroundColor = newColor;
    localStorage.setItem("buttonColor", newColor);
}
function triggerAnimation() {
    let button = document.getElementById("animatedButton");
    button.classList.add("shake");

    setTimeout(() => button.classList.remove("shake"), 500);
}