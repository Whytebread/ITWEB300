const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const formErrors = document.getElementById("formErrors");

if (!formErrors.querySelector("ul")) {
   const ul = document.createElement("ul");
   formErrors.appendChild(ul);
}

const errorList = formErrors.querySelector("ul");

// Regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
const lowerRegex = /[a-z]/
const upperRegex = /[A-Z]/
const digitRegex = /[0-9]/


function checkForm() {

   let errors = [];
   fullName.classList.remove("error");
   email.classList.remove("error");
   password.classList.remove("error");
   passwordConfirm.classList.remove("error");

   // TODO: Perform input validation 

   if (!fullName.value || fullName.value.trim().length < 1) {
      errors.push("<li>Missing full name.</li>");
      fullName.classList.add("error");
   }

   const emailValue = email.value.trim();
   if (!emailValue || !emailRegex.test(emailValue)) {
      errors.push("<li>Invalid or missing email address.</li>");
      email.classList.add("error");
   }

   const pwd = password.value;
   if (!pwd) {
      errors.push("<li>Password must be between 10 and 20 characters.</li>");
      errors.push("<li>Password must contain at least one lowercase character.</li>");
      errors.push("<li>Password must contain at least one uppercase character.</li>");
      errors.push("<li>Password must contain at least one digit.</li>");
      password.classList.add("error");
   } else {

      if (pwd.length < 10 || pwd.length > 20) {
         errors.push("<li>Password must be between 10 and 20 characters.</li>");
         password.classList.add("error");
      }

      if (!lowerRegex.test(pwd) || "") {
         errors.push("<li>Password must contain at least one lowercase character.</li>");
         password.classList.add("error");

      }

      if (!upperRegex.test(pwd) || "") {
         errors.push("<li>Password must contain at least one uppercase character.</li>");
         password.classList.add("error");

      }

      if (!digitRegex.test(pwd) || "") {
         errors.push("<li>Password must contain at least one digit.</li>");
         password.classList.add("error");
      }
   }

   if (pwd !== passwordConfirm.value || "") {
      errors.push("<li>Password and confirmation password don't match.</li>");
      passwordConfirm.classList.add("error");
   }

   // show errors
   const errorList = formErrors.querySelector("ul");
   if (errors.length > 0) {
      errorList.innerHTML = errors.join("");
      formErrors.classList.remove("hide");
      return false;
   } else {
      errorList.innerHTML = "";
      formErrors.classList.add("hide");
      return true;
   }


}

document.getElementById("submit").addEventListener("click", function (event) {
   event.preventDefault();
   const isValid = checkForm(); // Call checkForm and store the result

   // Prevent default form action. DO NOT REMOVE THIS LINE

   if (!isValid) {

      return;
   }
});