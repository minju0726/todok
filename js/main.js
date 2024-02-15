$(document).ready(function () {
  $(".mainmenu > li").mouseenter(function () {
    $(this).find(".submenu").stop().slideDown();
  });

  $(".mainmenu > li").mouseleave(function () {
    $(this).find(".submenu").stop().slideUp();
  });

  // 안내창

  // 안내창 스크립트
    // 안내창 스크립트
    const body = document.querySelector("body");
    const modal = document.querySelector(".modal-wrap");
    const modalClose = document.querySelector(".modal-closeBtn");
    // isOpen 값에 따라 스크롤을 제어하는 함수
    function controlScroll(isOpen) {
      if (isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

  // 초기 모달 상태 설정
  const isOpen = true;
  controlScroll(isOpen);

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";

    // 모달이 닫힐 때는 스크롤을 다시 활성화
    controlScroll(false);
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

  // 카운트다운 시작 시간 설정 (초 단위)
  // 목표 날짜 및 시간 설정 (연, 월, 일, 시, 분, 초)
  const targetDate = new Date("2024-12-31T23:59:59").getTime();

  // 타이머 업데이트 함수
  function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById(
        "countdown"
      ).innerHTML = `${hours}시간 ${minutes}분 ${seconds}초 남음`;
    } else {
      document.getElementById("countdown").innerHTML = "카운트다운 종료";
    }
  }

  // 1초마다 타이머 업데이트
  setInterval(updateCountdown, 1000);

  // 페이지 로드 시 초기 업데이트 수행
  updateCountdown();
});
