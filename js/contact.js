$("#submit").click(function() {

  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();

  //Function to email address validation
  function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
  }

  if (name == '' || email == '' || subject == '' || message == '') {
    $("#display").text("Please fill in all fields.");
  }

  else if( !validateEmail(email)) {
			$("#display").text("Please use a genuine email address.");
		}

  else {
  $("#display").text("");
  $("#form")[0].reset(); // To reset form fields on success.
  alert("Thank you for contacting me, I will be in touch shortly.");
  }
  
  return false;
});



$('#characterLeft').text('140 characters left');
$('#message').keydown(function() {
  var max = 140;
  var len = $(this).val().length;
  if (len >= max) {
    $('#characterLeft').text('You have reached the limit');
    $('#characterLeft').addClass('red');
    $('#btnSubmit').addClass('disabled');
  } else {
    var ch = max - len;
    $('#characterLeft').text(ch + ' characters left');
    $('#btnSubmit').removeClass('disabled');
    $('#characterLeft').removeClass('red');
  }
});
