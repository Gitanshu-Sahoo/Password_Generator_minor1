function generatePassword() { 
    let length= parseInt(document.getElementById("length").value);
    let chars = "";
    if(document.getElementById("uppercase").checked)
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(document.getElementById("lowercase").checked)
       chars += "abcdefghijklmnopqrstuvwxyz";
    if(document.getElementById("numbers").checked)
       chars += "0123456789";
    if(document.getElementById("symbols").checked)
       chars += "!@#$%^&*()_+?><{}[]";
    if(chars === "") {
       alert("Select at least one option");
       return;
    }
    let password = "";
    for(let i=0;i<length;i++) {
       password += chars.charAt(Math.floor(Math.random()*chars.length));
    }
    document.getElementById("password").value = password;
    let strength = "Weak 🔴";
    if(length >= 8)
       strength = "Medium 🟠";
    if(length >= 12 && document.getElementById("numbers").checked && document.getElementById("symbols").checked)
       strength = "Strong 🟢";
    document.getElementById("strength").innerHTML = "Password Strength: " + strength;
}
function copyPassword() {
    let password = document.getElementById("password");
    navigator.clipboard.writeText(password.value);
    alert("Password copied successfully!");
}