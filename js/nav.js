"use strict";

$(document).ready(function(){

  function navBurger(burger, nav) {
    if ( $(burger).hasClass("header__burger--close") ){
      navBurgerClose(burger, nav);
    } else {
      navBurgerOpen(burger, nav);
    }
  }
  
  function navBurgerOpen(burger, nav) {
    $(nav).slideDown();
    $(burger).addClass('header__burger--close');
  }

  function navBurgerClose(burger, nav) {
    $(nav).slideUp();
    $(burger).removeClass('header__burger--close');
  }

  $('.header__burger').on('click', function(){
    var navBlock = $('.nav-line');
    navBurger(this, navBlock);
  });


  $(window).on('scroll', function(e) { // отслеживаем событие на элементе window
    var navBurger = $('.header__burger');
    var nav = $('.nav-line');
    navBurgerClose(navBurger, nav);
  });


  $( window ).resize(function() {
    var winWidth = $( window ).width();
    var burger = $('.header__burger');
    var nav = $('.nav-line');

    $(burger).removeClass('header__burger--close');

    if ( winWidth > 1199 ) {
      nav.show();
    } else {
      nav.hide();
    }

  });

});