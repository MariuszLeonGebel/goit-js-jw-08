//import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

const storageData = localStorage.getItem(STORAGE_KEY)
email.value = JSON.parse(storageData).email;
message.value = JSON.parse(storageData).message;

const setFormData = (e) => {
  e.preventDefault();
  const {
    elements: {
      email,
      message
    },
  } = form;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: email.value,
      message: message.value,
    }),
  );
}

form.addEventListener('input', setFormData);
//form.addEventListener('input', throttle(setFormData, 500));

const sendData = (e) => {
  e.preventDefault();
  console.log(`E-mail: ${email.value}, Message: ${message.value}`);
  email.value = "";
  message.value = "";
  email.focus();
}

form.addEventListener('submit', sendData);