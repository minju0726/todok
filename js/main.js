$(document).ready(function(){
  $(".mainmenu > li").mouseenter(function () {
    $(this).find(".submenu").stop().slideDown();
});

$(".mainmenu > li").mouseleave(function () {
    $(this).find(".submenu").stop().slideUp();
});

//안내창 
const body = document.querySelector("body");
const modal = document.querySelector(".modal-wrap");
const modalClose = document.querySelector(".modal-close");
function controlScroll(isOpen) {
  if (isOpen) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
}

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


  //서브스와이퍼
 var swiper = new Swiper(".toto", {
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  })