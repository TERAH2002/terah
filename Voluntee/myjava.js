function validateForm() {
    var fullName = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var availability = document.getElementById("availability").value;
    var skills = document.getElementById("skills").value;
    var volunteerInterests = document.getElementById("volunteer-interests").value;
    var emergencyContact = document.getElementById("emergency-contact").value;
    var emergencyPhone = document.getElementById("emergency-phone").value;
    var errorMessages = [];

    if (fullName === "") {
        errorMessages.push("Please enter your full name.");
    }

    if (email === "") {
        errorMessages.push("Please enter your email address.");
    } else if (!validateEmail(email)) {
        errorMessages.push("Please enter a valid email address.");
    }

    if (phone === "") {
        errorMessages.push("Please enter your phone number.");
    } else if (!validatePhone(phone)) {
        errorMessages.push("Please enter a valid phone number.");
    }

    if (address === "") {
        errorMessages.push("Please enter your address.");
    }

    if (city === "") {
        errorMessages.push("Please enter your city.");
    }

    if (state === "") {
        errorMessages.push("Please enter your state.");
    }

    if (zip === "") {
        errorMessages.push("Please enter your zip code.");
    } else if (!validateZip(zip)) {
        errorMessages.push("Please enter a valid zip code.");
    }

    if (availability === "") {
        errorMessages.push("Please enter your availability.");
    }

    if (skills === "") {
        errorMessages.push("Please enter your skills.");
    }

    if (volunteerInterests === "") {
        errorMessages.push("Please enter your volunteer interests.");
    }

    if (emergencyContact === "") {
        errorMessages.push("Please enter your emergency contact name.");
    }

    if (emergencyPhone === "") {
        errorMessages.push("Please enter your emergency contact phone number.");
    } else if (!validatePhone(emergencyPhone)) {
        errorMessages.push("Please enter a valid emergency contact phone number.");
    }

    if (errorMessages.length > 0) {
        var errorMessage = errorMessages.join("<br>");
        document.getElementById("volunteer-form").insertAdjacentHTML("beforeend", "<div class='error'>" + errorMessage + "</div>");
        return false;
    } else {
        return true;
    }
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function validateZip(zip) {
    var zipRegex = /^\d{5}$/;
    return zipRegex.test(zip);
}