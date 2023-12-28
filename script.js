$(document).ready(function(){

  AOS.init({
    duration: 1000,
  });
  $('#start-btn').click(function(){
    // $('.imagecontainer').scroll();
      $('.imagecontainer').html("")
      $('.imagecontainer').css("background-image","none");
      $('.imagecontainer').css("background-color","rgb(178, 178, 178)");
      $('.imagecontainer').slideUp(1000);
      $('.imagecontainer').scroll();
      $('.circles').hide();
  })

})
// added hover effect on start button and scroll effect on clicking start button