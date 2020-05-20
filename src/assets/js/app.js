//
// APP
//

var body = document.querySelector('.body');
var openNavButton = document.querySelector('.open-nav');
var closeNavButton = document.querySelector('.close-nav');

var openNav = function () {
    body.classList.add('nav-open');
};

var closeNav = function () {
    body.classList.remove('nav-open');
};

openNavButton.addEventListener("click", openNav);

closeNavButton.addEventListener("click", closeNav);
