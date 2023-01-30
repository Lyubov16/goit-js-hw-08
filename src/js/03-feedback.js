import throttle from "lodash.throttle";

const email = document.querySelector('input');
const massage = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

const KEY_STORAGE = 'feedback-form-state';
const obj = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit)


function onFormInput(event) {
    // console.log(event.target.name)
    const name = event.target.name
    obj[name] = event.target.value

    localStorage.setItem(KEY_STORAGE, JSON.stringify(obj));
};

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(obj);
    evt.currentTarget.reset();

    localStorage.removeItem(KEY_STORAGE);
};

function getStorageData() {
    const data = localStorage.getItem(KEY_STORAGE);
    const parseData = JSON.parse(data);

    if (parseData) {
    email.value = parseData.email
    massage.value = parseData.massage
    }
}
getStorageData();
