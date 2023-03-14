let navbar = document.getElementById('navbar');
let navbaropn = document.getElementById('button');
let none = document.querySelectorAll('.none');

navbaropn.onclick = function() {
    navbarAddClass()
};


function navbarAddClass() {
    navbar.classList.add('opm')
}


let remove = document.getElementById('remove');

remove.onclick = function() {
    clicknav()
};


function clicknav() {
    navbar.classList.remove('opm')
};


// window.addEventListener('scroll', scrollanimation);

// function scrollanimation() {
//     for (let i = 0; i < none.length; i++) {
//         if (none[i].getBoundingClientRect().top < window.innerHeight - 10) {
//             none[i].classList.add('block')
//         } else {
//             none[i].classList.remove('block')
//         }
//     }
// };




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