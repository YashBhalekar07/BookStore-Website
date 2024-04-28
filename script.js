function validateForm() {
    let name = document.getElementById("Name").value.trim();
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let contact = document.getElementById("con-no").value;
    let dob = document.getElementById("dob").value;
    let genderMale = document.getElementById("male").checked;
    let genderFemale = document.getElementById("female").checked;

    // Validation for Name
    name=name.trim();

    if (name.length <= 6) {
        alert("Length of name should be greater than 6 characters");
        return false;
    }

    // Validation for Password
    if (password.length <= 6) {
        alert("Length of password is too short");
        return false;
    }

    // Validation for Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validation for Address
    if (address.trim() === "") {
        alert("Please enter your address");
        return false;
    }

    // Validation for Contact Number
    let contactPattern = /^\d{10}$/;
    if (!contact.match(contactPattern)) {
        alert("Please enter a valid 10-digit contact number");
        return false;
    }

    // Validation for Date of Birth
    if (dob.trim() === "") {
        alert("Please enter your date of birth");
        return false;
    }

    // Validation for Gender
    if (!genderMale && !genderFemale) {
        alert("Please select your gender");
        return false;
    }

    // If all validations pass, return true to submit the form
    return true;
}
