const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const formError = document.getElementById("formError");

// Regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
const lowerRegex = /[a-z]/
const upperRegex = /[A-Z]/
const digitRegex = /[0-9]/


function checkForm() {
   // TODO: Perform input validation 
   if (fullName.value < 1) {
      formError.innerText = "Missing full name."
      formError.classList.remove("hide");
      return false;
   }

   if (email.value === "") {
      formError.innterHTML = "<li>Invalid or missing email address.</li>"
      formError.classList.remove("hide");
   } else if 
   (emailRegex.test(email.value))
      if (emailRegex.test(email.value) == false) {
         formError.innerHTML = "<li>Invalid or missing email address.</li>"
         formError.classList.remove("hide");
         return false;
      }

   if (password.value < 10 || password.value > 20) {
      formError.innerHTML = "<li>Password must be between 10 and 20 characters.</li>"
      formError.classList.remove("hide");
      return false;
   } else if 
     (!lowerRegex.text(password.value)) {
      formError.innerHTML= "<li>Password must contain at least one lowercase character.</li>"
      formError.classList.remove("hide");
      return false;
     } else if 
     (!upperRegex.text(password.value)) {
      formError.innerHTML= "<li>Password must contain at least one uppercase character.</li>"
      formError.classList.remove("hide");
      return false;
     } else if
     (!digitRegex.text(password.value)) {
      formError.innerHTML= "<li>Password must contain at least one digit.</li>"
      formError.classList.remove("hide");
      return false;
     }

   if (password.value ===! passwordConfirm.value) {
      formError.innerHTML = "<li>Password and confirmation password don't match.</li>"
      formError.classList.remove("hide");
      return false;
   }

}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});