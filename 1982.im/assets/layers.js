var imgList = [];
$.extend({
  preload: function (e, c) {
    var b = $.extend({
      init: function (f, g) {},
      loaded: function (f, g, h) {},
      loaded_all: function (f, g) {}
    }, c);
    var d = e.length;
    var a = 0;
    b.init(0, d);
    for (i = 0; i < e.length; i++) {
      imgList.push($("<img />").load(function () {
        a++;
        b.loaded(this, a, d);
        if (a == d) {
          b.loaded_all(a, d)
        }
      }).attr("src", e[i]))
    }
  }
});
$(document).ready(function () {
  var V = $("#fullInner").attr("name");
  var ao = $(window).height();
  var ag = $(window).width();
  var aI = 0;
  var ai = 0;
  var al = $(".projectSlideHolder:eq(0) .media").length;
  var aL = $(".project").length;
  var aK = 0;
  var n = 0;
  var f = 0;
  var g = 0;
  var aq = paddingFix * 2;
  var M = false;
  var af = "";
  var Z = $(".projectSlide:eq(0) img").width();
  var aa = $.getScrollbarWidth();
  var v = $("#full .toggler:eq(0)").outerHeight();
  var J = false;
  var T = $(".toggler:eq(0)").outerWidth();
  var an = $(".counter:eq(0)").outerWidth();
  var u = $(".projectEdit:eq(0)").outerWidth();
  var P = $("#footer").height();
  var ad = $(".project:eq(0)").height();
  var av = new Array();
  $(".image img").each(function (aP) {
    av[aP] = $(this).attr("src")
  });
  var aA = false;

  function q() {
    if (typeof (window.history.pushState) == "function") {
      $.ajax({
        url: af,
        cache: true,
        success: function (aS) {
          $("#belowInfinity").empty();
          var aP = $(aS);
          var aR = aP.find("#fullInner").html();
          var aQ = aP.find("#belowInfinity").html();
          $("#fullInner").append(aR).fadeTo(0, 1, function () {
            j()
          });
          $("#belowInfinity").append(aQ);
          H()
        }
      })
    } else {
      window.location.href = af
    }
  }
  var aB = "";
  var aE = false;
  window.onpopstate = function (aP) {
    if (aE == true) {
      p()
    }
    aE = true
  };

  function Y() {
    var aQ = {
      page: "1"
    };
    var aP = "Title 1";
    if (typeof (window.history.pushState) == "function") {
      history.pushState(aQ, aP, af)
    }
  }
  function p() {
    if (typeof (window.history.pushState) == "function") {
      af = document.location;
      N();
      $.ajax({
        url: "" + af + "",
        cache: true,
        success: function (aS) {
          var aP = $(aS);
          $("#full, #belowInfinity, #vertNavs, #footer").empty();
          var aR = aP.find("#full").html();
          var aQ = aP.find("#belowInfinity").html();
          var aU = aP.find("#vertNavs").html();
          var aT = aP.find("#footer").html();
          aB = aP.find("#title").text();
          $("#full").append(aR);
          $("#belowInfinity").append(aQ);
          $("#vertNavs").append(aU);
          $("#footer").append(aT);
          j();
          ae();
          document.title = aB
        }
      })
    } else {}
  }
  function Q() {
    if (typeof (window.history.pushState) == "function") {
      Y();
      N();
      $.ajax({
        url: af,
        cache: true,
        success: function (aS) {
          var aP = $(aS);
          $("#full, #belowInfinity, #vertNavs, #footer").empty();
          var aR = aP.find("#full").html();
          var aQ = aP.find("#belowInfinity").html();
          var aU = aP.find("#vertNavs").html();
          var aT = aP.find("#footer").html();
          aB = aP.find("#title").text();
          $("#full").append(aR);
          $("#belowInfinity").append(aQ);
          $("#vertNavs").append(aU);
          $("#footer").append(aT);
          j();
          ae();
          document.title = aB
        }
      })
    } else {
      window.location.href = af
    }
  }
  function ae() {
    aE = true;
    ao = $(window).height();
    ag = $(window).width();
    ai = 0;
    v = $("#full .toggler:eq(0)").outerHeight();
    z();
    r();
    aw();
    ah();
    V = $("#fullInner").attr("name");
    aL = $(".project").length;
    aK = 0;
    al = $(".projectSlideHolder:eq(0) .media").length;
    aC();
    e();
    az();
    aF();
    c();
    if (V == "page") {
      aN()
    } else {
      aN();
      O()
    }
    aM();
    L();
    aA = true;
    t()
  }
  function H() {
    aL = $(".project").length;
    aC();
    X();
    z();
    r();
    ah();
    e();
    aA = true;
    t();
    if (infinityScroll == false) {
      aK++;
      R()
    } else {
      B();
      a()
    }
  }
  function aF() {
    if (V == "page") {
      $("#header").css({
        position: "absolute"
      })
    } else {
      $("#header").css({
        position: "fixed"
      })
    }
  }
  var aD = new Array();
  var ax = 0;

  function d() {
    ax = 0;
    $(".projectSlideHolder:eq(" + aK + ") .media").each(function (aP) {
      if (aP < ai && aP > -1) {
        aD[aP] = $(this).width() + imagePadding;
        ax = ax + aD[aP]
      }
    })
  }
  d();

  // 暂时不用播放
  // function z() {
  //   $(".gvideo").gVideo({})
  // }
  // z();

  function ab() {
    $("video").each(function () {
      if ($(this).hasClass("play")) {
        $(this).parent().find(".ghinda-video-controls .ghinda-video-play").trigger("click")
      }
    })
  }
  var U = 0;
  var ac = 0;
  var m = 0;

  function aw() {
    $("video").each(function (aP) {
      ao = $(window).height();
      ag = $(window).width();
      U = $(this).width();
      ac = $(this).height();
      m = $(this).attr("name");
      if ((ao - paddingFix - menuPadding) >= maxHeight) {
        aI = maxHeight;
        myWidth = aI * m;
        $(this).height(aI).width(myWidth)
      } else {
        aI = ao - paddingFix - menuPadding;
        myWidth = aI * m;
        $(this).height(aI).width(myWidth)
      }
    })
  }
  function r() {
    if ((ao - paddingFix - menuPadding) >= maxHeight) {
      aI = maxHeight;
      $(".media, .media img").height(aI);
      $(".fallback").height(aI - (menuPadding * 2));
      $(".projectInfo, .commentsBoxy").height(aI);
      $(".projectBottom, .counter, .toggler, .projectEdit").css({
        "margin-top": "" + aI - (menuPadding * 1) - v + "px"
      });
      $(".projectSeparator").width(ag - menuPadding - menuPadding).css({
        "margin-top": "" + (aI + menuPadding + menuPadding) + "px",
        "margin-left": "" + menuPadding + "px"
      });
      $("#headerInner").width(ag - menuPadding - menuPadding);
      $(".projectSlideHolder, .project").width(ag).height(maxHeight + (menuPadding * 4));
      $("#page, #footerInner").width(ag - (menuPadding * 2));
      belowInfinityHeight = $("#belowInfinity").height();
      $("#footer").css({
        "margin-bottom": "" + ao - paddingFix - menuPadding - maxHeight - belowInfinityHeight + "px"
      })
    } else {
      aI = ao - paddingFix - (menuPadding * 1);
      $(".media, .media img").height(aI);
      $(".fallback").height(aI - (menuPadding * 2));
      $(".projectInfo, .commentsBoxy").height(aI);
      $(".projectBottom, .counter, .toggler, .projectEdit").css({
        "margin-top": "" + aI - (menuPadding * 1) - v + "px"
      });
      $(".projectSeparator").width(ag - menuPadding - menuPadding).css({
        "margin-top": "" + (aI + menuPadding + menuPadding) + "px",
        "margin-left": "" + menuPadding + "px"
      });
      $("#headerInner").width(ag - menuPadding - menuPadding);
      $(".projectSlideHolder, .project").width(ag).height(ao - paddingFix + (menuPadding * 3));
      $("#page, #footerInner").width(ag - (menuPadding * 2));
      belowInfinityHeight = $("#belowInfinity").height();
      $("#footer").css({
        "margin-bottom": "0px"
      })
    }
  }
  r();

  function aJ() {
    setSingleCount = $(".projectSlideHolder:eq(" + aK + ")").attr("name");
    setSingleCount++;
    $(".counter:eq(" + aK + ")").html(setSingleCount + "/" + al)
  }
  aJ();

  function e() {
    $(".project").each(function () {
      var aQ = $(this).find(".media").length;
      var aP = $(this).find(".projectSlideHolder").attr("name");
      aP = parseInt(aP);
      aP++;
      $(this).find(".counter").html("" + aP + "/" + aQ + "")
    })
  }
  e();

  function L() {
    $("#footer").css({
      position: "static"
    });
    footerPosition = $("#footer").position().top;
    if ((ao - (menuPadding * 4)) > footerPosition) {
      $("#footer").css({
        position: "fixed",
        left: "0",
        bottom: "0",
        "z-index": "6000"
      })
    } else {
      $("#footer").css({
        position: "static",
        "margin-top": "" + (menuPadding * 2) + "px"
      })
    }
  }
  L();

  function aC() {
    $(".project").each(function (aP) {
      $(this).attr("id", "project_" + aP + "")
    })
  }
  aC();

  function aO() {
    $(document).bind("keyup", function (aP) {
      if (aP.keyCode == 40 || aP.keyCode == 39 || aP.keyCode == 38 || aP.keyCode == 37) {
        aP.preventDefault();
        if (aP.keyCode == 40) {
          if (aA == true) {
            aG()
          }
        } else {
          if (aP.keyCode == 39) {
            if (aA == true) {
              x()
            }
          } else {
            if (aP.keyCode == 38) {
              if (aA == true) {
                am()
              }
            } else {
              if (aP.keyCode == 37) {
                if (aA == true) {
                  s()
                }
              }
            }
          }
        }
      }
    });
    $(document).bind("keydown", function (aP) {
      if (aP.keyCode == 40 || aP.keyCode == 38 || aP.keyCode == 39 || aP.keyCode == 37) {
        aP.preventDefault()
      }
    })
  }
  aO();

  function aj() {
    $(document).unbind("keyup");
    $(document).unbind("keydown")
  }
  $("input, textarea, select").live("focus", function () {
    aj()
  });
  $("input, textarea, select").live("blur", function () {
    aO()
  });

  function ah() {
    $(".projectInfo").each(function (aP) {
      if ($(this).hasClass("on")) {
        T = $(this).parent().find(".toggler").outerWidth();
        an = $(this).parent().find(".counter").outerWidth();
        u = $(this).parent().find(".projectEdit").outerWidth();
        $(this).parent().find(".projectInfo").animate({
          left: 0
        }, 0, transitionEase, function () {});
        $(this).parent().find(".toggler").html("&#9664; Info").animate({
          left: (menuModulWidth * 2) + (imagePadding * 1) - T
        }, 0, transitionEase, function () {});
        $(this).parent().find(".counter").animate({
          left: (menuModulWidth * 2) + (menuPadding * 2) + imagePadding
        }, 0, transitionEase, function () {});
        $(this).parent().find(".projectEdit").animate({
          left: menuPadding
        }, 0, transitionEase, function () {});
        if ($(this).parent().find(".commentsBoxy").hasClass("on")) {
          $(".projectSlideHolderInner:eq(" + aP + ")").animate({
            paddingLeft: ((menuModulWidth * 2) + imagePadding) * 2
          }, 0, transitionEase, function () {})
        } else {
          $(".projectSlideHolderInner:eq(" + aP + ")").animate({
            paddingLeft: (menuModulWidth * 2) + imagePadding
          }, 0, transitionEase, function () {})
        }
      } else {
        T = $(this).parent().find(".toggler").outerWidth();
        an = $(this).parent().find(".counter").outerWidth();
        u = $(this).parent().find(".projectEdit").outerWidth();
        if ($(".commentsBoxy:eq(" + aK + ")").hasClass("on")) {
          fixSpeed = horizontalTransitionSpeed
        } else {
          fixSpeed = 0
        }
        $(this).parent().find(".commentsBoxy").animate({
          left: -(imagePadding + (menuModulWidth * 3))
        }, fixSpeed, transitionEase, function () {
          $(this).parent().find(".projectInfo,").animate({
            left: -(imagePadding + (menuModulWidth * 2))
          }, fixSpeed, transitionEase, function () {});
          $(this).parent().find(".toggler").html("Info &#9654;").animate({
            left: an + (menuPadding * 3)
          }, fixSpeed, transitionEase, function () {});
          $(this).parent().find(".counter").animate({
            left: menuPadding * 2
          }, fixSpeed, transitionEase, function () {});
          $(this).parent().find(".projectEdit").animate({
            left: (menuPadding * 4) + T + an
          }, fixSpeed, transitionEase, function () {});
          $(".projectSlideHolderInner:eq(" + aP + ")").animate({
            paddingLeft: 0
          }, 0, transitionEase, function () {})
        })
      }
    })
  }
  ah();

  function ap() {
    T = $(".project:eq(" + aK + ")").find(".toggler").outerWidth();
    an = $(".project:eq(" + aK + ")").find(".counter").outerWidth();
    u = $(".project:eq(" + aK + ")").find(".projectEdit").outerWidth();
    if ($(".commentsBoxy:eq(" + aK + ")").hasClass("on")) {
      fixSpeed = horizontalTransitionSpeed
    } else {
      fixSpeed = 0
    }
    $(".project:eq(" + aK + ")").find(".projectInfo").removeClass("on");
    $(".project:eq(" + aK + ")").find(".projectInfo").addClass("off");
    $(".project:eq(" + aK + ")").find(".commentsBoxy").animate({
      left: 0
    }, fixSpeed, transitionEase, function () {
      $(".project:eq(" + aK + ")").find(".projectInfo,").animate({
        left: -(imagePadding + (menuModulWidth * 2))
      }, horizontalTransitionSpeed, transitionEase, function () {});
      $(".project:eq(" + aK + ")").find(".toggler").html("Info &#9654;").animate({
        left: an + (menuPadding * 3)
      }, horizontalTransitionSpeed, transitionEase, function () {});
      $(".project:eq(" + aK + ")").find(".counter").animate({
        left: menuPadding * 2
      }, horizontalTransitionSpeed, transitionEase, function () {});
      $(".project:eq(" + aK + ")").find(".projectEdit").animate({
        left: (menuPadding * 4) + T + an
      }, horizontalTransitionSpeed, transitionEase, function () {});
      $(".projectSlideHolderInner:eq(" + aK + ")").animate({
        paddingLeft: 0
      }, horizontalTransitionSpeed, transitionEase, function () {})
    });
    if ($(".commentsBoxy:eq(" + aK + ")").hasClass("on")) {
      $(".project:eq(" + aK + ")").find(".commentsBoxy").removeClass("on");
      $(".project:eq(" + aK + ")").find(".commentsBoxy").addClass("off");
      $(".projectSlideHolderInner:eq(" + aK + ")").animate({
        paddingLeft: (menuModulWidth * 2) + imagePadding
      }, fixSpeed, transitionEase, function () {});
      $(".commentsBoxy:eq(" + aK + ")").animate({
        left: -(imagePadding + (menuModulWidth * 2))
      }, 0, transitionEase, function () {})
    } else {
      $(".commentsBoxy:eq(" + aK + ")").animate({
        left: -(imagePadding + (menuModulWidth * 2))
      }, 0, transitionEase, function () {})
    }
  }
  function S() {
    T = $(".project:eq(" + aK + ")").find(".toggler").outerWidth();
    an = $(".project:eq(" + aK + ")").find(".counter").outerWidth();
    u = $(".project:eq(" + aK + ")").find(".projectEdit").outerWidth();
    $(".project:eq(" + aK + ")").find(".projectInfo").removeClass("off");
    $(".project:eq(" + aK + ")").find(".projectInfo").addClass("on");
    $(".project:eq(" + aK + ")").find(".projectInfo").animate({
      left: 0
    }, horizontalTransitionSpeed, transitionEase, function () {});
    $(".project:eq(" + aK + ")").find(".toggler").html("&#9664; Info").animate({
      left: (menuModulWidth * 2) + (imagePadding * 1) - T
    }, horizontalTransitionSpeed, transitionEase, function () {});
    $(".project:eq(" + aK + ")").find(".counter").animate({
      left: (menuModulWidth * 2) + (menuPadding * 2) + imagePadding
    }, horizontalTransitionSpeed, transitionEase, function () {});
    $(".project:eq(" + aK + ")").find(".projectEdit").animate({
      left: menuPadding
    }, horizontalTransitionSpeed, transitionEase, function () {});
    $(".projectSlideHolderInner:eq(" + aK + ")").animate({
      paddingLeft: (menuModulWidth * 2) + imagePadding
    }, horizontalTransitionSpeed, transitionEase, function () {})
  }
  function C() {
    if ($(".projectInfo:eq(" + aK + ")").hasClass("on")) {
      ap()
    } else {
      S()
    }
  }
  function at() {
    $(".commentsBoxy:eq(" + aK + ")").removeClass("off");
    $(".commentsBoxy:eq(" + aK + ")").addClass("on");
    if ($(".projectInfo:eq(" + aK + ")").hasClass("on")) {
      $(".project:eq(" + aK + ")").find(".commentsBoxy").animate({
        left: 0
      }, 0, transitionEase, function () {});
      $(".project:eq(" + aK + ")").find(".commentsBoxy").animate({
        left: (menuModulWidth * 2) + menuPadding + imagePadding
      }, horizontalTransitionSpeed, transitionEase, function () {})
    }
    $(".projectSlideHolderInner:eq(" + aK + ")").animate({
      paddingLeft: ((imagePadding + (menuModulWidth * 2)) * 2)
    }, horizontalTransitionSpeed, transitionEase, function () {})
  }
  function K() {
    $(".commentsBoxy:eq(" + aK + ")").removeClass("on");
    $(".commentsBoxy:eq(" + aK + ")").addClass("off");
    $(".project:eq(" + aK + ")").find(".commentsBoxy").animate({
      left: -menuPadding
    }, horizontalTransitionSpeed, transitionEase, function () {});
    $(".projectSlideHolderInner:eq(" + aK + ")").animate({
      paddingLeft: imagePadding + (menuModulWidth * 2)
    }, horizontalTransitionSpeed, transitionEase, function () {})
  }
  function y() {
    $("#loader").fadeTo(verticalTransitionSpeed, 0, transitionEase, function () {
      $(this).hide()
    })
  }
  function j() {
    $("#blocker").fadeTo(verticalTransitionSpeed / 2, 0, function () {
      $("#blocker").hide()
    })
  }
  function N() {
    $("#blocker").fadeTo(verticalTransitionSpeed / 2, 1, function () {})
  }
  $(".tt-dropdown").change(function (aP) {
    aP.preventDefault();
    af = $(this).val();
    Q();
    $(this).find("option:selected").removeAttr("selected");
    $(this).find("option:eq(0)").attr("selected", "selected")
  });
  $("a.history, .dropdown-layers-drop a, .projectCats a, .projectTags a").live("click", function (aP) {
    aP.preventDefault();
    af = $(this).attr("href");
    Q()
  });
  $(".dropdown-layers-drop").hide();
  $(".dropdown-layers").live("mouseover mouseout", function (aP) {
    if (aP.type == "mouseout") {
      $(this).find(".dropdown-layers-drop").hide()
    } else {
      $(this).find(".dropdown-layers-drop").show()
    }
  });
  $("#navInnerForward").live("click", function (aP) {
    $("#navHidden a").trigger("click")
  });
  $("#navHidden a").live("click", function (aP) {
    aP.preventDefault();
    $("#navInnerForward").html("Loading...");
    af = $("#navHidden a").attr("href");
    q()
  });
  $(".image").live("click", function () {
    var aP = $(this).parent().parent().parent().attr("id");
    aP = aP.substr(8);
    aK = aP;
    X();
    if (au == true) {
      x()
    } else {
      R()
    }
  });
  $(".cvideo").live("click", function () {
    var aP = $(this).parent().parent().parent().parent().parent().attr("id");
    aP = aP.substr(8);
    aK = aP;
    X();
    if (au == true) {
      x()
    } else {
      R()
    }
  });
  $("#fullInner .slideRight").live("click", function () {
    aK = $("#fullInner .slideRight").index(this);
    x()
  });
  $("#fullInner .slideLeft").live("click", function () {
    aK = $("#fullInner .slideLeft").index(this);
    s()
  });
  $("#fullInner .toggler").live("click", function () {
    aK = $("#fullInner .toggler").index(this);
    ai = $(".projectSlideHolder:eq(" + aK + ")").attr("name");
    if ($(this).parent().find(".projectInfo").hasClass("on")) {
      ap()
    } else {
      S()
    }
  });
  $("#fullInner .commentsTrigger").live("click", function () {
    aK = $("#fullInner .commentsTrigger").index(this);
    if ($(".commentsBoxy:eq(" + aK + ")").hasClass("off")) {
      at()
    } else {
      K()
    }
  });
  $("#slideUp").live("click", function () {
    am()
  });
  $("#slideDown").live("click", function () {
    aG()
  });
  $(".goUp").live("click", function () {
    W()
  });

  function b() {
    if (aK < aL && aK > -1 && aA == true) {
      aA = false;
      ab();
      ad = $(".projectSlideHolder:eq(" + aK + ")").height();
      $(window).scrollTo(".project:eq(" + aK + ")", whenFinishedBodyScrollSpeed, {
        easing: "easeInOutExpo",
        offset: -(headerInnerHeight + menuPadding + menuPadding),
        axis: "y",
        onAfter: function () {
          aA = true;
          B();
          a()
        }
      })
    }
  }
  function l() {
    if (aK < aL && aK > -1 && aA == true) {
      aA = false;
      ab();
      ad = $(".projectSlideHolder:eq(" + aK + ")").height();
      $(window).scrollTo(".project:eq(" + aK + ")", verticalTransitionSpeed, {
        easing: "easeInOutExpo",
        offset: -(headerInnerHeight + menuPadding + menuPadding),
        axis: "y",
        onAfter: function () {
          aA = true;
          B();
          a()
        }
      })
    }
  }
  function A() {
    if (aK < aL && aK > -1 && aA == true) {
      aA = false;
      $(window).scrollTo(".project:eq(" + aK + ")", 0, {
        easing: "easeInOutExpo",
        offset: -(headerInnerHeight + menuPadding + menuPadding),
        axis: "y",
        onAfter: function () {
          aA = true;
          B();
          a()
        }
      })
    }
  }
  var o = false;

  function am() {
    if (aK < aL && aK > 0 && aA == true) {
      if (o == true) {
        o = false;
        l()
      } else {
        aK--;
        l()
      }
    } else {
      if (aK < aL && aK > -1 && aA == true) {
        l()
      }
    }
  }
  function aG() {
    if (aK < (aL - 1) && aK > -1 && aA == true) {
      aK++;
      l()
    } else {
      if (aA == true) {
        I()
      }
    }
  }
  function R() {
    if (aA == true) {
      l()
    }
  }
  function E() {
    if (aA == true) {
      A()
    }
  }
  function I() {
    aA = false;
    $("html, body").animate({
      scrollTop: $(document).height() - $(window).height()
    }, verticalTransitionSpeed, function () {
      aA = true;
      o = true
    })
  }
  function W() {
    aA = false;
    ab();
    $("html, body").animate({
      scrollTop: 0
    }, verticalTransitionSpeed, transitionEase, function () {
      aA = true;
      aM()
    })
  }
  function c() {
    aA = false;
    $("html, body").animate({
      scrollTop: 0
    }, 0, transitionEase, function () {
      aA = true;
      aM()
    })
  }
  function ar() {
    if (aA == true) {
      aA = false;
      if (M == true) {
        moveSpeed = 0;
        fifty = 0
      } else {
        if (aH == true) {
          moveSpeed = horizontalTransitionSpeed * 1.5;
          aH = false;
          fifty = 150
        } else {
          moveSpeed = horizontalTransitionSpeed;
          fifty = 150
        }
      }
      al = $(".projectSlideHolder:eq(" + aK + ") .media").length;
      ai = $(".projectSlideHolder:eq(" + aK + ")").attr("name");
      $(".projectSlideHolder:eq(" + aK + ")").attr("name", "" + ai + "");
      if ($(".projectInfo:eq(" + aK + ")").hasClass("on")) {
        thisOffset = -((menuModulWidth * 2) + imagePadding)
      }
      if ($(".projectInfo:eq(" + aK + ")").hasClass("off")) {
        thisOffset = 0
      }
      if ($(".commentsBoxy:eq(" + aK + ")").hasClass("on")) {
        thisOffset = -(((menuModulWidth * 2) + imagePadding)) * 2
      }
      ab();
      aJ();
      d();
      moveIt = ax;
      $("#delay").fadeTo(0, 0).fadeTo(fifty, 1, function () {
        $(".projectSlideHolder:eq(" + aK + ")").animate({
          scrollLeft: moveIt + "px"
        }, moveSpeed, transitionEase, function () {
          aA = true;
          M = false;
          if (J == true && afterLastSlide == "next") {
            aG();
            J = false
          }
        })
      })
    }
  }
  function D() {
    M = true;
    ar()
  }
  var ay = true;

  function t() {
    var aP = $(".projectSlideHolder").length;
    tempIndex = aK;
    $(".projectSlideHolder").each(function (aQ) {
      aK = aQ;
      D();
      if (aQ == (aP - 1)) {
        aK = tempIndex;
        M = false
      }
    })
  }
  function s() {
    ai = $(".projectSlideHolder:eq(" + aK + ")").attr("name");
    al = $(".projectSlideHolder:eq(" + aK + ") .media").length;
    if (ai < (al) && ai > 0) {
      if (aA == true) {
        ai--;
        $(".projectSlideHolder:eq(" + aK + ")").attr("name", "" + ai + "");
        X();
        if (au == true) {
          ar()
        } else {
          R()
        }
      }
    }
  }
  var aH = false;

  function x() {
    ai = $(".projectSlideHolder:eq(" + aK + ")").attr("name");
    al = $(".projectSlideHolder:eq(" + aK + ") .media").length;
    if (ai < (al - 1) && ai > -1) {
      if (aA == true) {
        ai++;
        $(".projectSlideHolder:eq(" + aK + ")").attr("name", "" + ai + "");
        X();
        if (au == true) {
          ar()
        } else {
          R()
        }
      }
    } else {
      if (aA == true) {
        ai = 0;
        aH = true;
        $(".projectSlideHolder:eq(" + aK + ")").attr("name", "" + ai + "");
        J = true;
        X();
        if (au == true) {
          ar()
        } else {
          R()
        }
      }
    }
  }
  function O() {
    if (bindMouseWheel == true) {
      $("body").bind("mousewheel", function (aR, aS, aQ, aP) {
        aR.preventDefault();
        if (aP > 0) {
          am()
        } else {
          if (aP < 0) {
            aG()
          }
        }
        return false
      })
    }
  }
  function aN() {
    $("body").unbind("mousewheel")
  }
  if (V == "page") {} else {
    O()
  }
  var w = false;

  function a() {
    if (whenFinishedBodyScroll == "adjust" && bindMouseWheel == false) {
      $(window).bind("scrollstop", function () {
        B();
        if (aA == true) {
          w = true;
          if (aK == 0) {
            indexFix = 1
          } else {
            indexFix = aK
          } if (n == (aL - 1)) {
            if (h > 0 && (h) < (ad * indexFix)) {
              b()
            } else {
              a()
            }
          } else {
            if (h > 0 && (h - (ad / 2)) < (ad * indexFix)) {
              b()
            } else {
              a()
            }
          }
        }
      })
    }
  }
  a();

  function B() {
    if (whenFinishedBodyScroll == "adjust" && bindMouseWheel == false) {
      $(window).unbind("scrollstop")
    }
  }
  var k = -1;

  function aM() {
    ad = $(".project:eq(" + aK + ")").height();
    h = $(window).scrollTop();
    aK = (h + (ao / 2)) / (ad);
    aK = Math.floor(aK);
    n = (h) / (ad);
    n = Math.floor(aK);
    al = $(".projectSlideHolder:eq(" + aK + ") .media").length;
    if (V == "page") {
      $(".goUp").hide()
    } else {
      if (aK == 0) {
        $(".goUp").hide()
      } else {
        $(".goUp").show()
      }
    } if (aK == k) {} else {}
    k = aK
  }
  var h = $(window).scrollTop();
  var au = true;

  function F() {
    $(window).bind("scroll", function (aP) {
      aM()
    })
  }
  F();

  function X() {
    ad = $(".projectSlideHolder:eq(" + aK + ")").height();
    isScrollAligned = (h) / (ad);
    var aP = Math.round(isScrollAligned);
    if (isScrollAligned == aP) {
      au = true
    } else {
      au = false
    }
  }
  function az() {
    if (infinityScroll == true) {
      $("#fullInner").infinitescroll({
        navSelector: "#nav",
        nextSelector: "#navHidden a:first",
        itemSelector: "#fullInner div.project",
        debug: false,
        loadingImg: "" + stylesheetDir + "/images/ajax-loader.gif",
        loadingText: "Hang on. Loading new posts...",
        loadingMsgRevealSpeed: 0,
        animate: false,
        extraScrollPx: 0,
        donetext: "No more posts to load.",
        bufferPx: ao / 2,
        errorCallback: function () {
          H()
        },
        localMode: true
      }, function (aP) {
        H()
      })
    }
  }
  az();
  $(document).ajaxStart(function (aR, aQ, aP) {
    aA = false;
    aj();
    $(document).bind("keydown", function (aS) {
      if (aS.keyCode == 40 || aS.keyCode == 38 || aS.keyCode == 39 || aS.keyCode == 37) {
        aS.preventDefault()
      }
    })
  });
  $(document).ajaxStop(function (aR, aQ, aP) {
    aA = true;
    aO()
  });

  function ak() {
    ao = $(window).height();
    ag = $(window).width();
    X();
    r();
    L();
    E()
  }
  $(window).resize(function () {
    ak();
    aw();
    t()
  });
  $(window).load(function () {
    ak();
    y();
    aA = true;
    t()
  });

  function G() {
    $.preload([av[0], av[1], av[2]], {
      init: function (aP, aQ) {},
      loaded: function (aP, aQ, aR) {},
      loaded_all: function (aP, aQ) {}
    })
  }
});