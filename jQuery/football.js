$(document).ready(function () {
    $(this).on("click", ".field", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        var newposX = x - 60;
        var newposY = y - 60; $(".player").css("transform", "translate3d(" + newposX + "px," + newposY + "px,0px)");
    })
})