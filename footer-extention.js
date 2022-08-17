$(document).ready(function(){
    $(".support-resource-button-wrapper").on("click", function(){
        $("section.footer-extention-745px").toggleClass("open");
        $(".footer-745px").toggleClass("close");
    });
    $(".close-button-footer-745px").on("click",function(){
        $("section.footer-extention-745px").toggleClass("open");
        $(".footer-745px").toggleClass("close");
    });

});