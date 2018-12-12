
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    function login(){
      var user = document.getElementById('usernameTB').value;
      console.log(user);
      var pass = document.getElementById('passwordTB').value;
      console.log(pass);
      if (user == 'customer1@cummins.com' && pass == 'customer1')
      {
        window.location = 'customerHome.html';
      }
      else if (user == 'technician1@cummins.com' && pass == 'technician1')
      {
        window.location = 'index.html';
      }
      else if (user == 'hr1@cummins.com' && pass == 'manager1')
      {
        window.location = 'index.html';
      }
      else {
        alert("Incorrect username or password!")
      }
    }


})(jQuery);
