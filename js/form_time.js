// let response = fetch('http://localhost:8081/free-hours');

// console.log(response);

// const arrValue = [9, 10, 11, 12, 13, 14, 15];

// arrTime.forEach(item => {
//     const option = document.createElement('option');
//     option.setAttribute("value", 9);
//     option.innerHTML = `
//         ${item}
//     `;
//     selectTime.append(option);
// });

// arrValue.forEach(item => {

// });

// let response = fetch('http://localhost:8081/free-hours');
// console.log(response);

const selectTime = document.querySelector('.form_time');
const inputDate = document.querySelector('.form_date');
const formBooking = document.querySelector('.modal_booking form');


// inputDate.addEventListener('change', ()=> {
    // const formData = new FormData(formBooking);

    //     const object = {};
    //     formData.forEach(function(value, key) {
    //         object[key] = value;
    //     });

//     const formData = new FormData(formBooking);

//     const object = {};
//     formData.forEach(function(value, key) {
//         object[key] = value;
//     });

//     fetch('http://localhost:8081/free-hours', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(object)
//         }).then(data => {
//             console.log(data);
//         });
// });




const arrTime = ['9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00', '21:00 - 22:00'];

for (let i = 0; i < arrTime[i].length; i++) {
    const option = document.createElement('option');
    option.setAttribute("value", 8 + (i+1));
    option.innerHTML = `
        ${arrTime[i]}
    `;
    selectTime.append(option);
}