let nav_item = document.querySelectorAll('.nav-item');
let table__block_item = document.querySelectorAll('.table__block-item');

nav_item[0].onclick = () => {

    table__block_item[0].classList.add('active');
    nav_item[0].classList.add('active');

    table__block_item[1].classList.remove('active');
    nav_item[1].classList.remove('active');

    table__block_item[2].classList.remove('active');
    nav_item[2].classList.remove('active');

}

nav_item[1].onclick = () => {

    table__block_item[1].classList.add('active');
    nav_item[1].classList.add('active');

    table__block_item[0].classList.remove('active');
    nav_item[0].classList.remove('active');

    table__block_item[2].classList.remove('active');
    nav_item[2].classList.remove('active');

}

nav_item[2].onclick = () => {

    table__block_item[2].classList.add('active');
    nav_item[2].classList.add('active');

    table__block_item[0].classList.remove('active');
    nav_item[0].classList.remove('active');

    table__block_item[1].classList.remove('active');
    nav_item[1].classList.remove('active');

}
