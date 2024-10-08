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
    ? (signupContainer.style.display = 'block')
    : (signupContainer.style.display = 'none');
  successContainer.style.display === 'none'
    ? (successContainer.style.display = 'block')
    : (successContainer.style.display = 'none');
};

const handleSubmit = (e) => {
  let email = emailInput.value;

  console.log(email);
  console.log(validateEmail(email));
  if (email === '' || email === null) {
    e.preventDefault();
    validationMessage.removeAttribute('hidden');
    return;
  } else if (!validateEmail(email)) {
    e.preventDefault();
    validationMessage.removeAttribute('hidden');
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
// console.log(validateEmail(email));

// else if (!input) {
//     preventDefault();
//     validationMessage.removeAttribute('hidden');
//     return;
//   } else {
//     subscriberEmail.innerText = email;
//     return;
//   }
