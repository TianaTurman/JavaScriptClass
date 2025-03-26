
// Assignment 1: Color Changer with .css() and .click()

$(function(){ 
    $("#changeColor").on("click",function(){
        $("#colorBox").css("background-color","blue");
    })
 });




// Assignment 2: Toggle Visibility with .hide(), .show(), and .click() 

$(function(){
$("#toggleBtn").on("click", function(){
    $("#text").toggle();
})

})




// Assignment 3: Append and Prepend List Items with .append() and .prepend()
$(function(){
 $("#addTop").on("click", function(){
    var item = $("#itemText").val().trim();
    if(item){
        $("#itemList").prepend("<li>" + item + "<li>");
   

    }
 })


 $("#addBottom").on("click", function(){
    var item = $("#itemText").val().trim();
    if(item){
        $("#itemList").append("<li>" + item + "<li>");
       

    }
 })

})

  




// Assignment 4: Toggle Class with .toggleClass()
$(document).ready(function(){
    $("#toggleDiv").click(function(){
        $(this).find(".text").toggleClass("highlight");
    });
});




// Assignment 5: Load Content via AJAX with $.get()
$(function(){
    $("#loadContent").on("click", function(){
        $.get("content.txt", function(data){
            $("#ajaxContent").html(data);
        });
    });
});

$.ajax({
    url: 'example.php',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        // Handle successful response
        console.log('Success:', data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        // Handle failed request
        console.error('Error:', textStatus, errorThrown);
    }
});

