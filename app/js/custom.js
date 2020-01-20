$(document).ready(function () {

  $('.header-menu__item a').click(function(){
    $(this).parents('.header-menu-list').find('.header-menu__item').removeClass('active');
    $(this).parent().addClass('active');
    return false
  });

function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('.img_bg').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
            $(this).find('.img_bg').css('display','none');
        }
    });
}
ibg();

// slider-banner
  var mySwiper = new Swiper('.swiper-container', {
      roundLengths: true,
      slidesPerView: 1,
      speed: 2000,
      loop: true,
      navigation: {
        nextEl: '.forward',
        prevEl: '.backward',
      },
  }); 

// 
});