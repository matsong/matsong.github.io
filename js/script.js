 // 우측 버튼 비활성
$(document).bind("contextmenu", function (e) {
    return false;
});

// Parallax 효과
const images = document.getElementsByClassName('couple-drawing');
new simpleParallax(images, {
    delay: 1.8,
    transition: "cubic-bezier(0,0,0,1)",
    orientation: "up",
    scale: 1.1
});

document.querySelectorAll(".account").forEach((element) => {
    element.addEventListener("click", () => {
      const account = {
        groom: "송현우 농협 3020324325551",
        groomFather: "송영재 하나은행 03619262793",
        groomMother: "장민순 iM뱅크 010080602331",
        bride: "강민영 하나은행 86691031066107",
        brideFather: "강석 농협 64512050298",
        brideMother: "전희정 광주은행 146121880788",
      }[element.id];
  
      navigator.clipboard.writeText(account).then(
        () => {
          alert("계좌번호를 복사했습니다.\n" + account);
        },
        () => {
          alert("계좌번호를 복사하지 못했습니다.\n" + account);
        }
      );
    });
  });

  const btns = document.querySelectorAll(".faq__question");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const faqItem = btn.parentNode;
      const isActive = faqItem.classList.contains("active");
  
      removeActiveClasses();
  
      if (!isActive) {
        faqItem.classList.add("active");
      }
    });
  });
  
  function removeActiveClasses() {
    btns.forEach((btn) => {
      btn.parentNode.classList.remove("active");
    });
  }

  Kakao.init("5e5b2918ca5dcf929543ebbfc543bd10");
  
  document.querySelector(".link").addEventListener("click", () => {
    Kakao.Share.sendCustom({
      templateId: 113829
    });
  });

  const slide = new Swiper('.swiper-container', {
    slidesPerView : 'auto',
    spaceBetween : 6,
    loop : ture,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true
    }
  })