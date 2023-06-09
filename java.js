function validateForm() {
    var fullName = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var Message = document.getElementById("message").value;
    var submit = document.getElementById("submit").value;
    
    var errorMessages = [];

    if (fullName === "") {
        errorMessages.push("Please enter your full name.");
    }

    if (email === "") {
        errorMessages.push("Please enter your email address.");
    } 
}