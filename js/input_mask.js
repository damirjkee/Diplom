// const input = document.querySelector('.phone_inp');

//   input.addEventListener('keypress', (evt) => {
//     if (evt.keyCode < 47 || evt.keyCode > 57) {
//       evt.preventDefault();
//     }
//   });

//   input.addEventListener('focus', () => {
//     if (input.value.length === 0) {
//       input.value = '+7';
//       input.selectionStart = input.value.length;
//     }
//   });

//   input.addEventListener('click', (evt) => {
//     if (input.selectionStart < 2) {
//       input.selectionStart = input.value.length;
//     }
//     if (evt.key === 'Backspace' && input.value.length <= 2) {
//       evt.preventDefault();
//     }
//   });

//   input.addEventListener('blur', () => {
//     if (input.value === '+7') {
//       input.value = '';
//     }
//   });

//   input.addEventListener('keydown', (evt) => {
//     if (evt.key === 'Backspace' && input.value.length <= 2) {
//       evt.preventDefault();
//     }
// });


// $(".phone_inp").mask("+7(999)999-99-99");

var elements = document.getElementsByClassName('phone_inp');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{7}(000)000-00-00',
  });
}