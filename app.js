const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("error");
const successMessage = document.getElementById("success-message");
const successMessageEmail = document.querySelector("#success-message span");
console.log(successMessageEmail);

const mainForm = document.getElementById("newsletter-container");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  if (isValidEmail(emailValue)) {
    //main form closed
    mainForm.style.display = "none";
    // alert('Thank you for subscribing!');
    // console.log(emailValue);
    // success form visible
    successMessage.style.display = "flex";
    successMessageEmail.textContent = emailValue;
    successMessageEmail.style.fontFamily = "Roboto-bold";
    form.reset(); // Clear the form after successful subscription
  } else {
    // show error
    emailError.textContent = "Valid email required";
    emailError.style.visibility = "visible";
    emailInput.style.border = "1px solid var(--tomato)";
    emailInput.style.background = "#ffdddc";
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
