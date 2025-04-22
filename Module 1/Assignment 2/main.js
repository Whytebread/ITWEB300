// Global Variables
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const issue = document.getElementById("issue");
const description = document.getElementById("description");
const contact = document.getElementById("contact");
const urgency = document.getElementById("urgency");
const formSubmitButton = document.getElementById("formSubmitButton");
const searchSubmitButton = document.getElementById("searchSubmitButton");
const summaryContainer = document.getElementById("summaryContainer");

// regex
const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// function to validate form inputs, radio buttons, and dropdown selection
function validateForm () {

    let isValid = true;

    // checks if first name is empty and if only characters are submittted
    if (firstName.value == "") {
        document.getElementById("firstNameError").innerText = "Please enter your first name";
        isValid = false;
    } else if (nameRegex.test(firstName.value) == false) {
        document.getElementById("firstNameError").innerText = "First name can only contain letters";
        isValid = false;
    }

    // checks if last name is empty and if only characters are submittted
    if (lastName.value == "") {
        document.getElementById("lastNameError").innerText = "Please enter your last name";
        isValid = false;
    } else if (nameRegex.test(lastName.value) == false) {
        document.getElementById("lastNameError").innerText = "Last name can only contain letters";
        isValid = false;
    }

    // checks if email is empty and if a valid email is entered
    if (email.value == "") {
        document.getElementById("emailError").innerText = "Please an email address";
        isValid = false;
    } else if (emailRegex.test(email.value) == false) {
        document.getElementById("emailError").innerText = "Please enter a valid email (e.g, Jeff123@email.com)";
        isValid = false;
    }

    // checks if phone number is empty and if a valid phone number is entered
    if (phoneNumber.value == "") {
        document.getElementById("phoneNumberError").innerText = "Please enter a phone number";
        isValid = false;
    } else if (phoneRegex.test(phoneNumber.value) == false) {
        document.getElementById("phoneNumberError").innerText = "Please enter a valid phone number (e.g, 123-123-1234)";
        isValid = false;
    }

    // checks if a contact radio button is selected
    let contactSelected = document.querySelector('input[name="contact"]:checked')
    if (!contactSelected) {
        document.getElementById("contactError").innerText = "Please select a contact method";
        isValid = false;
    }

    // checks if an urgency radio button is selected
    let urgencySelected = document.querySelector('input[name="urgency"]:checked');
    if (!urgencySelected) {
        document.getElementById("urgencyError").innerText = "Please select an urgency level";
        isValid = false;
    }

    // checks if an issue is selected
    if (issue.value == "") {
        document.getElementById("issueError").innerText = "Please select an issue";
        isValid = false;
    }


    return isValid;
}

// array to contain support ticket info
let ticketInfoArray = [];

// Class to hold support ticket information

class supportTicket {
    constructor(ticketNumber, firstName, lastName, email, phoneNumber, issue, description, contact, urgency) {
        this.ticketNumber = ticketNumber
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.issue = issue;
        this.description = description;
        this.contact = contact;
        this.urgency = urgency;
    };

}

    // generates a randomized ticket number that is 10 characters long
     function generateTicket() {
        return Math.random().toString(36).slice(2,10).toUpperCase;
    }
    
    // creates a new support ticket with the info from the class, generates a ticket number and pushes it into the array
    function createSupportTicket(firstName, lastName, email, phoneNumber, issue, description, contact, urgency) {   
        let ticketNumber = generateTicket();
        let newTicket = new supportTicket(ticketNumber, firstName, lastName, email, phoneNumber, issue, description, contact, urgency);

        ticketInfoArray.push(newTicket) //pushes support ticket into ticket array

        return newTicket;
    }

    

// server call

    


// functions to search server for prior request by name or ticket number that will then return the search result
//     function searchByTicket() {
//         ticketSearch.value
//         fetch(url)
//     .then(response => {
//         // handle the response
//     })
//     .catch(error => {
//         // handle the error
//     });

//     }

//     function searchByName() {
//         nameSearch.value

//         fetch(url)
//     .then(response => {
       
//     })
//     .catch(error => {
//         // handle the error
//     });
//     }


// function that displays each property from within the array
function displayTicketSummary() {
    summaryContainer.innerHTML= "";

    ticketInfoArray.forEach((ticket) => {
        summaryContainer.innerHTML += `
        <p>Support Ticket Number:${ticket.ticketNumber}</p>
        <p>Name: ${ticket.firstName} ${ticket.lastName}</p>
        <p>Email: ${ticket.email}</p>
        <p>Phone number: ${ticket.phoneNumber}</p>
        <p>Issue: ${ticket.issue}</p>
        <p>Description: ${ticket.description}</p>
        <p>Contact: ${ticket.contact}</p>
        <p>Urgency: ${ticket.urgency}</p>
        `;

});

}

// function to print ticket summary
function printSummary() {
    window.print();
}





