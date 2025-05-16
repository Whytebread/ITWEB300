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
const employeeSubmitButton = document.getElementById("employeeSubmitButton");
const summaryContainer = document.getElementById("summaryContainer");
const specificIssue = document.getElementById("specificIssue");

// regex
const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// function to validate form inputs, radio buttons, and dropdown selection
function validateForm() {
    event.preventDefault(); //prevents the form from being submitted
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

    displayTicketSummary(ticket) {

    }

}

// generates a randomized ticket number that is 10 characters long
function generateTicket() {
    return Math.random().toString(36).slice(2, 10).toUpperCase();
}

// creates a new support ticket with the info from the class, generates a ticket number and pushes it into the array
function createSupportTicket(firstName, lastName, email, phoneNumber, issue, description, contact, urgency) {
    let ticketNumber = generateTicket();
    let newTicket = new supportTicket(ticketNumber, firstName, lastName, email, phoneNumber, issue, description, contact, urgency);

    ticketInfoArray.push(newTicket) //pushes support ticket into ticket array

    return newTicket;
};


// function to search server for prior request employee ID that will then return the search result
$(document).ready(function () {

    //extracts the employee ID submitted by the user and passes it into the getTicket function
    $("#employeeSubmitButton").click(function () {
        const employeeid = $("#employeeSearch").val();
        getTickets(employeeid);
    });

    //sends a get request using employee ID, returns the data in xml and displays in within a div or provides an error message
    function getTickets(employeeid) {
        $.ajax({
            type: "GET",
            url: `https://jscript.rdm/ticketrequest.asp?employee=${employeeid}`,
            dataType: "xml",
            success: function (data) {

                $("#ticketDisplay").empty();

                const tickets = $(data).find("ticket");

                if (tickets.length === 0) {
                    $("#ticketDisplay").text("No tickets found");
                }

                tickets.each(function() {
                    const ticket = $(this);

                    $("#ticketDisplay").append(`
                    <div class="ticket">
                     <p>Ticket number: ${ticket.find("ticketNum").text()}</p>
                     <p>Request date: ${ticket.find("requestDate").text()}</p>
                     <p>Employee ID: ${ticket.find("employeeID").text()}</p>
                     <p>User first name: ${ticket.find("firstName").text()}</p>
                     <p>User last name: ${ticket.find("lastName").text()}</p>
                     <p>Problem description: ${ticket.find("description").text()}</p>
                     <p>Status of the ticket: ${ticket.find("ticketStatus").text()}</p>
                     <p>Response provided: ${ticket.find("response").text()}</p>   
                     </div>
                    `)
                })
            },

            error: function () {
                $("#ticketDisplay").text("Error fetching ticket details")
            }


        });
    };

});

// function that displays each property from within the array
function displayTicketSummary() {
    summaryContainer.innerHTML = "";

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

//function that sends the selected issue to the server and returns sub-categories that are updated dynamically
document.getElementById("issue").addEventListener("change", function () {
    const category = issue.value;

    fetch(`https://jscript.rdm/ticketrequest.asp?category=${category}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Bad network response');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(issue => {
                const option = document.createElement("option");
                option.value = issue;
                option.innerText = issue;
                specificIssue.appendChild(option);
            });
        })

        .catch(error => {
            document.getElementById("issueError").innerText = "Issue could not be loaded";
            console.error(error);
        });
});




// function to print ticket summary
function printSummary() {
    window.print();
}





