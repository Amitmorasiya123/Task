let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let mobile = document.getElementById("mobile");
let email = document.getElementById("email");
let password = document.getElementById("password");

function validateForm() {
  if (firstname.value == "" || firstname.value == null) {
    document.getElementById("fname").innerHTML = "Please enter your first name";
  }
  else {
    document.getElementById("fname").innerHTML =" ";
  }
  if (lastname.value == "" || lastname.value == null) {
    document.getElementById("lname").innerHTML = "Please enter your last name";
  } else {
    document.getElementById("lname").innerHTML = "";
  }
  if (mobile.value.length < 10 || mobile.value.length > 10) {
    document.getElementById("mob").innerHTML =
      "Please enter your valid mobile number";
  } else {
    document.getElementById("mob").innerHTML = "";
  }
  if (email.value == "" || email.value == null) {
    document.getElementById("mail").innerHTML =
      "Please enter your email address";
  } else {
    document.getElementById("mail").innerHTML = "";
  }
  if (password.value.length < 6 || mobile.value.length > 6) {
    document.getElementById("pass").innerHTML =
      "Please enter your password minimum 6 characters";
  } else {
    document.getElementById("pass").innerHTML = "";
  }
  return false;
}
