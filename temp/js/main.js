function toggleHeader(){
    var scroll_status = $(document).scrollTop();
    if(scroll_status > 95) {
        $("nav").addClass("fixed");
    }
    else {
        $("nav").removeClass("fixed");
    }
}
$(document).scroll(function(){
    toggleHeader();
});
$(document).ready(function() {
    $('select').styler();
    $('.power-js').click(function () {
        $(this).parent().find('.power-js').removeClass("active");
        $(this).addClass('active');
        console.log(this);
    });
    $('.package .link_for_description').click(function () {
        $(this).prev().slideToggle(400);
        console.log(this);
        var text = $(this).children("p").text().toLowerCase();
        console.log(text);
        if (text === 'открыть характеристики') {
            $(this).children("p").text("скрыть характеристики");
            $(this).children("p").css('color', '#737373');
        } else {
            $(this).children("p").text("открыть характеристики");
            $(this).children("p").css('color', '#30518e');
        }
    });
    $('.question').click(function () {
        $('.question span').removeClass('open');
        $('.answer').hide(300);
        $(this).find('.answer').show(300);
        $(this).find('span').addClass('open');
    });
    $('.section-11 .btn').click(function () {
        $('.question-block-more').slideToggle();
    });
    $('.section-7 .btn').click(function () {
        $('.more-project').slideToggle();
        if  ($('.section-7 .carousel-control-prev').css('display') !== 'none') {
            $('.section-7 .carousel-control-prev, .section-7 .carousel-control-next').hide();
        } else {
            $('.section-7 .carousel-control-prev, .section-7 .carousel-control-next').show();
        }
    });
    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
});
