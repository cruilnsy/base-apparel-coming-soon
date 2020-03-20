function submitForm(e) {
    e.preventDefault();
    validateForm();
}
function validateForm() {
    clearError();
    var email = document.subscribeForm.email.value;
    if (validateEmail(email)) {
        // do something, API call
    } else {
        displayError();
    }
}

function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function displayError() {
    document.querySelector(".error-message").style.display = "block";
    document.querySelector(".error-icon").style.display = "block";
}

function clearError() {
    document.querySelector(".error-message").style.display = "none";
    document.querySelector(".error-icon").style.display = "none";
}
