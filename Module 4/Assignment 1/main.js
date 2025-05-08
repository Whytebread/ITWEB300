// Global variables
const usernameInput = $("#userName");
const passwordInput = $("#password");
const issuesInput = $("#issues");
const descriptionInput = $("#description");

// Output
const helloOutput = $("#helloMessage");
const errorOutput = $("#errorMessage");
const hardwareOutput = $("#hardwareForm");
const softwareOutput = $("#softwareForm");
const networkOutput = $("#networkForm");
const characterOutput = $("#charCount");

// Functions
// loads functions after the dom content is loaded
$(document).ready(function(){

// display a hello message to the user upon a successful login incorporating their user name and displays an error if the login is unsuccessful
function handleLogin() {
    let userName = $(usernameInput).val();
    let password = $(passwordInput).val();
    // checks if the submitted username and password match. If so, a greeting with the entered username is shown on the page by removing hidden class and adding hidden to error class. If the username and password don't match, the error message is displayed and the hello message is hidden.
    if (userName === "admin" && password === "password") { //example login that would otherwise submit to a server

        $(helloOutput).text(`Hello ${userName}`).removeClass("hidden");
        $(errorOutput).addClass("hidden");
    } else {
        $(errorOutput).text("Log in unsuccessful, please try again").removeClass("hidden");
        $(helloOutput).addClass("hidden");
    }
}

$("#submitButton").click(handleLogin);


// display different form fields determined by the issue type that is selected
function displayForm() {

    $(hardwareOutput).addClass("hidden");
    $(softwareOutput).addClass("hidden");
    $(networkOutput).addClass("hidden");
    
    let selectedIssue = $(issuesInput).val();
    if (selectedIssue === "hardware") {
        $(hardwareOutput).removeClass("hidden");
    }

    if (selectedIssue === "software") {
        $(softwareOutput).removeClass("hidden");
    }

    if (selectedIssue === "network") {
        $(networkOutput).removeClass("hidden");
    }
}

$("#issues").change(displayForm);

// shows a red border if the user moves away from a required input field
$("input[required]").on("blur", function () {
    if (!$(this).val().trim()) {
        $(this).css("border-color", "red");
    } else {
        $(this).css("border-color", "");
    }
});
});
