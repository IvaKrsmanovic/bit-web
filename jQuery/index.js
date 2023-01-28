$(document).ready(function() {
  console.log('Hello world!')

  $("ul li:first-child").css("text-decoration","underline")
  $("ul li").css("text-transform","uppercase")
  $("li.active").css("color","pink")
  $("li").each(function(index, element){
    if($(element).index() == Math.floor($("li").length/2)) {
        $(element).css("background-color","yellow")
    }
  })
})