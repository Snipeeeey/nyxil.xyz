/*

Credits:
    - Lummit - https://obnoxious.club/ | https://github.com/Lumm1t/ | Discord: Lummit#0201
    - expl0it, shellcode.team
    - Steam (emoticon: https://steamcommunity-a.akamaihd.net/economy/emoticon/mgh_17)
    - Trollface image (http://www.rw-designer.com/icon-image/7835-256x256x32.png)
    - Tumblr images/icons:
        a) https://68.media.tumblr.com/730ba51e7f6b0203e023deeb0db8367b/tumblr_osgbbiLXWV1suieauo1_500.jpg
        b) https://68.media.tumblr.com/8436227895295acecdea170b612fb766/tumblr_nxgg5bYqm81rclv0wo1_500.jpg
        c) http://images.neon-sign.org/l-m/rose-flower-love-neon-sign.jpg
        d) https://media.istockphoto.com/vectors/rose-neon-sign-vector-id1088857104?k=6&m=1088857104&s=612x612&w=0&h=ZJCYow5i8noF6nTGHEd6b2bbe9X6rVx4cLDoceexAec=
        e) https://image.freepik.com/free-vector/polygonal-geometric-rose-neon-sign_1262-19626.jpg
        f) https://68.media.tumblr.com/49394d5aa66d4c7ea4ffebda38c6be7e/tumblr_orv2rd9eVC1rgewhto1_400.gif
        g) https://ih1.redbubble.net/image.268210271.5200/sticker,375x360-bg,ffffff.u2.png
        h) http://picture-cdn.wheretoget.it/ot63b4-l-610x610-shirt-rose-tumblr-grunge-grunge+t+shirt-clothes-t+shirt-tumblr+shirt-dead+roses-black+bear-soft+grunge-soft-soft+ghetto-ghetto-chill-cute-white-red-red+roses-white+tee-pale-sad-dar.jpg

Thanks for:
    - Google
    - StackOverflow
    - jQuery
    - jQuery Marquee
    - animate.css
    - typed.js

GitHub: https://github.com/Lumm1t/obnoxious.club

*/

'use strict';

const ipgeolocation = 'https://api.ipgeolocation.io/ipgeo?apiKey=9b55ed62f1424c69940001ba42c8e5a4';

const timeouts = [];

const mobileAndTabletCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    $(document).ready(function () {
        var links = [
            {
                name: 'This is not a costume, its a uniform, its who I am and you will respect it.                     ',
                link: ''
            }
        ];
         
        for (var i in links) {
            var link = links[i];

            $('#marquee').append('<a href="' + link.link + '" target="_BLANK">' + link.name + '</a>');

            link = $('#marquee').children('a').last();
        }

        if (window.mobileAndTabletCheck()) {
            $("#background").replaceWith('<div id="background" style="background-image: url(../images/mobile-background.jpg);"></div>');

            app.shouldIgnoreVideo = true;
        } 

        app.titleChanger();
        app.iconChanger([
        ]);
    });

    if ($.cookie('videoTime')) {
        app.videoElement.currentTime = $.cookie('videoTime');
        app.audioElement.currentTime = $.cookie('videoTime');
    }

    document.addEventListener('contextmenu', function (event) { 
        event.preventDefault() 
    });

    $(window).on('keydown', function () {
        if (event.keyCode == 123)
            return false;
        else if (event.ctrlKey && event.shiftKey && event.keyCode == 73)
            return false;
        else if (event.ctrlKey && event.keyCode == 73)
            return false;
        else if (event.ctrlKey && event.shiftKey && event.keyCode == 74)
            return false;
        else if (event.ctrlKey && event.keyCode == 74)
            return false;
        });

    document.body.onkeyup = function (e) {
        if (e.keyCode == 32 && app.skippedIntro)
        {
            if (app.backgroundToggler)
            {
                app.videoElement.play();
                app.audioElement.play();
            }
            else
            {
                app.videoElement.pause();
                app.audioElement.pause();
            }

            return app.backgroundToggler = !app.backgroundToggler;
        }
    }

    $('html').on('contextmenu', function (event) {
        var img = document.createElement("img");
        img.src = "https://www.rw-designer.com/icon-image/7835-256x256x32.png"; 
        img.width = 64;
        img.height = 64;
        img.alt = "P1RATE#3976";
        img.style = "position: absolute; left: " + event.pageX + "px; top: " + event.pageY + "px; z-index: 10";
        img.className = "troll" + ( (app.skippedIntro) ? "" : " trollface-light" );

        document.body.appendChild(img);
    });

    setInterval( function () {
        $(".troll").remove();
    }, 600);

    $(".skip").click(function () {
        skipIntro();
    });

    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () 
            {
                $(this).removeClass('animated ' + animationName);
            });
            return this;
        }
    });

    var writeLine = function (text, speed, timeout, callback) {
        timeout = (typeof timeout === "number") ? timeout : [0, callback = timeout];

        setTimeout(function () {
            var typed = new Typed("#line" + ((app.id !== 2) ? ++app.id : app.id += 2), 
            {
                strings: text,
                typeSpeed: speed,
                onComplete: callback
            });
        }, timeout);
    };

(function () {
        $.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=f4540df21a2e434fbb6f8ccf0d08b2dc', function (data) {

            writeLine(["Authenticating...", "Granting access to <span style='font-size: 14px; color: #06d;'>[unknown]</span>..."], 30, function () {

                if (app.skippedIntro)
                	return;

                clearCursor();

                var usernames = ["user", "dude"];

                writeLine(["Access granted! <span style='font-size: 14px; color: #0f0;'>[success]</span>", "Welcome back, <i style='color: #0f0'>" +  ((data.ip) ? data.ip : usernames[Math.floor(Math.random()*usernames.length)]) 
                    + "</i>! By the way, nice to see someone from " + ((data.country_name) ? data.country_name : 'your country') + " here!"], 30, 500, function () {

                    if (app.skippedIntro)
                        return;

                    clearCursor();

                    writeLine(["<i style='color: #F62459'>P1RATE#3976</i>"], 120, 500, function () {

                        timeouts.push(setTimeout(function () {

                            if (app.skippedIntro)
                                return;

                            clearCursor();

                            setTimeout(function () {

                                skipIntro();

                            }, 500);

                        }, 1000));

                    });

                });

            });

        });

    })()

    var skipIntro = function () {

        if (app.skippedIntro)
            return;

        app.skippedIntro = true;

        timeouts.forEach(function (timeout) {
            clearTimeout(timeout);
        });

        $(".top-right").remove();

        $('#main').fadeOut(100, function () {
            
            $("#main").remove();

            $('#marquee').marquee({
                duration: 15000,
                gap: 420,
                delayBeforeStart: 1000,
                direction: 'left',
                duplicated: true
            });

            setTimeout(function () {
                $('.brand-header').animateCss(app.effects[ Math.floor(Math.random() * app.effects.length) ]);
            }, 200);

            setTimeout(function () {
                var typed = new Typed("#brand", 
                {
                    strings: app.brandDescription,
                    typeSpeed: 40,
                    onComplete: function () {
                        clearCursor()
                    }
                });
            }, 1350);

            setTimeout(function () {
                if (!app.shouldIgnoreVideo) {
                    app.videoElement.play();
                    app.audioElement.play();
                }

                app.videoElement.addEventListener("timeupdate", function () {
                    $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
                }, false);

                $('.marquee-container').css('visibility','visible').hide().fadeIn(100);

                $('.marquee-container').animateCss('zoomIn');

                $('.container').fadeIn();

                $('.background').fadeIn(200, function () {
                    if (!app.shouldIgnoreVideo)
                        $("#audio").animate({volume: app.musicVolume}, app.musicFadeIn);
                });
            }, 200);
        });
     };

    var clearCursor = function () {
        return $("span").siblings(".typed-cursor").css("opacity", "0");
    }
})()
