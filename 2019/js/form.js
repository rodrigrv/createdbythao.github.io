const submitColor = "#F47A5E";
const formName = document.querySelector(".name");
const formEmail = document.querySelector(".email");
const formMsg = document.querySelector(".message");
const formSubmit = document.querySelector(".submit");
const formSubmitValue = formSubmit.value;

formSubmit.addEventListener("click", formValidation);

function formValidation(e) {
  // Prevent submission
  e.preventDefault();

  let formNameValue = formName.value;
  let formEmailValue = formEmail.value;
  let formMsgValue = formMsg.value;
  let validName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  // Test if the name is empty or null
  if (formNameValue == "" || formNameValue == null) {
    formName.nextElementSibling.style.display = "block";
    formName.nextElementSibling.innerText = "Please enter a name.";
    formName.style.background = "#fbd3ce";
    formName.style.marginBottom = "0";
    formName.focus();

    // Check if the value has a first and last name (really loose regex)
  } else if (validName.test(formNameValue) == false) {
    formName.nextElementSibling.style.display = "block";
    formName.style.marginBottom = "0";
    formName.style.background = "#fbd3ce";
    formName.nextElementSibling.innerText =
      "Please enter a first and last name.";
    formName.focus();

    // If all is good show indication for it
  } else {
    formName.style.borderColor = "#71d996";
    formName.style.marginBottom = "1rem";
    formName.style.background = "none";
    formName.nextElementSibling.style.display = "none";
  }

  // Test is the email is empty or null
  if (formEmailValue == "" || formEmailValue == null) {
    formEmail.nextElementSibling.style.display = "block";
    formEmail.nextElementSibling.innerText = "Please enter an email address.";
    formEmail.style.background = "#fbd3ce";
    formEmail.style.marginBottom = "0";
    formEmail.focus();

    // Check if the value is valid
  } else if (validEmail.test(formEmailValue) == false) {
    formEmail.nextElementSibling.style.display = "block";
    formEmail.style.marginBottom = "0";
    formEmail.style.background = "#fbd3ce";
    formEmail.nextElementSibling.innerText =
      "Please enter a valid email address.";
    formEmail.focus();

    // If all is good show indicator
  } else {
    formEmail.style.borderColor = "#71d996";
    formEmail.style.marginBottom = "1rem";
    formEmail.style.background = "none";
    formEmail.nextElementSibling.style.display = "none";
  }

  // Test is the message is empty or null
  if (formMsgValue == "" || formMsgValue == null) {
    formMsg.nextElementSibling.style.display = "block";
    formMsg.nextElementSibling.innerText = "Please enter an email address.";
    formMsg.style.background = "#fbd3ce";
    formMsg.style.marginBottom = "0";
    formMsg.focus();

    // If all is good, send the message
  } else {
    formMsg.style.borderColor = "#71d996";
    formMsg.style.marginBottom = "1rem";
    formMsg.style.background = "none";
    formMsg.nextElementSibling.style.display = "none";
  }

  // Once message is typed, show submit button color
  formMsg.addEventListener(
    "keyup",
    function() {
      if (formMsgValue.length) {
        formSubmit.style.background = submitColor;
      }
    },
    false
  );

  // Make sure all data is filled in
  if (formMsgValue && formEmailValue && formMsgValue != false) {
    formSubmitValue.submit();
  }
}
