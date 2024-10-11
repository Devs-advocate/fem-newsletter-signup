const emailInput = document.querySelector('#email');
const form = document.querySelector('.contact-details form');
const validationMessage = document.querySelector('#validation-message');
const signupContainer = document.querySelector('.signup-container');
const successContainer = document.querySelector('.success-container');
const dismiss = document.querySelector('.return');
let subscriberEmail = document.querySelector('#subscriber-email');
console.log(subscriberEmail);

let validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

const changeView = () => {
  signupContainer.style.display === 'none'
    ? window.screen.width > 600
      ? (signupContainer.style.display = 'flex')
      : (signupContainer.style.display = 'block')
    : (signupContainer.style.display = 'none');
  successContainer.style.display === 'none'
    ? (successContainer.style.display = 'block')
    : (successContainer.style.display = 'none');
  emailInput.style.backgroundColor = 'white';
  emailInput.style.color = 'hsl(234, 29%, 20%)';
};

const errorState = () => {
  emailInput.style.border = 'solid 1px red';
  emailInput.style.backgroundColor = 'hsl(4, 100%, 90%)';
  emailInput.style.color = 'hsl(4, 100%, 67%)';
};

const handleSubmit = (e) => {
  let email = emailInput.value;

  // console.log(email);
  console.log(validateEmail(email));
  if (email === '' || email === null) {
    e.preventDefault();
    validationMessage.removeAttribute('hidden');
    errorState();
    return;
  } else if (!validateEmail(email)) {
    e.preventDefault();
    validationMessage.removeAttribute('hidden');
    errorState();
    return;
  } else {
    e.preventDefault();
    let registeredEmail = validateEmail(email);
    subscriberEmail.innerText = registeredEmail;
    emailInput.value = '';
    changeView();
    // console.log(subscriberEmail);
    return;
  }
};

form.addEventListener('submit', handleSubmit);
dismiss.addEventListener('click', changeView);
emailInput.addEventListener('keyup', () => {
  console.log(emailInput.value);
  if (emailInput.value === '') {
    emailInput.style.backgroundColor = 'white';
    emailInput.style.border = 'solid 1px hsl(235, 18%, 26%)';
    emailInput.style.color = 'hsl(234, 29%, 20%)';
    validationMessage.hidden = true;
  }
});

emailInput.addEventListener('click', () => {
  if (emailInput.value === '') {
    emailInput.style.backgroundColor = 'white';
    emailInput.style.border = 'solid 1px hsl(235, 18%, 26%)';
    emailInput.style.color = 'hsl(234, 29%, 20%)';
    validationMessage.hidden = true;
  }
});
