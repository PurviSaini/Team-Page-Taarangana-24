$(document).ready(function(){

  AOS.init({
    duration: 1000,
  });
  $('#start-btn').click(function(){
    // $('.imagecontainer').scroll();
      $('.imagecontainer').html("")
      $('.imagecontainer').css("background-image","none");
      $('.imagecontainer').css("background-color","rgb(178, 178, 178)");
      $('.imagecontainer').slideUp(1000, function(){
        $(this).scroll();
      });
      // $('.imagecontainer').scroll();
      $('.circles').hide();
  })

})