// Selecionar Elementos
const themeBtn = document.querySelector(".theme-button");
const themeIcon = document.querySelector("#theme-icon");
const body = document.querySelector("body");

const mobileBtn = document.querySelector('#mobile-menu-icon');
const mobileMenu = document.querySelector('#mobile-menu');

const clearBtn = document.querySelector('#clear-btn');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const answersArea = document.querySelector('#answers-area');


// Mudar Tema
themeBtn.addEventListener("click", () => {

    if (themeIcon.classList.contains("fa-sun")) {

        themeIcon.classList.toggle("fa-sun");
        themeIcon.classList.toggle("fa-moon");

        body.classList.toggle("dark");
        return;
    } else {
        themeIcon.classList.toggle("fa-sun");
        themeIcon.classList.toggle("fa-moon");

        body.classList.toggle("dark");
    }
});

// Menu Mobile
mobileBtn.addEventListener('click', () => {
    if (mobileBtn.classList.contains('fa-bars')) {

        mobileBtn.classList.remove('fa-bars');
        mobileBtn.classList.add('fa-x');
        mobileMenu.style.display = 'block'

    } else {

        mobileBtn.classList.remove('fa-x');
        mobileBtn.classList.add('fa-bars');
        mobileMenu.style.display = 'none'
    }
})

// Limpar Formulário
clearBtn.addEventListener('click', (e) => {
    e.preventDefault();

    nameInput.value = ''
    emailInput.value = ''
    answersArea.value = ''
});