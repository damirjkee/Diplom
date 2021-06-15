const modal = document.querySelector('.modal_callback');
const modalContent = document.querySelector('.modal_callback_content');
const modalCloseBtn = document.querySelector('.modal_close');
const modalTriggerOne = document.querySelectorAll('[data-modal-callback]');

modalTriggerOne.forEach(btn => {
    btn.addEventListener('click', openModal);
});

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e)=> {
    if(e.target === modalContent) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) { 
        closeModal();
    }
});

const modalTimerId = setTimeout(openModal, 7000);

const modalMassage = document.querySelector('.modal_booking');
const modalMassageContent = document.querySelector('.modal_booking_content');
const modalMassageCloseBtn = document.querySelector('.modal_massage_close');
const modalTriggerTwo = document.querySelectorAll('[data-modal]');

modalTriggerTwo.forEach(btn => {
    btn.addEventListener('click', openMassageModal);
});

function closeMassageModal() {
    modalMassage.classList.add('hide');
    modalMassage.classList.remove('show');
    document.body.style.overflow = '';
}

function openMassageModal() {
    modalMassage.classList.add('show');
    modalMassage.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

modalMassageCloseBtn.addEventListener('click', closeMassageModal);

modalMassage.addEventListener('click', (e)=> {
    if(e.target === modalMassage) {
        closeMassageModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modalMassage.classList.contains('show')) { 
        closeMassageModal();
    }
});