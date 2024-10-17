const boxmenu = document.querySelector('.boxmenu');
const imagestem = document.querySelector('.imagestem');

let animationRunning = false;

boxmenu.addEventListener('mouseenter', () => {
    imagestem.classList.add('active');
});

boxmenu.addEventListener('mouseleave', () => {
    imagestem.classList.remove('active');
});

imagestem.addEventListener('mouseenter', () => {
    if (!animationRunning) {
        imagestem.style.animation = 'infinitescr 60s linear infinite';
        animationRunning = true;
    }
});

imagestem.addEventListener('mouseleave', () => {
    imagestem.style.animation = '';
    animationRunning = false;
});
