var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: "3",
    coverflowEffect: {
        rotate: 15,
        strech: 0,
        depth: 300,
        modifier:1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});