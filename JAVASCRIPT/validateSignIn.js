function showPassword() {
    var showPass = document.getElementById("password");
    // Toggle between showing password as text or hiding it as password
    if (showPass.type === "password") {
        showPass.type = "text";
    } else {
        showPass.type = "password";
    }
}