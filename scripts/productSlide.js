var shelf = new Swiper(".product-shelf", {
    spaceBetween: 17,  
    centeredSlides: false,
    slidesPerView: 5,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
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
        slidesPerView: 2
      }, 1000: {
        slidesPerView:5
      }
    }
    
  }); 


  var swiper = new Swiper(".tipbar", {
    spaceBetween: 17,  
    centeredSlides: false,
    slidesPerView: 1,
    loop: true,
   
});

  

  