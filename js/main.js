var form = $(".needs-validation");
form.submit(function(event) {
  console.log("event: " +event);
  if(form[0].checkValidity() == false) {
    console.log("false");
    event.preventDefault();
    event.stopPropagation();
    form.addClass("was-validated");
  }
});
