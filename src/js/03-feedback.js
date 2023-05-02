

import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;


const saveState = () => {
  const state = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
};


const loadState = () => {
  const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedState) {
    emailInput.value = savedState.email;
    messageInput.value = savedState.message;
  }
};

const clearState = () => {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};


const throttledSaveState = throttle(saveState, 500);

form.addEventListener('input', throttledSaveState);


loadState();


form.addEventListener('submit', event => {
  event.preventDefault(); 
  console.log({ 
    email: emailInput.value,
    message: messageInput.value
  });
  clearState();
});
