function validate() {
    //This code checks the first name and lastname are not empty
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
    var password2 = document.forms["myForm"]["password2"].value;
  
    if (username == "") {
      document.forms["myForm"]["username"].style.backgroundColor = "red";
      document.forms["myForm"]["username"].value = "Please Enter a value";
      alert("Please enter an username");
      return false;
    } else {
      document.forms["myForm"]["username"].style.backgroundColor = "lime";
    }
  
    if (password == "") {
      document.forms["myForm"]["password"].style.backgroundColor = "red";
      document.forms["myForm"]["password"].value = "Please enter a password";
      alert("Please enter a password");
      return false;
    }else {
      document.forms["myForm"]["password"].style.backgroundColor = "lime";
    }
  
    if (password.length < 8) {
      alert("your password must contain more than 8 characters!");
      return false;
    } else{
      document.forms["myForm"]["password"].style.backgroundColor = "lime";
    }
  
    if (password2 != password) {
      document.forms["myForm"]["password2"].style.backgroundColor = "red";
      document.forms["myForm"]["password2"].value = "Please enter the same password";
      alert("Please enter the same password");
      return false;
    } else{
      document.forms["myForm"]["password2"].style.backgroundColor = "lime";
    }
  
  }