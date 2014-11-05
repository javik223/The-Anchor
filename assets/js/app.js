$(document).ready(function() {
    //Universal timeline tracker
    var s = new TimelineMax(),
        $body = $("body"),
        $mobileMenuIcon = $(".mobileNav_menu"),
        mobileMenuState = "close",
        $mobileList = $(".mobileNav .navList");

    var $teaser = $(".teaser"),
        $teaserElements = $(".teaser").find("div"),
        $t1 = $teaser.find(" > div:eq(0)"),
        $t2 = $teaser.find(" > div:eq(1)"),
        $t3 = $teaser.find(" > div:eq(2)"),
        $t4 = $teaser.find(" > div:eq(3)"),

        $menu = $(".nav ul"),
        $menuItems = $menu.find("li:not('.logo')"),
        $logo = $menu.find('.logo');

    console.log($menuItems);

    //Hide all teaser elements
    s.set($teaserElements, {
        autoAlpha: 0
    });
    s.set($mobileList, {display: "block", autoAlpha: "0"});

    var animateSlide1 = function() {
        //TimelineMax instance
        var s1 = new TimelineMax({
            smoothChildTiming: true,
            align: "sequence"
        });
        s1.set($(".teaser"), {autoAlpha: 1});
        //Separate heading text into words
        $t1.find("h1").lettering('words');

        //Separate every word into characters;
        $t1.find("[class^='word']").lettering();

        //Assemble all characters
        $t1Spans = $t1.find("[class^='char']");

        //hide Character Elements
        s1.set($t1Spans, {
            autoAlpha: 0,
            rotationY: "30deg",
            x: "-30%",
            perspective: 4000
        });

        //Show first Teaser Element
        s.to($t1, 0.3, {
            autoAlpha: 1
        });

        //Fade in character elements
        s.staggerTo($t1Spans, 2, {
            autoAlpha: 1,
            rotationY: 0,
            x: 0,
            force3D: true
        }, 0.1);

        //Fade out charater elemenets
        s.staggerTo($t1Spans, 1, {
            autoAlpha: 0,
            rotationX: "45deg",
            delay: 2
        }, -0.1);

        //Hide teaser elemenet
        s.set($t1, {
            autoAlpha: 0,
            onComplete: function() {
                animateSlide2();
            }
        });
    };

    var animateSlide2 = function() {
        //TimelineMax instance
        var s2 = new TimelineMax({
            smoothChildTiming: true,
            align: "sequence"
        });
        //Separate heading text into words
        $t2.find("h1").lettering('words');

        //Separate every word into characters;
        $t2.find("[class^='word']").lettering();

        //Assemble all characters
        $t2Spans = $t2.find("[class^='char']");

        //hide Character Elements
        s2.set($t2Spans, {
            autoAlpha: 0,
            rotationY: "30deg",
            x: "-30%",
            perspective: 4000
        });

        //Show first Teaser Element
        s2.to($t2, 0.3, {
            autoAlpha: 1
        });

        //Fade in character elements
        s2.staggerTo($t2Spans, 2, {
            autoAlpha: 1,
            rotationY: 0,
            x: 0,
            force3D: true
        }, 0.1);

        //Fade out charater elemenets
        s2.staggerTo($t2Spans, 1, {
            autoAlpha: 0,
            rotationX: "45deg",
            delay: 2
        }, -0.1);

        //Hide teaser elemenet
        s2.set($t2, {
            autoAlpha: 0,
            onComplete: function() {
                animateSlide3();
            }
        });
    };

    var animateSlide3 = function() {
        //TimelineMax instance
        var s3 = new TimelineMax({
            smoothChildTiming: true,
            align: "sequence"
        });
        //Separate heading text into words
        $t3.find("h1").lettering('words');

        //Separate every word into characters;
        $t3words = $t3.find("span:not(.word1, .word2)").lettering();

        $t31 = $t3.find(".word1");
        $t31.lettering();
        $t31Spans = $t31.find("span");

        $t32 = $t3.find(".word2");
        $t32.lettering();
        $t32Spans = $t32.find("span");

        //Assemble all characters
        $t3Spans = $t3words.find("[class^='char']");

        //hide Character Elements
        s3.set([$t31Spans, $t32Spans], {
            autoAlpha: 0,
            rotationY: "30deg",
            y: "-50%",
            perspective: 4000
        });
        s3.set($t3Spans, {
            autoAlpha: 0,
            rotationY: "30deg",
            x: "-30%",
            perspective: 4000
        });


        //Show first Teaser Element
        s3.to($t3, 0.3, {
            autoAlpha: 1
        });

        //Fade in character elements
        s3.staggerTo([$t31Spans, $t32Spans], 1, {
            autoAlpha: 1,
            rotationY: 0,
            y: 0,
            force3D: true,
            ease: Bounce.easeOut
        }, 0.01);

        s3.staggerTo($t3Spans, 2, {
            autoAlpha: 1,
            rotationY: 0,
            x: 0,
            force3D: true
        }, 0.1);


        //Fade out charater elemenets
        s3.staggerTo($t3Spans, 1, {
            autoAlpha: 0,
            rotationX: "45deg",
            delay: 4
        }, -0.1);

        s3.staggerTo([$t31Spans, $t32Spans], 1, {
            autoAlpha: 0,
            rotationX: "45deg"
        }, -0.1);

        //Hide teaser elemenet
        s3.set($t3, {
            autoAlpha: 0,
            onComplete: function() {
                animateSlide4();
            }
        });
    };

    var animateSlide4 = function() {
        //TimelineMax instance
        var s4 = new TimelineMax({
                smoothChildTiming: true,
                align: "sequence"
            }),
            $bg = $(".the-anchor-bg");
        //Separate heading text into words
        $t4.find("h1").lettering('words');

        //Separate every word into characters;
        $t4.find("[class^='word']").lettering();

        //Assemble all characters
        $t4Spans = $t4.find("[class^='char']");

        //hide Character Elements
        s4.set($t4Spans, {
            autoAlpha: 0,
            rotationY: "30deg",
            x: "-30%",
            perspective: 4000
        });

        //Show first Teaser Element
        s4.to($t4, 0.3, {
            autoAlpha: 1
        });

        //Fade in character elements
        s4.staggerTo($t4Spans, 2, {
            autoAlpha: 1,
            rotationY: 0,
            x: 0,
            force3D: true
        }, 0.1);

        animateAnchorImage();

        //Fade in character elements
        s4.to($bg, 5, {
            autoAlpha: 1,
            rotationY: 0,
            x: 0,
            force3D: true
        });

        //Fade out charater elemenets
        s4.staggerTo($t4Spans, 0.6, {
            autoAlpha: 0,
            rotationX: "45deg"
        }, -0.1);

        //Hide teaser elemenet
        s4.set($t4, {
            autoAlpha: 1,
            onComplete: function() {
                animateMenu();
            }
        });
    };

    var animateMenu = function() {
        var a = new TimelineMax();

        a.fromTo($logo, 0.6, {
            autoAlpha: 0,
            scale: 0,
            y: "20%"
        }, {
            autoAlpha: 1,
            scale: 1,
            force3D: true,
            y: 0,
            ease: Back.easeOut
        });

        a.staggerFromTo($menuItems, 4, {
            autoAlpha: 0,
            y: "20%",
            ease: Expo.easeIn
        }, {
            autoAlpha: 1,
            y: 0,
            ease: Sine.easeOut
        }, 0.3);
    };

    var animateContact = function() {
        var c = new TimelineMax(),
            contact = $(".contact_info"),
            divs = contact.find("div"),
            ps = contact.find("p"),
            as = contact.find("as");
        headers = contact.find("h1, h2, h3, h4, h5, h6");

        c.set(contact, {
            perspective: 1000
        });

        c.staggerFrom([divs, contact.find("h1"), contact.find("h3"), contact.find("a:eq(0)"), contact.find("a:eq(1)")], 1, {
            y: "100%",
            autoAlpha: 0,
            z: 0,
            rotationY: "15deg",
            rotationX: "15deg",
            force3D: true,
            scale: 0.9,
            ease: Sine.ease
        }, 1);
    };

    var animateAnchorImage = function() {
        var $path = $(".path"),
            p = new TimelineMax(),
            $textImage = $(".the-anchor-text-image"),
            pathLength = ($path.length > 0)? document.querySelector('.path').getTotalLength() : 0;

             //Fade in character elements
            p.to($textImage, 0.6, {
                autoAlpha: 1,
                rotationY: 0,
                x: 0,
                force3D: true
            });

        p.fromTo($path, 8, {"stroke-dasharray": -(pathLength), "stroke-dashoffset": pathLength, stroke: "#000", fill: "transparent"}, {"stroke-dasharray": pathLength, "stroke-dashoffset": 0, stroke: "#fff", onComplete: function(){
            p.to($path, 1, {fill: "#fff"});
        }});
    };

    var animateMobileMenu = function($state) {
        var $mobileListItems = $mobileList.find("li"),
            mt = new TimelineMax();

            if ($state == "open") {
                mt.to($mobileList, 1, {autoAlpha: 1});
                mt.staggerFromTo($mobileListItems, 1, {y: "100%", autoAlpha: 0}, {y: 0, autoAlpha: 1}, 0.3);
            } else {
               mt.staggerFromTo($mobileListItems, 0.6, {autoAlpha: 1}, {autoAlpha: 0}, 0.1);
                mt.to($mobileList, 0.6, {autoAlpha: 0});
            }
    };

    $mobileMenuIcon.on('click', function() {
        if (mobileMenuState == "close") {
            animateMobileMenu("open");
            mobileMenuState = "open";
        } else {
            animateMobileMenu("close");
            mobileMenuState = "close";
        }
    });

    $(".see_content").lightGallery();

    if ($body.hasClass('body')) {
        animateSlide1();
    } else {
        animateMenu();
    }

    animateContact();
});
