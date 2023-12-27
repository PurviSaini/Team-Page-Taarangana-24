AOS.init({
  duration: 1000,
});

// document.getElementById("start-btn").addEventListener("mouseover", function(){
//   // this.style.cursor = pointer;
//   this.style.color = 'red';
//   console.log('Hello');
// })
// $(document).ready(function(){
//   $('.start-btn').click(function(){
//     $('.start-btn').animate({
//       fontSize:"12px"
//     })
//   })
// })

$('.start-btn').click(function(){
    $(this).fadeIn();
})