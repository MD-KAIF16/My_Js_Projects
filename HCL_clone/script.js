// Simple hover sound / animation placeholder
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.border = "1px solid rgba(0,198,255,0.6)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.border = "none";
    });
});

// ===== BASIC CONTACT FORM VALIDATION (SIMPLE ENGLISH) =====

// select the form
var form = document.querySelector(".contact-form");

// select inputs
var nameInput = form.querySelectorAll("input")[0];    // Name
var emailInput = form.querySelectorAll("input")[1];   // Email
var subjectInput = form.querySelectorAll("input")[2]; // Subject
var messageInput = form.querySelector("textarea");

// add submit event on form
form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form from submitting

    var isValid = true;

    // ===== NAME CHECK =====
    if (nameInput.value === "") {
        showError(nameInput, "Name cannot be empty");
        isValid = false;
    } else {
        removeError(nameInput);
    }

    // ===== EMAIL CHECK =====
    if (emailInput.value === "") {
        showError(emailInput, "Email cannot be empty");
        isValid = false;
    } else if (emailInput.value.indexOf("@") === -1) {
        showError(emailInput, "Please enter a valid email");
        isValid = false;
    } else {
        removeError(emailInput);
    }

    // ===== SUBJECT CHECK =====
    if (subjectInput.value === "") {
        showError(subjectInput, "Subject cannot be empty");
        isValid = false;
    } else {
        removeError(subjectInput);
    }

    // ===== MESSAGE CHECK =====
    if (messageInput.value === "") {
        showError(messageInput, "Message cannot be empty");
        isValid = false;
    } else if (messageInput.value.length < 10) {
        showError(messageInput, "Message must be at least 10 characters");
        isValid = false;
    } else {
        removeError(messageInput);
    }

    // if everything is correct
    if (isValid) {
        alert("Message sent successfully 👍");
        form.reset();
    }
});

// ===== FUNCTION TO SHOW ERROR =====
function showError(input, msg) {
    removeError(input); // remove old error first

    var error = document.createElement("p");
    error.innerText = msg;
    error.style.color = "red";
    error.style.fontSize = "12px";

    input.parentNode.appendChild(error);
}

// ===== FUNCTION TO REMOVE ERROR =====
function removeError(input) {
    var parent = input.parentNode;
    var error = parent.querySelector("p");
    if (error) {
        parent.removeChild(error);
    }
}

// ===== REMOVE ERROR WHILE TYPING =====
nameInput.addEventListener("input", function () {
    removeError(nameInput);
});

emailInput.addEventListener("input", function () {
    removeError(emailInput);
});

subjectInput.addEventListener("input", function () {
    removeError(subjectInput);
});

messageInput.addEventListener("input", function () {
    removeError(messageInput);
});


// ================= REVENUE BAR ANIMATION =================

// simple click handler for solution cards
document.querySelectorAll(".solution-card").forEach(card => {
    card.addEventListener("click", () => {
        console.log("Solution clicked:", card.querySelector("h3").innerText);
    });
});

