var shelf = new Swiper(".product-shelf", {
  spaceBetween: 17,
  slidesPerView: 5,
  slidesPerGroup: 3,
  loop: false,
  loopAdditionalSlides: 2, // Adiciona slides extras para melhor transição
  loopedSlides: 5, // Igual ao número de slides visíveis
   autoplay: {
     delay: 3000,
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
  breakpoints: {
    200: {
      spaceBetween: 10,
      slidesPerView: 2,
      loopedSlides: 2,
      loop: true, 
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 20,
      loopedSlides: 2,
      loop: true, 
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 10,
      loopedSlides: 3,
      loop: true, 
    },
    720: {
      slidesPerView: 4,
      spaceBetween: 10,
      loopedSlides: 4,
      loop: true, 
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 17,
      loop: false, 
      loopedSlides: 0
    }
  }
});


  var swiper = new Swiper(".tipbar", {
    spaceBetween: 17,  
    centeredSlides: false,
    slidesPerView: 1,
    loop: true,
    speed: 25000,
    autoplay: {
      delay: 200,
       disableOnInteraction: false,
     },
});

  

  