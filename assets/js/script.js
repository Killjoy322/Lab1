function slowScroll(id) {
  var offset = 70;

  $('html, body').animate({
      scrollTop: $(id).offset().top - offset
  }, 1500)
};