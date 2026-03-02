// The checkmissing() function checks all "required" fields for missing values.
// It counts how many "required" fields, with id "missing-count"
// to display the number of missing fields.

function checkMissing() {
    const requiredFields = document.querySelectorAll(".required");
    let missing = 0;

    requiredFields.forEach(function (field) {
        if (field.value.trim() === "") {
            field.classList.add("email-invalid"); //red border for missing required fields
            missing++;
        } else {
            field.classList.remove("email-invalid"); 
        }
    });

    const output = document.getElementById("missing-count");

    if (missing > 0) {
        output.textContent = "Missing required fields: " + missing;
    } else {
        output.textContent = "All required fields are complete.";
    }

    return missing;
}

//The validateEmail() function checks if the email input 
// contains at least 8 characters. if invalid, it adds a red border
//Once valid, it removes the red border

function validateEmail() {
    const emailInput = document.getElementById("email");
    const valid = emailInput.value.trim().length >= 8;

    if (!valid) {
        emailInput.classList.add("email-invalid");
    } else {
        emailInput.classList.remove("email-invalid");
    }

    return valid;
}

//the runValidationAndSubmit() function runs both validation functions
//when the submit buttton is hit. If any "required" fields are missing or the email is invalid,
//it prevents submission and displays an alert to the user.

function runValidationAndSubmit() {
    const missingCount = checkMissing();
    const emailValid = validateEmail();

    if (missingCount > 0 || !emailValid) {
        alert("Please complete all required fields.");
        return;
    }

    document.getElementById("contact-form").submit();
}

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("submit-btn")
        .addEventListener("click", runValidationAndSubmit);

        //remove red border when user types
    const requiredFields = document.querySelectorAll(".required");

    requiredFields.forEach(function (field) {
        field.addEventListener("input", function () {
            if (field.value.trim() !== "") {
                field.classList.remove("email-invalid");
            }
        });
    });

        //run once on page load

    checkMissing();
});
