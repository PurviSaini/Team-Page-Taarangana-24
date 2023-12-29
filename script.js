$(document).ready(function(){

  AOS.init({
    duration: 1000,
  });
  $('.teams-container').hide();
  $('#start-btn').click(function(event){
    event.preventDefault();
    $(this).fadeOut(500)
    $('.wrapper-heading, #start-btn-wrap').fadeOut(500);
    $('.imagecontainer').slideUp(1700);
    $('.circles').hide();
    $('.teams-container').show();

  });

})