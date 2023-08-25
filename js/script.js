$(document).ready(function(){
    $('.btn1').on("click",function(){
      $('.overlay').show(1000);
    });
    
    $('.popup-close').on("click",function(){
     $('.overlay').hide(1000);
    })})