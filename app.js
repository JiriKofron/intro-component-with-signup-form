/* form validation
- objevení vykřičníku a textu pod formulářem */

var exclamation = document.getElementsByClassName("error");
var form = document.getElementById("form");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var formError = document.getElementsByClassName("form_error");
var input = document.getElementsByTagName("input");



/* button.addEventListener("click", function(){
    if (email.value === "" || email.value !== "/\S+@\S+\.\S+/") {
        exclamation[0].style.display = "block";
        email.style.border = "1px solid red";
    };
});

email.addEventListener("input", function (event) {
    if (email.validity.valid) {
      error.innerHTML = "";
      error.className = "error";
    }
  }, false); */

  function formValidation(event) {
    for (i = 0; i < 4; i++){
      input[i].classList.remove("error");
      formError[i].style.display = "none";
      
      if (!email.validity.valid) {
        formError[2].style.display = "block";
        email.classList.add("error");
        event.preventDefault();
      }

      if((input.type != "email" || input.type != "submit") && input[i].value == ""){
      formError[i].style.display = "block";
      input[i].classList.add("error");
      event.preventDefault();
      }
    }

  }
  form.addEventListener("submit", formValidation, false)
