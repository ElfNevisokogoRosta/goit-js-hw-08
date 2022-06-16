import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (formData === null) {
    formData = {
        email: "",
        message: "",
    };
}

const el = {
form: document.querySelector('.feedback-form'),
input: document.querySelector('.feedback-form input'),
textarea: document.querySelector('.feedback-form textarea')
};

el.input.value = formData.email;
el.textarea.value = formData.message;

el.form.addEventListener('submit', onFormSubmit);
el.input.addEventListener('input', throttle(onEmailInput, 500));
el.textarea.addEventListener('input', throttle(onTextareaInput, 500));


function onFormSubmit(event) {
    const user ={
        email: el.input.value,
        message: el.textarea.value
    };
    console.log(user);
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onEmailInput(event) {
    formData.email = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onTextareaInput(event) {
    formData.message = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
