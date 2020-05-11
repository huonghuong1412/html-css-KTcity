window.addEventListener('DOMContentLoaded', function () {
    let nav = document.querySelector('.navbar')
    let bar = document.querySelector('.header__bar--icon');
    let close = document.querySelector('.nav__toggle--close');
    bar.addEventListener('click', function () {
        nav.classList.add('navbar-resposive')
    })

    close.addEventListener('click', function () {
        nav.classList.remove('navbar-resposive')
    })
}, false);