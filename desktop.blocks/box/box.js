$(function() {

    var photoWrap = $('.box__photo-wrapper'),
        photoBig = $('.box__photo-item img'),
        activePhoto = $('.full-photo_state_active'),
        photoThumb = $('.box__mini'),
        dfdTitle = $.Deferred(),
        album = $('.album'),
        scrollBar = $('.box__thumbs-list'),
        progressbar = $('.progressbar__loading'),
        loading = $('.loading'),
        counterPhotos = $('.album__current-photo'),
        autoplay = $('.autoplay'),
        setActive = 0,
<<<<<<< HEAD
        speed = 450,
        scrollLength = 0;
=======
        activeImg = $('.stateActive');
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551

    function alignPhoto(param) {
        photoWrap.css('height', $(window).height());
        param.css({
            'margin-top': photoWrap.height()/2 - param.height()/2,
            'left': photoWrap.width()/2 - param.width()/2
            });
    }

    $(window).load(function() {
        progressbar.text('Всё готово!');
<<<<<<< HEAD
        setTimeout(function () {
           $('.progressbar').fadeOut(800);
           loading.addClass('loading_visibility_hidden');
        }, 800);
=======
            setTimeout(function () {
               $('.progressbar').fadeOut(800);
               loader.hide();
            }, 1000);
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551
    });

    function scrollItems(elem, length) {
        ($(elem).hasClass('box__thumb-arrow_direction_right')) ?
            scrollLength += length : scrollLength -= length;
            scrollBar.animate({'scrollLeft': '+' + scrollLength}, speed);
    }

<<<<<<< HEAD
    function slider(param) {
            var boxControlRight = (param.hasClass('box__control_direction_right')),
                activeFullImg = $('.full-photo_state_active');

                if(!boxControlRight) {
=======
        function disableArrow() {
            if ( $('.box__mini_state_active').index() === 0 ) {
                $('.box__control_direction_left').addClass('box__control_visibility_hidden');
            }
            else if ( $('.box__mini_state_active').index() === 99 ) {
                $('.box__control_direction_right').addClass('box__control_visibility_hidden');
            }
            else {
                $('.box__control_direction_left, .box__control_direction_right').removeClass('box__control_visibility_hidden');            }
        }

    function slider(param) {
            var photoBig = $('.box__photo-item img'),
                boxCtrlRight = (param.hasClass('box__control_direction_right'));

                if(boxCtrlRight) {
                    param.addClass('box__control_disabled_yes');
                        activeImg.css({
                                'right': '',
                                'left':  photoWrap.width()/2 - activeImg.width()/2
                            });
                } else {
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551
                    $('.box__mini').addClass('box__mini_disabled_yes');
                }
                boxControlRight && param.addClass('box__control_disabled_yes');

<<<<<<< HEAD
                    activeFullImg.css({
                            'right': '',
                            'left':  photoWrap.width()/2 - activeFullImg.width()/2
                        });

                var _thisHash = boxControlRight ?
=======
                var _thisHash = boxCtrlRight ?
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551
                    $('.box__mini_state_active').next().attr('hash') :
                    param.attr('hash');
                    setActive = Number(_thisHash);
                    localStorage.setItem('active', setActive);

                    counterPhotos.text(setActive + 1);

<<<<<<< HEAD
                boxControlRight && $('.box__mini_state_active')
=======
                boxCtrlRight && $('.box__mini_state_active')
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551
                                .removeClass('box__mini_state_active')
                                .next()
                                .addClass('box__mini_state_active');

<<<<<<< HEAD
            if (activeFullImg.attr('id') !== _thisHash) {
                    activeFullImg = $('.full-photo_state_active');

                activeFullImg.animate({'left': '-' + activeFullImg.width()}, speed);
                    setTimeout(function() {
                        activeFullImg.removeAttr('style').removeAttr('class');
=======
                var newActiveImg = $('.stateActive');
            if (newActiveImg.attr('id') !== _thisHash) {

                newActiveImg.animate({'left': '-' + newActiveImg.width()}, speed);
                    setTimeout(function() {
                        newActiveImg.removeAttr('style').removeAttr('class');
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551
                    }, speed + 50);

                    activePhoto = $('.box__photo-item ').find('#'+_thisHash);
                    activePhoto
                        .addClass('full-photo_state_active')
                        .css({
                            'margin-top': photoWrap.height()/2 - activePhoto.height()/2,
                            'right': '-'+activePhoto.width()+'px'
                        })
                        .show()
                        .animate({'right': photoWrap.width()/2 - activePhoto.width()/2}, speed);

                    setTimeout(function() {
                            activePhoto.css({
                                'right': '',
                                'left':  photoWrap.width()/2 - activePhoto.width()/2
                            });
                    }, speed);

                $(window).resize(function(){
                    alignPhoto(activePhoto);
                });

<<<<<<< HEAD
                if(!boxControlRight) {
=======
                if(!boxCtrlRight) {
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551
                    photoThumb.removeClass('box__mini_state_active');
                    param.addClass('box__mini_state_active');
                }
            }

            setTimeout(function() {
<<<<<<< HEAD
                boxControlRight ? param.removeClass('box__control_disabled_yes') :
                               photoThumb.removeClass('box__mini_disabled_yes');
=======
                boxCtrlRight ? param.removeClass('box__control_disabled_yes') :
                               $('.box__mini').removeClass('box__mini_disabled_yes');
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551
            }, speed);
            disableArrow();
        }

<<<<<<< HEAD
        function disableArrow() {
            if ( $('.box__mini_state_active').index() === 0 ) {
                $('.box__control_direction_left').addClass('box__control_visibility_hidden');
            }
            else if ( $('.box__mini_state_active').index() === 99 ) {
                $('.box__control_direction_right').addClass('box__control_visibility_hidden');
            }
            else {
                $('.box__control_direction_left, .box__control_direction_right').removeClass('box__control_visibility_hidden');
            }
        }

        $('.box__control_direction_right').on('click', function(){
=======
    $('.box__control_direction_right').on('click', function(){
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551
            var controlRight = $(this);
            if(!controlRight.hasClass('box__control_disabled_yes')) {
                slider($(this));
            }
        });

        $('.box__control_direction_left').on('click', function(){
            var controlLeft = $(this),
                activeFullImg = $('.full-photo_state_active');

        if(!controlLeft.hasClass('box__control_disabled_yes')) {
                controlLeft.addClass('box__control_disabled_yes');

<<<<<<< HEAD
                activeFullImg.css({
                            'left': '',
                            'right':  photoWrap.width()/2 - activeFullImg.width()/2
                        });
=======
            controlLeft.addClass('box__control_disabled_yes');
            activeImg.css({
                        'left': '',
                        'right':  photoWrap.width()/2 - activeImg.width()/2
                    });
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551

            var _thisHash = $('.box__mini_state_active').prev().attr('hash');

                setActive = Number(_thisHash);
                localStorage.setItem('active', setActive);

                counterPhotos.text(setActive + 1);

                $('.box__mini_state_active')
                    .removeClass('box__mini_state_active')
                    .prev()
                    .addClass('box__mini_state_active');

<<<<<<< HEAD
            if ($('.full-photo_state_active').attr('id') !== _thisHash) {
                    activeFullImg = $('.full-photo_state_active');

                    activeFullImg.animate({'right': '-' + activeFullImg.width()}, speed);
                    setTimeout(function() {
                        activeFullImg.removeAttr('style').removeAttr('class');
                    }, speed + 50);

                    activePhoto = $('.box__photo-item ').find('#'+_thisHash);
                    activePhoto
                        .addClass('full-photo_state_active')
                        .css({
                            'margin-top': photoWrap.height()/2 - activePhoto.height()/2,
                            'left': '-'+activePhoto.width()+'px'
                        })
                        .show()
                        .animate({'left': photoWrap.width()/2 - activePhoto.width()/2}, speed);

                    setTimeout(function() {
                            activePhoto.css({
                                'left': '',
                                'right':  photoWrap.width()/2 - activePhoto.width()/2
                            });
                    }, speed);
                }
=======
            var newActiveImg = $('.stateActive');

            if (newActiveImg.attr('id') !== _thisHash) {

                newActiveImg.animate({'right': '-' + newActiveImg.width()}, speed);
                setTimeout(function() {
                    newActiveImg.removeAttr('style').removeAttr('class');
                }, speed + 50);
                activePhoto = $('.box__photo-item ').find('#'+_thisHash);
                activePhoto
                    .addClass('stateActive')
                    .css({
                        'margin-top': photoWrap.height()/2 - activePhoto.height()/2,
                        'left': '-'+activePhoto.width()+'px'
                    })
                    .show()
                    .animate({'left': photoWrap.width()/2 - activePhoto.width()/2}, speed);
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551

                setTimeout(function() {
                    controlLeft.removeClass('box__control_disabled_yes');
                }, speed);
                disableArrow();
            }
        });

<<<<<<< HEAD
    $.getJSON('http://api-fotki.yandex.ru/api/users/aig1001/album/63684/photos/?format=json&callback=?', function (data){
=======
function getAllPhotos(url) {
    $.getJSON(url, function (data){
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551

        (function getTitle() {
            $('.album__title-name').text(data.title);
            $('.album__count-photos').text(' ' + data.entries.length);

            return dfdTitle.resolve();
        })();

        $.when(dfdTitle).done(function(){
            $('.album').removeClass('album_visibility_hidden');
        });

        var itemActive = localStorage.getItem('active');
<<<<<<< HEAD
        itemActive == null && (itemActive = 0);
=======
        if( itemActive == null ) { itemActive = 0; }
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551

        counterPhotos.text(Number(itemActive) + 1);

        (function getThumbPhotos() {
            for (var i = 0; i < data.entries.length; i++) {
                $('<div class="box__mini">')
                    .attr({
                        hash: i,
                        title: data.entries[i].title
                    })
                    .css('background-image', 'url(' +data.entries[i].img.XS.href+ ')')
                    .appendTo('.box__thumbs-list');
            }
            photoThumb = $('.box__mini');
            photoThumb.eq(itemActive).addClass('box__mini_state_active');
<<<<<<< HEAD
=======

            return photoThumb;
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551
        })();

        (function getFullPhotos() {
            for (var i = 0; i < data.entries.length; i++) {
                $('<img>')
                    .attr({
                        id: i,
                        src: data.entries[i].img.XL.href
                    })
                    .appendTo('.box__photo-item');
            }
<<<<<<< HEAD
            var photoBigActive = $('.box__photo-item #'+itemActive);
            photoBigActive.load(function() {
                     $(this).fadeIn(600).addClass('full-photo_state_active');

                     alignPhoto($(this));
=======
            photoBig = $('.box__photo-item #'+itemActive);
            photoBig.load(function() {
                    $(this).fadeIn(600).addClass('stateActive');
                     alignPhoto($(this));

>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551
                     disableArrow();
                     autoplay.fadeIn(400);
                });
            $(window).resize(function() {
<<<<<<< HEAD
                alignPhoto(photoBigActive);
=======
                alignPhoto(photoBig);
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551
            });

        })();

        photoThumb.on('click', function(){
            if(!photoThumb.hasClass('box__mini_disabled_yes')) {
                slider($(this));
            }
        });

        $('.box__photo-item img').on('click', function(){
            if ($('.box__mini_state_active').index() === data.entries.length - 1) {
                return false;
            }
            $('.box__control_direction_right').trigger('click');
        });

        autoplay.on('click', function(){
            $(this).toggleClass('autoplay_checked_yes');

            if ($(this).hasClass('autoplay_checked_yes')) {
                (function autoPlay(){
                    if ($('.box__mini_state_active').index() === data.entries.length - 1) {
                        autoplay.removeClass('autoplay_checked_yes');
                        return false;
                    }
                    $('.box__control_direction_right').trigger('click',[true]);
                    timeOut = setTimeout(autoPlay, 3000);
                })();
            } else {
                clearTimeout(timeOut);
            }
        });

    });
<<<<<<< HEAD
=======
}
getAllPhotos('http://api-fotki.yandex.ru/api/users/aig1001/album/63684/photos/?format=json&callback=?');
>>>>>>> 5233f660ad938038140f8b50fb449e5632cdc551

    $('.box__thumbs-list').on('mousewheel', function(e, delta) {
        this.scrollLeft -= (delta * 100);
        e.preventDefault();
    });

    $('.box__thumb-arrow').on('click', function(){
        scrollItems(this, 154);
    });
});