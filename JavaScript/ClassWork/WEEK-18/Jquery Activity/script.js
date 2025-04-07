// 1. toggle button
$(function(){
  $('#toggleBtn').on("click", function(){
    $('#myParagraph').toggle()
  });


});

//2.Change Text Color on Hover
$(function(){
  $('h2').on("mouseover", 
    function(){
      $(this).css({
        'color':'blue', 
        'background-color':'red'});
  }).on('mouseleave',
    function(){
    $(this).css({
      'color':'', 
      'background-color':'',
      
    });
  })
})

//3.Add New List Item
$(function(){
  $('#addItem').on('click',function(){
    const itemText = $('#newItem').val().trim();
    if(itemText !== ''){
      $('#itemList').append('<li>' + itemText + "</li>");
      $('#newItem').val('');
    }
  })
})


//Fade Out Div on Click:
$(function(){
$('#fadeDiv').on('click',function(){
  $(this).fadeOut(2000);
})

})



// 5.Accordion Effect
$(function(){
  $('.accordion-header').on('click', function(){
    $('.accordion-content').slideUp();
    if(!$(this).next(".accordion-content").is(":visible")){
      $(this).next(".accordion-content").slideDown();
    }
  })
})


















