function slowScroll(id) {
    var offset = 70;

    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 1500)
};

$(function(){
  $('.btn').bind('click', function(){
        alert('Дякую, Ви для нас дуже важливі!!!');
  });
});
