function checkEmails(){
    let email = document.getElementById("email");
    let confirmEmail = document.getElementById("confirmEmail");
    if (email.value != confirmEmail.value) {
        alert("The emails do not match");
    }
}