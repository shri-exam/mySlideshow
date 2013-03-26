$(function() {

    var photoWrap = $('.box__photo-wrapper'),
        photoBig = $('.box__photo-item img'),
        dfdTitle = $.Deferred(),
        dfdFullPhoto = $.Deferred(),
        album = $('.album'),
        scrollBar = $('.box__thumbs-list'),
        speed = 400,
        scrollLength = 0;

    function alignPhoto(param) {
        photoWrap.css('height', $(window).height());
        photoBig.css({
            'margin-top': photoWrap.height()/2-param.height()/2,
            'right': photoWrap.width()/2-param.width()/2
            });
    } alignPhoto(photoBig);

    $(window).resize(function() {
        alignPhoto(photoBig);
    });

$.getJSON('http://api-fotki.yandex.ru/api/users/aig1001/album/63684/photos/?format=json&callback=?',function(data){

    (function getFullPhoto() {
            photoBig.attr('src', data.entries[0].img.XL.href).load(function() {
            alignPhoto($(this));
            $('.box__mini').eq(0).addClass('box__mini_state_active');
        });
            return dfdFullPhoto.resolve();
    })();

    (function getTitle() {
        $('.album__title-name').text(data.title);
        $('.album__count-photos').text(data.imageCount);

        return dfdTitle.resolve();
    })();

    (function getPhotos () {
        for (var i = 0; i < 50; i++) {
            $('<div>')
                .addClass('box__mini')
                .attr('data', data.entries[i].img.XL.href)
                .css('background-image', 'url('+data.entries[i].img.XS.href+')')
                .appendTo('.box__thumbs-list');
        }
    })();

    $.when(dfdFullPhoto).done(function (){
        setTimeout(function () {
            photoBig.fadeIn(800);
        }, 800);
    });

    $.when(dfdTitle).done(function (){
        $('.album').removeClass('album_visibility_hidden');
    });
});

    var photoThumb = $('.box__mini');
    photoThumb.click(function() {
        var photoBig = $('.box__photo-item img'),
            photoThumb = $('.box__mini');
            _this = $(this);

        if (photoBig.attr('src') !== $(this).attr('data')) {
            photoBig.eq(0).animate({'left': '-'+photoBig.width()}, speed, 'swing');
            setTimeout(function () {
                photoBig.remove();
                $('<img>')
                    .hide()
                    .attr('src', _this.attr('data'))
                    .appendTo('.box__photo-item')
                    .load(function() {
                        $(this)
                            .animate({'right': '-'+$(this).width()}, 0)
                            .css({ 'margin-top': photoWrap.height()/2-$(this).height()/2 })
                            .show()
                            .animate({'right': photoWrap.width()/2-$(this).width()/2}, speed, 'swing');
                    });

                $(window).resize(function() {
                    photoBig = $('.box__photo-item img');
                    photoWrap.css('height', $(window).height());
                    photoBig.css({
                        'margin-top': photoWrap.height()/2-photoBig.height()/2,
                        'right': photoWrap.width()/2-photoBig.width()/2
                        });
                });
            }, speed);
        }
        photoThumb.removeClass('box__mini_state_active');
        $(this).addClass('box__mini_state_active');
    });

    $('.box__thumb-arrow').click(function() {
        if( $(this).hasClass('box__thumb-arrow_direction_right') ) {
            scrollLength = scrollLength + 100;
        } else {
            scrollLength = scrollLength - 100;
        }
            scrollBar.animate({'scrollLeft': '+'+scrollLength}, speed);
    });
});