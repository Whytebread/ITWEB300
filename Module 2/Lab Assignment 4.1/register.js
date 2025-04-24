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
      return false;
   }

   if (email.value === "") {
      formError.innterText = "Invalid or missing email address."
   } else if 
   (emailRegex.test(email.value))
      if (emailRegex.test(email.value) == false) {
         formError.innerText = "Invalid or missing email address."
         return false;
      }

   if (password.value < 10 || password.value > 20) {
      formError.innerText = "Password must be between 10 and 20 characters."
      return false;
   } else if 
     (!lowerRegex.text(password.value)) {
      formError.innerText= "Password must contain at least one lowercase character."
      return false;
     } else if 
     (!upperRegex.text(password.value)) {
      formError.innerText= "Password must contain at least one uppercase character."
      return false;
     } else if
     (!digitRegex.text(password.value)) {
      formError.innerText= "Password must contain at least one digit."
      return false;
     }


   if (password.value ===! passwordConfirm.value) {
      formError.innerText = "Password and confirmation password don't match."
      return false;
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});