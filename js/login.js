$(document).ready(function () {
    $(".mainmenu > li").mouseenter(function () {
      $(this).find(".submenu").stop().slideDown();
    });
  
    $(".mainmenu > li").mouseleave(function () {
      $(this).find(".submenu").stop().slideUp();
    });
  
    
  });