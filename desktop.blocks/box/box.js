$(function() {

    var photoWrap = $('.box__photo-wrapper'),
        photoBig = $('.box__photo-item img'),
        dfdTitle = $.Deferred(),
        dfdFullPhoto = $.Deferred(),
        album = $('.album'),
        scrollBar = $('.box__thumbs-list'),
        speed = 400,
        scrollLength = 0,
        photoThumb = $('.box__mini'),
        loader = $('.loading'),
        progressbar = $('.progressbar__loading');
        $('.progressbar').fadeIn(800);

    function alignPhoto(param) {
        photoWrap.css('height', $(window).height());
        photoBig.css({
            'margin-top': photoWrap.height()/2 - param.height()/2,
            'right': photoWrap.width()/2 - param.width()/2
            });
    } alignPhoto(photoBig);

    $(window).resize(function() {
        alignPhoto(photoBig);
    });

    $(window).load(function() {
        progressbar.text('Всё готово!');
        setTimeout(function () {
           $('.progressbar').fadeOut(800);
        }, 1000);
    });

    photoBig.load(function() {
        alignPhoto(photoBig);
        $('.box__mini').eq(0).addClass('box__mini_state_active');

        return dfdFullPhoto.resolve();
    });

    $.when(dfdFullPhoto).done(function(){
        photoBig.fadeIn(600);
    });

    $.when(dfdTitle).done(function(){
        $('.album').removeClass('album_visibility_hidden');
    });

$.getJSON('http://api-fotki.yandex.ru/api/users/aig1001/album/63684/photos/?format=json&callback=?',function(data){

    (function getFullPhoto() {
            photoBig.attr('src', data.entries[0].img.L.href);
    })();

    (function getTitle() {
        $('.album__title-name').text(data.title);
        $('.album__count-photos').text(data.imageCount);

        return dfdTitle.resolve();
    })();

    (function getPhotos() {
        for (var i = 0; i < data.entries.length; i++) {
            $('<div class="box__mini">')
                .attr({
                    title: data.entries[i].title,
                    data: data.entries[i].img.L.href
                })
                .css('background-image', 'url(' +data.entries[i].img.XS.href+ ')')
                .appendTo('.box__thumbs-list');
        }
        photoThumb = $('.box__mini');
        return photoThumb;
    })();

function slider(param) {
    var photoBig = $('.box__photo-item img'),
        getAttr ='';

    (param.hasClass('box__control')) ?
        getAttr = $('.box__mini_state_active').next().attr('data') :
        getAttr = param.attr('data');

    if (photoBig.attr('src') !== getAttr) {
        photoBig.eq(0).animate({'left': '-' + photoBig.width()}, speed);
        setTimeout(function () {
            photoBig.remove();
            (param.hasClass('box__control')) &&
            $('.box__mini_state_active')
                .removeClass('box__mini_state_active')
                .next()
                .addClass('box__mini_state_active');

            $('<img>')
                .hide()
                .attr('src', getAttr)
                .appendTo('.box__photo-item')
                .load(function() {
                    $(this)
                        .css({
                            'margin-top': photoWrap.height()/2 - $(this).height()/2,
                            'right': '-'+$(this).width()+'px'
                        })
                        .show()
                        .animate({'right': photoWrap.width()/2 - $(this).width()/2}, speed, 'swing');
                });

            $(window).resize(function() {
                photoBig = $('.box__photo-item img');
                photoWrap.css('height', $(window).height());
                photoBig.css({
                    'margin-top': photoWrap.height()/2 - photoBig.height()/2,
                    'right': photoWrap.width()/2 - photoBig.width()/2
                    });
            });
        }, speed);
    }
    if(!param.hasClass('box__control')) {
        photoThumb.removeClass('box__mini_state_active');
        param.addClass('box__mini_state_active');
    }
}

    photoThumb.bind('mousedown', function(){
        slider($(this));
    });

    $('.box__control_direction_right').bind('mousedown', function(){
        slider($(this));
    });

    $('.box__control_direction_left').bind('mousedown', function(){

        var photoBig = $('.box__photo-item img'),
            getAttr = $('.box__mini_state_active').prev().attr('data');

            photoBig.css('left', '');
            photoBig.eq(0).animate({'right': '-' + photoBig.width()}, speed);
            setTimeout(function () {
                photoBig.remove();
                $('.box__mini_state_active')
                    .removeClass('box__mini_state_active')
                    .prev()
                    .addClass('box__mini_state_active');

                $('<img>')
                    .hide()
                    .attr('src', getAttr)
                    .appendTo('.box__photo-item')
                    .load(function() {
                        $(this)
                            .css({
                                'margin-top': photoWrap.height()/2 - $(this).height()/2,
                                'left': '-'+$(this).width()+'px'
                            })
                            .show()
                            .animate({'left': photoWrap.width()/2 - $(this).width()/2}, speed, 'swing');

                    });

                $(window).resize(function() {
                    photoBig = $('.box__photo-item img');
                    photoWrap.css('height', $(window).height());
                    photoBig.css({
                        'margin-top': photoWrap.height()/2 - photoBig.height()/2,
                        'right': photoWrap.width()/2 - photoBig.width()/2
                        });
                });
            }, speed);

    });

});

    $('.box__thumb-arrow').bind('mousedown', function(){
        ($(this).hasClass('box__thumb-arrow_direction_right')) ?
        scrollLength += 150 : scrollLength -= 150;
        scrollBar.animate({'scrollLeft': '+' + scrollLength}, speed);
    });
});