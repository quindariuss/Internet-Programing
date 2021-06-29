function validateForm() {
  let name = document.forms["myform"]["name"].value;
  let email = document.forms["myform"]["email"].value;
  let password = document.forms["myform"]["password"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  } else if (!email.includes("@") && !email.includes(".com")) {
    alert("Invalid Email");
    return false;
  } else if (password != "CS4720exam") {
    alert("Wrong Password");
    return false;
  } else {
    myFunction();
  }
}

function myFunction() {
  location.replace("/main.html");
}
