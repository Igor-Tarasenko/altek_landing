$(document).ready(function() {
    $('select').styler();
    $('.standard .power-js').click(function () {
        $('.standard .power-js').removeClass('active');
        $(this).addClass('active');
    });
    $('.premium .power-js').click(function () {
        $('.premium .power-js').removeClass('active');
        $(this).addClass('active');
    });
    $('.premium-smart .power-js').click(function () {
        $('.premium-smart .power-js').removeClass('active');
        $(this).addClass('active');
    });
    $('.season .power-js').click(function () {
        $('.season .power-js').removeClass('active');
        $(this).addClass('active');
    });
    $('.compact .power-js').click(function () {
        $('.compact .power-js').removeClass('active');
        $(this).addClass('active');
    });
    $('.pool .power-js').click(function () {
        $('.pool .power-js').removeClass('active');
        $(this).addClass('active');
    });
    $('.standard .link_for_description').click(function () {
        $('.standard .package_description').slideToggle(400);
        var text = $('.standard .link_for_description p').text().toLowerCase();
        console.log(text);
        if (text === 'открыть характеристики') {
            $('.standard .link_for_description p').text("скрыть характеристики");
            $('.standard .link_for_description p').css('color', '#737373');
        } else {
            $('.standard .link_for_description p').text("открыть характеристики");
            $('.standard .link_for_description p').css('color', '#30518e');
        }
    });
    $('.premium .link_for_description').click(function () {
        $('.premium .package_description').slideToggle(400);
        var text = $('.premium .link_for_description p').text().toLowerCase();
        console.log(text);
        if (text === 'открыть характеристики') {
            $('.premium .link_for_description p').text("скрыть характеристики");
            $('.premium .link_for_description p').css('color', '#737373');
        } else {
            $('.premium .link_for_description p').text("открыть характеристики");
            $('.premium .link_for_description p').css('color', '#30518e');
        }
    });
    $('.premium-smart .link_for_description').click(function () {
        $('.premium-smart .package_description').slideToggle(400);
        var text = $('.premium-smart .link_for_description p').text().toLowerCase();
        console.log(text);
        if (text === 'открыть характеристики') {
            $('.premium-smart .link_for_description p').text("скрыть характеристики");
            $('.premium-smart .link_for_description p').css('color', '#737373');
        } else {
            $('.premium-smart .link_for_description p').text("открыть характеристики")
            $('.premium-smart .link_for_description p').css('color', '#30518e');
        }
    });
    $('.season .link_for_description').click(function () {
        $('.season .package_description').slideToggle(400);
        var text = $('.season .link_for_description p').text().toLowerCase();
        console.log(text);
        if (text === 'открыть характеристики') {
            $('.season .link_for_description p').text("скрыть характеристики");
            $('.season .link_for_description p').css('color', '#737373');
        } else {
            $('.season .link_for_description p').text("открыть характеристики")
            $('.season .link_for_description p').css('color', '#30518e');
        }
    });
    $('.compact .link_for_description').click(function () {
        $('.compact .package_description').slideToggle(400);
        var text = $('.compact .link_for_description p').text().toLowerCase();
        console.log(text);
        if (text === 'открыть характеристики') {
            $('.compact .link_for_description p').text("скрыть характеристики");
            $('.compact .link_for_description p').css('color', '#737373');
        } else {
            $('.compact .link_for_description p').text("открыть характеристики")
            $('.compact .link_for_description p').css('color', '#30518e');
        }
    });
    $('.pool .link_for_description').click(function () {
        $('.pool .package_description').slideToggle(400);
        var text = $('.pool .link_for_description p').text().toLowerCase();
        console.log(text);
        if (text === 'открыть характеристики') {
            $('.pool .link_for_description p').text("скрыть характеристики");
            $('.pool .link_for_description p').css('color', '#737373');
        } else {
            $('.pool .link_for_description p').text("открыть характеристики");
            $('.pool .link_for_description p').css('color', '#30518e');
        }
    });
    $('.question').click(function () {
        $('.question span').removeClass('open');
        $('.answer').hide(300);
        $(this).find('.answer').show(300);
        $(this).find('span').addClass('open');
    });
    $('.section-11 .btn').click(function () {
        $('.question-block-more').show();
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
/*
$(document).mouseup(function (e) {
    var div = $(".hidden-block");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.hide();
    }
});*/
