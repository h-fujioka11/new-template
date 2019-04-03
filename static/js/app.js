$(function(){
  var loader = $('.loader-wrap');

  //ページの読み込みが完了したらアニメーションを非表示
  $(window).on('load',function(){
    loader.fadeOut();
  });

  //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
  setTimeout(function(){
    loader.fadeOut();
  },500);
});


//画像アニメーション
$(function(){
  var setAnim = $('.js-img-animate');
  $(window).on('scroll resize',function(){
    var setHeight = 100;
    setAnim.each(function(){
      var setThis = $(this),
          setElm = $(this).find('.js-img-animate__item');
      elmTop = setThis.offset().top,
      scrTop = $(window).scrollTop(),
      winHeight = $(window).height();
      if (scrTop > elmTop - winHeight + setHeight){
        setElm.addClass('show');
      }
    });
  });
});
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function($) {

  WindowHeight = $(window).height();
  /*$('.p-navigation__item').css('height', WindowHeight);*/
  $('.c-hamburger').click(function(){
    $(this).toggleClass('js-open');
    $(this).next().toggleClass('js-open');

    $('.c-overlay').show();
    return false;
  });

  $('.p-navigation__item a').on('click', function() {
    $('.p-navigation__item').toggleClass('js-open');
    $('.c-hamburger').toggleClass('js-open');
    $('.c-overlay').hide();
  });
  $('.c-overlay').click(function() {
    $(this).hide();
    $('.c-hamburger').removeClass('js-open');
    $('.p-navigation__item').removeClass('js-open');
  });
});

window.sr = ScrollReveal({ reset: false,mobile: false });

var opt_sr1 = {
  origin: 'bottom', 
  distance: '100px', 
  duration: 1500, 
  scale: 1, 
  delay :0,
  opacity: 0,
};

var opt_sr2 = {
  origin: 'bottom', 
  distance: '100px', 
  duration: 1500, 
  scale: 1, 
  delay :100,
  opacity: 0,
};

var opt_sr3 = {
  origin: 'bottom', 
  distance: '100px', 
  duration: 1500, 
  scale: 1, 
  delay :200,
  opacity: 0,
};

var opt_sr4 = {
  origin: 'bottom', 
  distance: '100px', 
  duration: 1500, 
  scale: 1, 
  delay :300,
  opacity: 0,
};

var opt_sr5 = {
  origin: 'bottom', 
  distance: '100px', 
  duration: 1500, 
  scale: 1, 
  delay :400,
  opacity: 0,
};

var opt_sr6 = {
  origin: 'bottom', 
  distance: '100px', 
  duration: 1500, 
  scale: 1, 
  delay :500,
  opacity: 0,
};
 
sr.reveal('.js-contents-scroll01', opt_sr1);
sr.reveal('.js-contents-scroll02', opt_sr2);
sr.reveal('.js-contents-scroll03', opt_sr3);
sr.reveal('.js-contents-scroll04', opt_sr4);
sr.reveal('.js-contents-scroll05', opt_sr5);
sr.reveal('.js-contents-scroll06', opt_sr6);




particlesJS('particles-js', //アニメーションを表示する要素(id)を指定する。同名のclassが存在する場合は動作しない
  {
    "particles": {
      //シェイプ数
      "number": {
        //要素内に表示するシェイプの数
        "value": 12,
        "density": {
          //シェイプ表示間隔設定
          "enable": true, //true:有効, false:無効
          //シェイプ表示間隔
          "value_area": 1000
        }
      },
      //シェイプ色
      "color": {
        "value": "#99A2C4" //複数指定["#ff7fbf", "#ff7fff", "#bf7fff"]
      },

      //シェイプの設定
      "shape": {
        //シェイプ形
        "type": "polygon", //設定値：circle, edge, triangle, polygon, star, image, 複数指定["circle", "triangle", "image"]

        //シェイプボーダー設定
        "stroke": {
          //ボーダー幅
          "width": 0,
          //ボーダー色
          "color": "#000000"
        },
        //シェイプの形でpolygonを指定した場合
        "polygon": {
          //ポリゴン角数指定
          "nb_sides": 4
        },

        //シェイプの形でimageを指定した場合
        "image": {
          //画像パス
          "src": "img/github.svg",
          //画像幅
          "width": 100,
          //画像高さ
          "height": 100
        }
      },

      //シェイプ透過率指定
      "opacity": {
        //透過率指定
        "value": 0.9,
        //ランダム設定
        "random": false, //true:有効, false:無効

        //透過アニメーション設定
        "anim": {
          //アニメーション設定
          "enable": false, //true:有効, false:無効
          //アニメーション速度
          "speed": 1,
          //アニメーション最小透過率
          "opacity_min": 0.1,
          //アニメーション同期
          "sync": false //true:有効, false:無効
        }
      },

      //シェイプサイズ
      "size": {
        //シェイプサイズ指定
        "value": 12,
        //ランダムサイズ
        "random": true, //true:有効, false:無効
        //サイズアニメーション設定
        "anim": {
          //アニメーション設定
          "enable": false, //true:有効, false:無効
          //アニメーション速度
          "speed": 4,
          //アニメーション時のシェイプ最小サイズ,
          "size_min": 0.1,
          //アニメーション同期設定
          "sync": false //true:有効, false:無効
        }
      },

      //シェイプを線で繋ぐか
      "line_linked": {
        //線の設定
        "enable": false, //true:有効, false:無効
        //線の間隔
        "distance": 150,
        //線の色
        "color": "#ffffff",
        //線の透過率
        "opacity": 0.4,
        //線の幅
        "width": 1
      },
      //シェイプの動きの設定
      "move": {
        //動きを制御するか
        "enable": true, //true:有効, false:無効
        //動く速度
        "speed": 3,
        //動く方向
        "direction": "none", //none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
        //ランダム設定
        "random": false, //true:有効, false:無効
        //静止状態にする
        "straight": false, //true:有効, false:無効
        //シェイプの動き
        "out_mode": "out", //ボックス内で動かす bounce ボックス外に逃がす out
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",

      //マウスイベント設定
      "events": {
        //マウスオーバー時の処理
        "onhover": {
          "enable": true, //true:有効, false:無効
          "mode": "grab" //grad:付近のシェイプと線を繋ぐ, bubble:拡大, repulse:拒絶
        },

        //クリック時の処理処理
        "onclick": {
          //クリック時の処理
          "enable": false, //true:有効, false:無効
          //クリック時の処理の設定
          "mode": "push" //push:追加, remove:削除, bubble:拡大, repulse:拒絶
        },
        "resize": true
      },
      //以下でマウスイベント発生時の詳細値を設定
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 1
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    //Retina Display対応
    "retina_detect": true, //true:有効, false:無効
  }
);