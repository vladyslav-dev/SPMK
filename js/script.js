let burger = document.getElementsByClassName('burger');
let menu = document.getElementsByClassName('header__menu');
let body = document.getElementById('body');
let logo = document.getElementsByClassName('logo');

burger[0].addEventListener('click', () => {
    burger[0].classList.toggle('active');
    menu[0].classList.toggle('active');
    body.classList.toggle('active');
    logo[0].classList.toggle('active');
});

let header_row = document.querySelectorAll('.header__row')[0];

window.addEventListener('scroll', function () {
    
    if (window.scrollY > 50) {
        header_row.classList.add('active');
    } else {
        header_row.classList.remove('active');
    }

});


let product = document.querySelector("#prdct");
let submenu = document.querySelectorAll('.submenu')[0];

// let submenu_select = document.querySelectorAll('.submenu-select');
// let submenu_list = document.querySelectorAll('.submenu__list');
// let sizeFlag = false;

product.addEventListener('mouseover', function () {
    
    submenu.classList.add('active');
});

product.addEventListener('mouseout', function () {
    
    submenu.classList.remove('active');
});

submenu.addEventListener('mouseover', function () {
    
    submenu.classList.add('active');
});

submenu.addEventListener('mouseout', function () {
    
    submenu.classList.remove('active');
});

let close_submenu = document.querySelector('#close-submenu');

close_submenu.addEventListener('click', function () {
    submenu.classList.remove('active');
});

// console.log(window.innerWidth);

// window.addEventListener('resize', function () {
//     if(window.innerWidth <= 1100) {
//         // sizeFlag = true;
//     } else {
//         console.log(false);

//     }

//     // if (sizeFlag) {

//     // }

// });



// submenu_select[0].addEventListener('click', function () {
//     submenu_list[0].classList.toggle('active');
//     console.log(1);
// });

// submenu_select[1].addEventListener('click', function () {
//     submenu_list[1].classList.toggle('active');
//     console.log(2);
// });





    // var initialPoint;
    // var finalPoint;
    // menu[0].addEventListener('touchstart', function(event) {
    // event.preventDefault();
    // event.stopPropagation();

    // initialPoint=event.changedTouches[0];
    // }, false);

    // menu[0].addEventListener('touchend', function(event) {

    // event.preventDefault();
    // event.stopPropagation();
    // finalPoint=event.changedTouches[0];
    // var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    // var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    // if (xAbs > 20 || yAbs > 20) {
    // if (xAbs > yAbs) {
    // if (finalPoint.pageX < initialPoint.pageX){
    //     console.log('swipe left')
    // }else{
    //     console.log('swipe right')
    // }
    // }else {
    // if (finalPoint.pageY < initialPoint.pageY){

    //     burger[0].classList.remove('active');
    //     menu[0].classList.remove('active');
    //     body.classList.remove('active');
    //     logo[0].classList.remove('active');

    // }else{
    // /*СВАЙП ВНИЗ*/
    // }
    // }
    // }}, false);






