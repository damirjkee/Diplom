const modal = document.querySelector('.modal_callback');
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

modal.addEventListener('click', (e)=> {
    if(e.target === modal || e.target.getAttribute('data-modal-close') === '') {
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

modalMassage.addEventListener('click', (e)=> {
    if(e.target === modalMassage || e.target.getAttribute('data-close') === '') {
        closeMassageModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modalMassage.classList.contains('show')) { 
        closeMassageModal();
    }
});







const forms = document.querySelectorAll('.modal_callback form');
const formsTwo = document.querySelectorAll('.modal_booking form');
const formsThree = document.querySelectorAll('.feedback form');

const message = {
    loading: '../img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Ошибка! Повторите запрос'
};



// Callback

forms.forEach(item => {
    postDataCallback(item, 'http://localhost:8081/call-order');
});

function postDataCallback(form, url) {
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key) {
            object[key] = value;
        });

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
            }).then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(()=> {
                form.reset();
            });
    });

    function showThanksModal(message) { 
        const prevModalDialog = document.querySelector('.modal_callback_content');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal_callback');
        thanksModal.innerHTML = `
            <div data-modal-close' class="modal_callback_content">
                <div class="feedback_form">
                    <div class="modal_close">X</div>
                    <h4>${message}</h4>
                </div>
            </div>
        `;

        document.querySelector('.modal_callback').append(thanksModal);
        setTimeout(()=> {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 2000);
    }
}

// Booking


formsTwo.forEach(item => {
    postDataBooking(item, 'http://localhost:8081/booking');
});

function postDataBooking(form, url) {
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key) {
            object[key] = value;
        });

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
            }).then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(()=> {
                form.reset();
            });
    });

    function showThanksModal(message) { 
        const prevModalDialog = document.querySelector('.modal_booking_content');

        prevModalDialog.classList.add('hide');
        openMassageModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal_booking');
        thanksModal.innerHTML = `
            <div data-close' class="modal_booking_content">
                <div class="feedback_form">
                    <div class="modal_massage_close">X</div>
                    <h4>${message}</h4>
                </div>
            </div>
        `;

        document.querySelector('.modal_booking').append(thanksModal);
        setTimeout(()=> {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeMassageModal();
        }, 2000);
    }
}

// Comments

formsThree.forEach(item => {
    postDataComments(item, 'http://localhost:8081/comments');
});

function postDataComments(form, url) {
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key) {
            object[key] = value;
        });

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
            }).then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(()=> {
                form.reset();
            });
    });

    function showThanksModal(message) { 
        const prevModalDialog = document.querySelector('.modal_callback_content');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal_callback');
        thanksModal.innerHTML = `
            <div data-modal-close' class="modal_callback_content">
                <div class="feedback_form">
                    <div class="modal_close">X</div>
                    <h4>${message}</h4>
                </div>
            </div>
        `;

        document.querySelector('.modal_callback').append(thanksModal);
        setTimeout(()=> {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 2000);
    }
}
