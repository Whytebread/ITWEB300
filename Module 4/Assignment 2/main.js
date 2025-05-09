// global variables/inputs
const requestDate = document.getElementById("requestDate");
const employeeID = document.getElementById("employeeID");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const problemDescription = document.getElementById("problemDescription");
const inputForm = document.getElementById("inputForm");
const submitButton = document.getElementById("submitButton");

// Regex
dateRegex = /\d{1,2}\/\d{1,2}\/\d{2,4}/;
employeeRegex = /^[A-Z][A-Za-z0-9]{5}[0-9]{5}$/;
nameRegex = /^[A-Z]/;

// function to jQuery functions ready after DOM is loaded
$(document).ready(function () {

    // function to validate form input
    function validateInputForm(form) {
        if (nameRegex.test(form.firstName.value) === false) { //checks if the first name input starts with a capital letter
            alert("First Name must start with a capital letter")
            return false;
        }

        if (nameRegex.test(form.lastName.value) === false) { //checks if the last name input starts with a capital letter
            alert("Last Name must start with a capital letter")
            return false;
        }

        if (dateRegex.test(form.requestDate.value) === false) { //checks if the date is in mm/dd/yyyy format
            alert("Date must be mm/dd/yyyy format")
            return false;
        }

        // checks if the employee ID input is 6 alphanumeric characters, starting with a capital letter, followed by 5 numbers
        if (employeeRegex.test(form.employeeID.value) === false) {
            alert("Employee ID must be 6 alphanumeric characters, starting with a capital letter, followed by 5 numbers")
            return false;
        }

        return alert("Form submission successful!"); //alerts if all input validation checks are valid
    }

    // event listener that first prevents default of submitting the form before validation checks and then executes the validateInputForm function passing in the form inputs
    $("#submitButton").click(function (event) {
        event.preventDefault();

        if (validateInputForm(inputForm)) { //makes a timestamp and outputs the time the submit button was clicked. Since the submit button is the only DOM element triggering the click event, it dims per the directions.
            let timeStamp = new Date().toLocaleString();
            $("#timeDisplay").text("Submitted at: " + timeStamp);
            $(this).css("opacity", "0.5");
        } else {    //displays a validation error and resets all the form fields.
            $("#timeDisplay").css("color", "red");
            $("#timeDisplay").css("font-weight", "bold");
            $("#timeDisplay").text("Validation Failed!");

            $("#inputForm")[0].reset();
        }
    });

    // function that turns the text red and bold on the submit button when hovered and then back to normal 
    $("#submitButton").hover(function () {
        $(this).css("color", "red");
        $(this).css("font-weight", "bold");
    },
        function () {
            $(this).css({
                "color": "",
                "font-weight": ""
            })
        });


});