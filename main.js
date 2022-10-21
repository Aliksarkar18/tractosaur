const tractorElement = document.getElementById('tractor')
const ladybugElement = document.getElementById('ladybug')
const restartButton = document.querySelector('.restartBtn')

function elementsOverLap(element1, element2) {
    const rect1 = element1.getBoundingClientRect()
    const rect2 = element2.getBoundingClientRect()

    return rect1.right > rect2.left && rect1.left < rect2.right && rect1.top < rect2.bottom && rect1.bottom > rect2.top
}

window.onload = function () {
    document.onclick = jump
    window.requestAnimationFrame(update)
}

function jump() {
    if (!tractorElement.classList.contains('jump')) {
        tractorElement.classList.add('jump')

        setTimeout(function removeJumpClass() {
            tractorElement.classList.remove('jump')
        }, 2000)
    }
}

function update() {
    if (elementsOverLap(tractorElement, ladybugElement)) {
        ladybugElement.style.display = 'none'
        alert('OOPS! You crashed')
    }

    window.requestAnimationFrame(update)
}

restartButton.addEventListener('click', refreshPage)

function refreshPage() {
    location.reload()
}
