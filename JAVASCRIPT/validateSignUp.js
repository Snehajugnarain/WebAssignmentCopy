/*
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cornfirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('form');
const fnameError = document.getElementById('fnameError');
const lnameError = document.getElementById('lnameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPaswsordError = document.getElementById('confirmPasswordError');

form.addEventListener('submit', (e) =>{
    let emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneCheck = /^[2-5789]\d{7}$/;
    let nameCheck = /^[a-zA-Z]+$/;

    if (!fname.value.match(nameCheck)) {
        e.preventDefault(); 
        fnameError.innerHTML = "Invalid first name";
    }
    else {
        fnameError.innerHTML = "";
    }

    if (!lname.value.match(nameCheck)) {
        e.preventDefault(); 
        lnameError.innerHTML = "Invalid last name";
    }
    else {
        lnameError.innerHTML = "";
    }

    if (!email.value.match(emailCheck)) {
        e.preventDefault(); 
        emailError.innerHTML = "Invalid Email";
    }
    else {
        emailError.innerHTML = "";
    }

    if (!phone.value.match(phoneCheck)) {
        e.preventDefault();
        phoneError.innerHTML = "Invalid Number";
    }
    else {
        phoneCheck.innerHTML = "";
    }

    if (password.value.length === 0) {
        e.preventDefault();
        passwordError.innerHTML = "Invalid password";
    }
    else if (password.value.length <= 4) {
        passwordError.innerHTML = "Weak password"
    }
    else if (password.value.length > 4 && password.value.length <= 8) {
        passwordError.innerHTML = "Medium password";
        passwordError.style.color = "yellow";
    }
    else if (password.value.length > 10) {
        passwordError.innerHTML = "Strong password";
        passwordError.style.color = "green";
    }

    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        confirmPaswsordError.innerHTML = "Password do not match";
    }
    else {
        confirmPaswsordError.innerHTML = "";
    }
});
*/
function showPassword() {
    var showPass = document.getElementById("password");
    if (showPass.type === "password") {
        showPass.type = "text";
    }
    else {
        showPass.type = "password";
    }

    var showPassCon = document.getElementById("confirm-password");
    if (showPassCon.type === "password") {
        showPassCon.type = "text";
    }
    else {
        showPassCon.type = "password";
    }
}



