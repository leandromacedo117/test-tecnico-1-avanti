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
      390:{
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

      // 1024:{
      //   spaceBetween:10,
      //   slidesPerView: 4
      // }, 1000: {
      //   slidesPerView:5
      // }
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

  

  