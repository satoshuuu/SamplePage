$('#item1Scroll').click(function(){
    $("html,body").animate({ scrollTop: $('#content1').offset().top});
});
$('#item2Scroll').click(function () {
    $("html,body").animate({ scrollTop: $('#content2').offset().top});
});
$('#item3Scroll').click(function () {
    $("html,body").animate({ scrollTop: $('#content3').offset().top});
});
$('#item4Scroll').click(function () {
    $("html,body").animate({ scrollTop: $('#content4').offset().top});
});
$('#topScroll').click(function () {
    $("html,body").animate({ scrollTop: $('html').offset().top });
});