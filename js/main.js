$(document).ready(function(){
  $(".mainmenu > li").mouseenter(function () {
    $(this).find(".submenu").stop().slideDown();
});

$(".mainmenu > li").mouseleave(function () {
    $(this).find(".submenu").stop().slideUp();
});

    // 메인스와이퍼
    var swiper = new Swiper(".todok", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })