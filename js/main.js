var form = $(".needs-validation");
form.submit(function(event) {
  if(form[0].checkValidity() == false) {
    //console.log("false");
    if($("input[name=email]").val() == "") {
      $("small[id=email-warning]").text("Email can not be empty");
    } else if(!validateEmail($("input[name=email]").val())) {
      $("small[id=email-warning]").text("Please enter a valid email");
    }
    event.preventDefault();
    event.stopPropagation();
    form.addClass("was-validated");
  }
});


function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
