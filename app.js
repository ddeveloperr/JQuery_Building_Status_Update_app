var main = function() {
$('.btn').click(function(event){
 var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text('140');
    $('.btn').addClass('disabled'); 
})

// Outside the click event handler, select the 'status-box' class
 $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);
  
 // Write an if statement that checks whether charactersLeft is less than 0. If it is, select the CSS class 'btn' and add the class 'disabled' using .addClass()
    if(charactersLeft < 0) {
      $('.btn').addClass('disabled'); 
    }
    else if(charactersLeft == 140) {
      $('.btn').addClass('disabled');
    }
    else {
      $('.btn').removeClass('disabled');
    }
  });
  
  $('.btn').addClass('disabled');

};


$(document).ready(main);
