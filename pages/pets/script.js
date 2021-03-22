const firstNavEl = document.querySelector('.header-nav a:first-child');

function makeDisable() {
    menuBtn.checked = false;
}

firstNavEl.addEventListener('click', makeDisable)