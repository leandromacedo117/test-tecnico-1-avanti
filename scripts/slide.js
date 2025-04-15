var shelf = new Swiper(".product-shelf", {
    spaceBetween: 17,  
    centeredSlides: false,
    slidesPerView: 5,
    slidesPerGroup: 3,
    loop: false,
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
    }, breakpoints: {
      360:{
        spaceBetween:10,
        slidesPerView: 2,
        loop: true,
        autoplay:{
          delay: 5000,
           disableOnInteraction: false,
         },
      }, 1000: {
        slidesPerView:5
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        autoplay:{
          delay: 5000,
           disableOnInteraction: false,
         },
      },
     
      1024: {
        slidesPerView: 5,
        spaceBetween: 17,
        loop: true,
        autoplay:{
          delay: 5000,
           disableOnInteraction: false,
         },
      },

    }, 

    
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

  

  