// $('h1').click(function(){
//   $(this).text("I was changed")
//   // console.log('There was a click!')
// })

// $('li').click(function(){
//   console.log('Ant li was clicked')
// })

//KEY PRESS
// $('input').eq(0).keypress(function(){
//   $('h3').toggleClass('turnBlue');
// })

// $('input').eq(0).keypress(function(event){
// console.log(event);
// })


// $('input').eq(0).keypress(function(event){
//   if (event.which === 13) {
//     $('h3').toggleClass('turnBlue');
//   }
// })


//on()
// $('h1').on('dblclick', function(){
//   $(this).toggleClass('turnBlue');
// })


// $('h1').on('mouseenter', function(){
//   $(this).toggleClass('turnBlue');
// })

// $('input').eq(1).on('click', function(){
//   $('.container').fadeOut(3000);
// })


$('input').eq(1).on('click', function(){
  $('.container').slideUp(3000);
})
