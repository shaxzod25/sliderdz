let offset = 0;
const sliderLine = document.querySelector('.violet__wrap2');

document.querySelector('.violen__next').addEventListener('click', function () {
    offset = offset + 380;
    if (offset > 1600) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.violen__preve').addEventListener('click', function () {
    offset = offset - 380;
    if (offset < 0) {
        offset = 1600;
    }
    sliderLine.style.left = -offset + 'px';
})
