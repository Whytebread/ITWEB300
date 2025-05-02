// Global variables
const usernameInput = document.getElementById("userName");
const passwordInput = document.getElementById("password");
const issuesInput = document.getElementById("issues");
const descriptionInput = document.querySelectorAll("description")

// Output
const helloOutput = document.getElementById("helloMessage");
const errorOutput = document.getElementById("errorMessage");
const hardwareOutput = document.getElementById("hardwareForm");
const softwareOutput = document.getElementById("softwareForm");
const networkOutput = document.getElementById("networkForm");
const characterOutput = document.getElementById("charCount");

// Functions

// display a hello message to the user upon a successful login incorporating their user name and displays an error if the login is unsuccessful
function handleLogin() {
    let userName = usernameInput.value;
    let password = passwordInput.value;
    // checks if the submitted username and password match. If so, a greeting with the entered username is shown on the page by removing hidden class and adding hidden to error class. If the username and password don't match, the error message is displayed and the hello message is hidden.
    if (userName === "admin" && password === "password") { //example login that would otherwise submit to a server

        helloOutput.innerText = `Hello ${userName}`;
        helloOutput.classList.remove("hidden");
        errorOutput.classList.add("hidden")
    } else {
        errorOutput.innerText = "Log in unsuccessful, please try again";
        helloOutput.classList.add("hidden");
        errorOutput.classList.remove("hidden");
    }
}
submitButton.addEventListener("click", handleLogin);


// display different form fields determined by the issue type that is selected
function displayForm() {

    hardwareOutput.classList.add("hidden");
    softwareOutput.classList.add("hidden");
    networkOutput.classList.add("hidden");
    
    let selectedIssue = issuesInput.value;
    if (selectedIssue === "hardware") {
        hardwareOutput.classList.remove("hidden");
    }

    if (selectedIssue === "software") {
        softwareOutput.classList.remove("hidden");
    }

    if (selectedIssue === "network") {
        networkOutput.classList.remove("hidden");
    }
}

issues.addEventListener("change", displayForm);

// shows a red border if the user moves away from a required input field
document.querySelectorAll("input[required]").forEach(input => {
    input.addEventListener("blur", () => {
        if (!input.value.trim()) {
            input.style.borderColor = "red";
        } else {
            input.style.borderColor = "";
        }
    });
});