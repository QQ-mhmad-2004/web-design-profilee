let navbar = document.getElementById('navbar');
let navbaropn = document.getElementById('button');
let none = document.querySelectorAll('.none');
let remove = document.getElementById('remove');
let mnss = document.getElementById('back')

navbaropn.onclick = function () {
    navbarAddClass()
};


function navbarAddClass() {
    navbar.classList.add('opm');;
    mnss.style.display = 'block';
}



remove.onclick = function () {
    clicknav()
};


function clicknav() {
    navbar.classList.remove('opm')
    mnss.style.display = '';
};


window.addEventListener('scroll', animateOnScroll);

function animateOnScroll() {
    const elements = document.querySelectorAll('.none');
    elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
            element.classList.add('block');
        } else {
            element.classList.remove('block');
        }
    });
}