let mafs_button = document.querySelectorAll('.mafs__select-button');
let mafs_content = document.querySelectorAll('.mafs__select-content');

mafs_button[0].onclick = () => {

    mafs_content[0].classList.add('active');
    mafs_button[0].classList.add('active');

    mafs_content[1].classList.remove('active');
    mafs_button[1].classList.remove('active');

    mafs_content[2].classList.remove('active');
    mafs_button[2].classList.remove('active');

}

mafs_button[1].onclick = () => {

    mafs_content[1].classList.add('active');
    mafs_button[1].classList.add('active');

    mafs_content[0].classList.remove('active');
    mafs_button[0].classList.remove('active');

    mafs_content[2].classList.remove('active');
    mafs_button[2].classList.remove('active');

}

mafs_button[2].onclick = () => {

    mafs_content[2].classList.add('active');
    mafs_button[2].classList.add('active');

    mafs_content[0].classList.remove('active');
    mafs_button[0].classList.remove('active');

    mafs_content[1].classList.remove('active');
    mafs_button[1].classList.remove('active');

}

$(function () {
    
    
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
        
});