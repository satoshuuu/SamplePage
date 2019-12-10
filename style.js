$('#item1Scroll').click(function(){
    $("html,body").animate({ scrollTop: $('#content1').offset().top - 200 });
});
$('#item2Scroll').click(function () {
    $("html,body").animate({ scrollTop: $('#content2').offset().top - 200 });
});
$('#item3Scroll').click(function () {
    $("html,body").animate({ scrollTop: $('#content3').offset().top - 200 });
});
$('#item4Scroll').click(function () {
    $("html,body").animate({ scrollTop: $('#content4').offset().top - 200 });
});
$('#topScroll').click(function () {
    $("html,body").animate({ scrollTop: $('html').offset().top });
});