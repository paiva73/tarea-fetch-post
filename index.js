const API_URL = 'https://jsonplaceholder.typicode.com/users';
const name = document.getElementById('nombre');
const lastName = document.getElementById('apellido');
const birthDate = document.getElementById('fechaNacimiento');
const btnSubmit = document.getElementById('btnSubmit');
const form = document.getElementById('form');

let user;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    user = {
        name: name.value,
        lastName: lastName.value,
        birthDate: birthDate.value
    }
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    };
    fetch(API_URL, options)
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
         }
         return data.json();
        })
        .then(data => {
        console.log('Response: ',data);
        })
        .catch(e => {
        console.log(e);
        });
})





