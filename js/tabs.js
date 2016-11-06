$(document).ready(function(){
  $(".delivery__head").on('click', function(){
    $(".delivery-pay__head").removeClass('delivery-pay__head--active');
    $(this).addClass('delivery-pay__head--active');
    $(".delivery-pay__tab").hide();
    $('.delivery').show();
  });
  $(".pay__head").on('click', function(){
    $(".delivery-pay__head").removeClass('delivery-pay__head--active');
    $(this).addClass('delivery-pay__head--active');
    $(".delivery-pay__tab").hide();
    $('.pay').show();
  });
});