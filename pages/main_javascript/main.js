/***********************************the showing of log and sign forms***********************************/ 
$(document).ready(function(){
$('#btn-log').click(function(){
  $('.logging_form').toggle(1000);
  $('.Signning_form').css('display','none');
});
 $('#btn-sign').click(function(){
      $('.Signning_form').toggle(1000);
      $('.logging_form').css('display','none');
    });
});

/*****************************************showing the squire btn*******************************************/
$(document).ready(function(){
  $('.btn-squire').click(function(){
   $('.list-menu').fadeToggle(1000);
  });
});

/****************************************validation for logging*****************************************/
$(document).ready(function(){
    $("#email-log").keyup(function(){
        if(validmaillog()){
            $("#email-log").css("border-bottom","3px solid #27d627");
            $("#email-error-log").css("color","#27d627");
            $("#email-error-log").html("valid email");
            $('.error-log-form').html('valid information');
        }else{
            $("#email-log").css("border-bottom","3px solid red");
            $("#email-error-log").css("color","red");
            $("#email-error-log").html("unvalid email");
        }
    });

    function validmaillog(){
        var email =$("#email-log").val();
        var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(reg.test(email)){
            return true;
        }
        else{
            return false;
        }
    }

    $("#password-log").keyup(function(){
        if(validpasswordlog()){
        $("#password-log").css("border-bottom","3px solid #27d627");
        $("#error-password-log").css("color","#27d627");
        $("#error-password-log").html("valid password");
        $('.error-log-form').html('valid information');
        }else{
            $("#password-log").css("border-bottom","3px solid red");
            $("#error-password-log").css("color","red");
            $("#error-password-log").html("unvalid passsword");
        }
    });

    function validpasswordlog(){
        var password =$("#password-log").val();
        var pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
        if(pattern.test(password)){
            return true;
        }
        else{
            return false;
        }
    }

    $('#btn-log-in').click(function(ev){
        if( validpasswordlog()===false || validmaillog()===false ){
        $('.error-log-form').html('Please Fill All The Inputs Correctley');
        ev.preventDefault();
        }
       else{
        alert('welcome to WARM HEART hotel');
    }
    });
});  
/***************************************validation for signning up**********************************/
$(document).ready(function(){
    $("#user-sign").keyup(function(){
        if(checkUsername()){
         $("#user-sign").css("border-bottom","3px solid #27d627");
         $("#user-error-sign").css("color","#27d627");
         $("#user-error-sign").html("valid user name");
         $('.error-sign-form').html('valid information');
        }else{
             $("#user-sign").css("border-bottom","3px solid red");
             $("#user-error-sign").css("color","red");
             $("#user-error-sign").html("unvalid user name");
        }
     });

     function checkUsername(){
        console.log('match');
        var name =$("#user-sign").val();
        var pattern = /^[A-Z]{4,}$/;
        if(name.match(pattern)){
            return true;
        }else{
            return false;
        }
    }
  
    $("#email-sign").keyup(function(){
        if(validmailsign()){
            $("#email-sign").css("border-bottom","3px solid #27d627");
            $("#error-email-sign").css("color","#27d627");
            $("#error-email-sign").html("valid email");
            $('.error-sign-form').html('valid information');
        }else{
            $("#email-sign").css("border-bottom","3px solid red");
            $("#error-email-sign").css("color","red");
            $("#error-email-sign").html("unvalid email");
        }
    });
    function validmailsign(){
        var email =$("#email-sign").val();
        var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(reg.test(email)){
            return true;
        }
        else{
            return false;
        }
    }

    $("#password-sign").keyup(function(){
        if(validpasswordsign()){
        $("#password-sign").css("border-bottom","3px solid #27d627");
        $("#error-password-sign").css("color","#27d627");
        $("#error-password-sign").html("valid password");
        $('.error-sign-form').html('valid information');
        }else{
            $("#password-sign").css("border-bottom","3px solid red");
            $("#error-password-sign").css("color","red");
            $("#error-password-sign").html("unvalid passsword");
        }
    });

    function validpasswordsign(){
        var password =$("#password-sign").val();
        var pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
        if(pattern.test(password)){
            return true;
        }
        else{
            return false;
        }
    }

    $('#btn-sign-up').click(function(ev){
        if(validpasswordsign()===false || validmailsign()===false || checkUsername()===false ){
        $('.error-sign-form').html('Please Fill All The Inputs Correctley');
        ev.preventDefault();
        }
        else{
        alert('you have succefuly signed up');
        }
    });
});

/***************************************function for reserve pop up***====*******************************/
$('#reserve').click(function(){
    $('.reservation-form').slideToggle(1500);
});

/***************************************slider of the signning/logging paage**********************************/
$("#slideshow > div:gt(0)").hide();
  setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  4500);

/******************************************slider of the home paage****************************************/
$(".container > div:gt(0)").hide();
  setInterval(function() { 
  $('.container > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .appendTo('.container');
},  3500);

/****************************************validation for reservation*****************************************/
/////////////function for username reserve
$('#username-reserve').keyup(function(){
   if( Username()){
       $('#username-error-reserve').html('valid username');
       $('#username-error-reserve').css('color','#27d627');
       $('#username-reserve').css("border-bottom","4px solid #27d627");
       $('#result-final').html('valid information');
   }
   else{
    $('#username-error-reserve').html('unvalid username');
    $('#username-error-reserve').css('color','red');
    $('#username-reserve').css("border-bottom","4px solid red")
   }
});
function Username(){
    console.log('match');
    var name =$("#username-reserve").val();
    var pattern = /^[A-Za-z]{4,}$/;
    if(name.match(pattern)){
        return true;
    }else{
        return false;
    }
}

///////////// function for reserve email
$("#email-reserve").keyup(function(){
        if(validmailreserve()){
            $("#email-reserve").css("border-bottom","4px solid #27d627");
            $("#error-email-reserve").css("color","#27d627");
            $("#error-email-reserve").html("valid email");
            $('#result-final').html('valid information');
        }else{
            $("#email-reserve").css("border-bottom","4px solid red");
            $("#error-email-reserve").css("color","red");
            $("#error-email-reserve").html("unvalid email");
        }
});
function validmailreserve(){
    var email =$("#email-reserve").val();
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(reg.test(email)){
        return true;
    }
    else{
        return false;
    }
}

////////////////// function for the days number input
var result;
$('#days-of-booking').keyup(function(){
    var day_price = 120;
    var days = $('#days-of-booking');
    if (days.val()>0){
        result = day_price * days.val();
        $('#error-days-of-booking').html('valid days number');
        $('#error-days-of-booking').css('color','#27d627');
        $('#days-of-booking').css("border-bottom","4px solid #27d627");
        $('#result-final').html('valid information');
    }
    else if(days.val()<=0){
        $('#error-days-of-booking').html('the days number must bigger than 0')
        $('#error-days-of-booking').css('color','red');
        $('#days-of-booking').css("border-bottom","4px solid red");
    }
});
/*****for the mouse up too*/
$('#days-of-booking').mouseup(function(){
    var day_price = 120;
    var days = $('#days-of-booking');
    if (days.val()>0){
        result = day_price * days.val();
        $('#error-days-of-booking').html('valid days number');
        $('#error-days-of-booking').css('color','#27d627');
        $('#days-of-booking').css("border-bottom","4px solid #27d627");
        $('#result-final').html('valid information');
    }
    else if(days.val()<=0){
        $('#error-days-of-booking').html('the days number must bigger than 0')
        $('#error-days-of-booking').css('color','red');
        $('#days-of-booking').css("border-bottom","4px solid red");
    }
});

/////////////////validation of all inputs
$('#btn-reserve').click(function(ev){
  if($('#days-of-booking').val()==='' || validmailreserve()===false ||  Username()===false){
      $('#result-final').html('Please fill all the inputs correctly');
      $('#result-final').css('color','darkblue');
      ev.preventDefault();
  }
  else{
    
      $('#result').val(`${result} DH`);
  }
});

/******************************** validation for the inputs ******************************/
$('#btn-feedback').click(function(){
if($('#feedback-sender').val()==='' || $('#feedback-area').val()==='' ){
    $('#feedback-error').html('please fill all the inputs');
}
else{
    $('#feedback-error').html('feedback is sent successfult');
    $('#feedback-sender').val('');
    $('#feedback-area').val('');
   
}
});

//affichage from json
$(function(){
$.ajax({
    method:"GET",
    url:"http://localhost:3000/reservationJson",
    dataType:"json",
    success:function(data){
console.log('data' +  JSON.stringify(data));
$.map(data,function(post,i){
console.log("i" + i + "post" + post.reserver_username);
$("#tbody").append($("<tr>").append($("<td>").
append(post.id))
.append($("<td>").
append(post.reserver_username))
.append($("<td>")
.append(post.reserver_email))
.append($("<td>")
.append(post.reservation_days))
.append($("<td>")
.append(post.result))
.append($("<td>")
.append($("<a href=/edit/"+post.id +" class='links edit' >").append("Modifier"))
.append($("<a href=/delete/"+post.id +" class='links delete' >").append("Delete"))));
});
    }
});
});

//affichage from json modifier
