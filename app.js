/* form validation
- zjistit jak určit, že se jedná o formu emailu - v bootcampu to někde bylo
- objevení vykřičníku a textu pod formulářem */

var exclamation = document.getElementsByClassName("exclamation");
var email = document.getElementById("email");
var button = document.getElementById("btnemail");
var error = document.getElementById("error");
var form = document.getElementById("form");


button.addEventListener("click", function(){
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
  }, false);

  form.addEventListener("submit", function (event) {
    if (!email.validity.valid) {
      error.innerHTML = "Please provide a valid email";
      error.className = "error active";
      event.preventDefault();
    }
  }, false);