// Variables
const submitGood = "#F47A5E";
const submitBad = "#5A5A5A";
const formName = document.querySelector(".name");
const formEmail = document.querySelector(".email");
const formMsg = document.querySelector(".message");
const formSubmit = document.querySelector(".submit");
const form = document.getElementById("contact-form");

// Add event listeners
formName.addEventListener("focusout", validateName);
formEmail.addEventListener("focusout", validateEmail);
formMsg.addEventListener("focusout", validateMessage);

// Validators
function validateName() {
  formName.value.trim();
  if (checkEmpty(formName)) {
    isFormValid();
    return;
  }
  // Checking for letters
  if (!checkingName(formName)) {
    isFormValid();
    return;
  }

  isFormValid();
}

function validateEmail() {
  if (checkEmpty(formEmail)) {
    isFormValid();
    return;
  }
  // Checking min of @ and domain
  if (!checkingEmail(formEmail)) {
    isFormValid();
    return;
  }

  isFormValid();
}

function validateMessage() {
  if (checkEmpty(formMsg)) {
    isFormValid();
    return;
  }
  // Checking for min of 2 characters
  if (!checkingMessage(formMsg)) {
    isFormValid();
    return;
  }

  isFormValid();
}

// Loop through each and make sure they're valid
function isFormValid() {
  const allInputs = form.querySelectorAll('inputs, textarea');
  let valid = true;

  allInputs.forEach((input) => {
    if (!input.classList.contains('valid')) {
      valid = false;
    }
  });

  toggleSubmit(valid);
  return valid;
}

// Utility functions
function checkEmpty(field) {
  if (!field.value.trim().length) {
    setInvalid(field, `${field.name} cannot be empty.`);
    return true;
  } else {
    setValid(field);
    return false;
  }
}

function setInvalid(field, message) {
  field.classList.remove('valid');
  field.classList.add('invalid');
  field.nextElementSibling.innerText = message;
  return false;
}

function setValid(field) {
  field.classList.remove('invalid');
  field.classList.add('valid');
  field.nextElementSibling.innerText = "";
  return true;
}

function checkingName(field) {
  let validName = /^[a-z ,.'-]+$/i;
  if (validName.test(field.value)) {
    return setValid(field);
  } else {
    return setInvalid(field, `${field.name} must only be letters.`);
  }
}

function checkingEmail(field) {
  let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (validEmail.test(field.value)) {
    return setValid(field);
  } else {
    return setInvalid(field, `${field.name} needs at least @ symbol and domain.`);
  }
}

function checkingMessage(field) {
  if (field.value.length >= 2) {
    return setValid(field);
  } else {
    return setInvalid(field, `${field.name} needs at least 2 characters.`);
  }
}

function toggleSubmit(isValid) {
  if (isValid) {
    formSubmit.disabled = false;
    formSubmit.style.background = submitGood;
  } else {
    formSubmit.disabled = true;
    formSubmit.style.background = submitBad;
  }
}