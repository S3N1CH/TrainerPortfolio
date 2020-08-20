new WOW().init();

var mySwiper = new Swiper(".swiper-container", {
  speed: 400,

  pagination: {
    el: ".projects-pagination",
    bulletClass: "projects-bullet",
    bulletActiveClass: "projects-bullet-active",
    clickable: true,
  },
});

function scrollToContactMe() {
  document.querySelector(".footer").scrollIntoView();
}
