window.onload = function () {
    document.onclick = jump
}

function jump() {
    const tractorElement = document.getElementById("tractor");
    tractorElement.classList.add("jump");

    setTimeout(function removeJumpClass() {
        tractorElement.classList.remove("jump");
    }, 2000);
}
