const submitColor = "#F47A5E";
const formName = document.querySelector('.name').value;
const formEmail = document.querySelector('.email').value;
const formSubmit = document.querySelector('.submit');

formSubmit.addEventListener("click", formValidation);

function formValidation(e, isValid) {
  let validName = /^[a-zA-Z]+$/;
  let validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


  if (formName == null || formName == "" || isValid.value.match(validName)) {
    let errorMsgName = document.createElement("div");
    errorMsgName.classList.add('error-msg');
    formEmail.insertBefore(errorMsgName);
    errorMsgName.innerText = "Please enter a valid name";
  }

  e.preventDefault();
  formSubmit.style.background = submitColor;
}