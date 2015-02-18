$(document).ready(function() {

    function Visits() {
        this.total = 0;
    }

    Visits.prototype = {
        getFromLocalStorage: function() {
            this.total = (localStorage["numVisits"]) ? localStorage["numVisits"] : 0;
            return this.total;
        },

        getFromCookie: function() {
            var numVisits = 0;

            if ( cookie.match(/visited=\d*/i) ) {
                cookie.replace(/(visited)=(\d)*/i, function(match, p1, p2) {
                    numVisits = p2;
                });
            }

            this.total = numVisits;

            return this.total;
        },

        upateLocalStorage: function(value) {
            localStorage["numVisits"] = value;
        },

        updateCookie: function(value) {
            document.cookie = 'visited=' + value;
        },

        getVisits: function() {
           return (Modernizr.localstorage) ? this.getFromLocalStorage() : this.getFromCookie();
        }
    };
    
    // Initiate visits object and get the number of times the user has visited this page
    var visits = new Visits(),
    numOfVisits = visits.getVisits();

    //Universal timeline object
    var s = new TimelineMax(),
        $body = $("body"),
        $mobileMenuIcon = $(".mobileNav_menu"),
        mobileMenuState = "close", //Current state of menu: close or open
        $mobileList = $(".mobileNav .navList"); //Mobile nav list

    var $teaser = $(".teaser"), // Teaser container on homepage
        $teaserElements = $(".teaser").find("div"), //Cache all teaser elements
        $t1 = $teaser.find(" > div:eq(0)"),
        $t2 = $teaser.find(" > div:eq(1)"),
        $t3 = $teaser.find(" > div:eq(2)"),
        $t4 = $teaser.find(" > div:eq(3)"),

        $menu = $(".nav ul"),
        $menuItems = $menu.find("li:not('.logo')"), //
        $logo = $menu.find('.logo');

    //Hide all teaser elements
    s.set($teaserElements, {
        autoAlpha: 0
    });

    //Make Teaser Element visible to avoid flicker
    s.set($(".teaser"), {autoAlpha: 1});

    var animateSlide1 = function() {
        //TimelineMax instance
        var s1 = new TimelineMax({
            smoothChildTiming: true,
            align: "sequence"
        });
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
        s.to($t1, 0.01, {
            autoAlpha: 1
        });

        //Fade in character elements
        s.staggerTo($t1Spans, 1.6, {
            autoAlpha: 1,
            rotationY: 0,
            x: 0,
            force3D: true
        }, 0.1);

        //Fade out character elemenets
        s.staggerTo($t1Spans, 1, {
            autoAlpha: 0,
            rotationX: "45deg",
            delay: 0.3,
            force3D: true
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
        s2.to($t2, 0.01, {
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
            delay: 1
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
        $t3words = $t3.find("span:not(.word1)").lettering();

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
        s3.to($t3, 0.01, {
            autoAlpha: 1
        });

        //Fade in character elements
        s3.staggerTo([$t31Spans, $t32Spans], 0.6, {
            autoAlpha: 1,
            rotationY: 0,
            y: 0,
            force3D: true,
            ease: Bounce.easeOut
        }, 0.01);

        s3.staggerTo($t3Spans, 1, {
            autoAlpha: 1,
            rotationY: 0,
            x: 0,
            force3D: true
        }, 0.1);


        //Fade out charater elemenets
        s3.staggerTo($t3Spans, 0.6, {
            autoAlpha: 0,
            rotationX: "45deg",
            delay: 0.8
        }, -0.1);

        s3.staggerTo([$t31Spans, $t32Spans], 0.6, {
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

        s4.set($bg, {scale: 1.2});

        s4.to($bg, 3, {
            autoAlpha: 1,
            rotationY: 0,
            x: 0,
            scale: 1,
            force3D: true,
            ease: Power2.easeOut
        });

        animateAnchorImage();


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

    var animationSkip = function() {
        //TimelineMax instance
        var s4 = new TimelineMax({
                smoothChildTiming: true,
                align: "sequence"
            }),
            $bg = $(".the-anchor-bg");

        s4.timeScale(2);

        //Hide 'He tagline'
        s4.set($t4.find("h1"), {
            autoAlpha: 0
        });

        //Show first Teaser Element
        s4.to($t4, 0.3, {
            autoAlpha: 1
        });

        animateAnchorImage();

        //Fade in character elements
        s4.set($bg, {scale: 1.2})
        .to($bg, 5, {
            autoAlpha: 1,
            rotationY: 0,
            x: 0,
            scale: 1,
            force3D: true,
            ease: Power2.easeOut
        });

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

        a.fromTo($logo, 1, {
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

        a.staggerFromTo($menuItems, 1, {
            autoAlpha: 0,
            y: "20%",
            ease: Expo.easeIn
        }, {
            autoAlpha: 1,
            y: 0,
            ease: Sine.easeOut
        }, 0.1);
    };

    //Animate all items on the contact page
    var animateContact = function() {
        var c = new TimelineMax(),
            contact = $(".contact_info"),
            divs = contact.find("div"),
            ps = contact.find("p"),
            as = contact.find("a");

        c.set(contact, {
            perspective: 1000,
            autoAlpha: 1
        });

        c.staggerFrom([divs, contact.find("h1"), contact.find("h3"), ps, as], 1, {
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

        p.fromTo($path, 2, {"stroke-dasharray": -(pathLength), "stroke-dashoffset": pathLength, stroke: "#000", fill: "transparent"}, {"stroke-dasharray": pathLength, "stroke-dashoffset": 0, stroke: "#fff", onComplete: function(){
            p.to($path, 0.6, {fill: "#fff"});
        }});
    };

    var animateMobileMenu = function($state) {
        var $mobileListItems = $mobileList.find("li"),
            $navList = $(".navList"),
            mt = new TimelineMax({
                smoothChildTiming: true,
                align: "sequence"
            });

            if ($state == "open") {
                mt.to($mobileList, 0.3, {height: "100%", force3D: true});
                mt.staggerFromTo($mobileListItems, 0.6, {y: "100%", autoAlpha: 0}, {y: 0, autoAlpha: 1}, 0.1);
            } else {
                mt.staggerTo($mobileListItems, 0.6, {autoAlpha: 0},  0.1);
                mt.to($mobileList, 0.3, {height: 0 , force3D: true});
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

    //Cache See element container
    $see_content = $(".see_content");

    //Attach the Light Gallery plugin if 'see_content' class if it exists on page
    if ($see_content.length > 0) {
        $(".see_content").lightGallery();

        $img = $(".see_content img");
        $img.unveil('1000');
    }

    if ($body.hasClass('body')) {
        if ( numOfVisits > 0 && numOfVisits < 10 ) {
            animationSkip();
            visits.upateLocalStorage(parseInt(numOfVisits) + 1);
        } else if (numOfVisits > 10){
            animationSkip();
            visits.upateLocalStorage(0);
        } else {
            visits.upateLocalStorage(parseInt(numOfVisits) + 1);
            animateSlide1();
        }
    } else {
        animateMenu();
    }

    animateContact();

   (function(){
        $bg = "";
        if ($(".what_bg").length > 0) {
            $bg = $(".what_bg");
        } 
        if ($(".meet_bg").length > 0) {
            $bg = $(".meet_bg");
        }

        if ( Modernizr.mq('only all and (max-width: 560px)') ) {
            $window = $(window);

            $window.on('scroll', function() {
                if ($window.scrollTop() === 0) {
                    TweenLite.to($bg, 1, {opacity: 1});
                }

               if ($window.scrollTop() > 100) {
                TweenLite.to($bg, 1, {opacity: 0.2});
               }
            }); 
       }
   }());

});
