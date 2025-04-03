var swiper = new Swiper(".mySwiper", {
    spaceBetween: 17,  
    centeredSlides: false,
    slidesPerView: 6,
    loop: true,
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

  

  