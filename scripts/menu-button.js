
$(document).ready(function () {
var fixmeTop = $('.menu-button').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('.menu-button').css({
            position: 'fixed',
            top: '0',
            left: '0',
            right:'0',
            background:'#080808e8',
            zIndex:'99'
        });
        $('.responsive-menu').css({
            top: '60px',
        });
        if ($(window).width() <= 991){
        $('.main-heading').css('marginTop' , '240px');
        }
    } else {
        $('.menu-button').css({
            position: 'static',
            background:'transparent'
        }),
        $('.responsive-menu').css({
            top: '160px',
        }),
        $('.main-heading').css('marginTop' , '180px');
    }
});

});

$(document).ready(function(){
    $(".menu-button-responsive button").click(function(){
        $(".responsive-menu").slideToggle();
        $(".bar1").toggleClass("active");
 		$(".bar2").toggleClass("active");
  		$(".bar3").toggleClass("active");
    });
});

