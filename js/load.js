const mask = document.querySelector('.mask');

window.addEventListener('load', ()=> {
    mask.classList.add('mask_hide');

    setTimeout(()=> {
        mask.remove();
    }, 600);
});