// global variables/inputs
const requestDate = document.getElementById("requestDate");
const employeeID = document.getElementById("employeeID");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const problemDescription = document.getElementById("problemDescription");
const inputForm = document.getElementById("inputForm")
const submitButton = document.getElementById("submitButton");

// Regex
dateRegex = /\d{1,2}\/\d{1,2}\/\d{2,4}/
employeeRegex = /^[A-Z][A-Za-z0-9]{5}[0-9]{5}$/;
nameRegex = /^[A-Z]/;

// function to validate form input
function validateInputForm(form) {
    if (nameRegex.test(form.firstName.value) === false) {
        alert("First Name must start with a capital letter")
        return false;
    }

    if (nameRegex.test(form.lastName.value) === false) {
        alert("Last Name must start with a capital letter")
        return false;
    }
    
    if (dateRegex.test(form.requestDate.value) === false) {
        alert("Date must be mm/dd/yyyy format")
        return false;
    }

    if (employeeRegex.test(form.employeeID.value) === false) {
        alert("Employee ID must be 6 alphanumeric characters, starting with a capital letter, followed by 5 numbers")
        return false;
    }

    return alert("Form submission successful!");
}

document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    validateInputForm(inputForm);
});