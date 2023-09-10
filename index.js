const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');
const navbarMobileCover = document.getElementById("navbar-mobile-cover");
const navbarImage = document.getElementById("navbarImage");
const dropdownServices = document.querySelector('.dropdown-services');
const ulServices = document.querySelector('.dd_ul_service');
const dropdownAccount = document.querySelector('.dropdown-account');
const ulAccount = document.querySelector('.dd_ul_account');

hamburger.addEventListener('click', () => {
    ul.classList.toggle('hamburger_active');
    navbarMobileCover.classList.toggle('navbar_mobile_cover_active');
    navbarImage.classList.toggle('navbar-image-active');

    let ham_child = hamburger.firstElementChild;
    if (ul.classList.contains('hamburger_active')) {
        ham_child.classList.replace('fa-bars-staggered', 'fa-xmark');
    }
    else {
        ham_child.classList.replace('fa-xmark', 'fa-bars-staggered');
    }

    dropdownServices.addEventListener('click', () => {
        ulServices.classList.toggle('ul-services');
    })

    dropdownAccount.addEventListener('click', () => {
        ulAccount.classList.toggle('ul-account');
    })

})