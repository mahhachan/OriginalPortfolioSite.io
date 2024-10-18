$(function(){
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $('.hamburger').on('click', function() {
      if ($('#header').hasClass('open')) {
        $('#header').removeClass('open');
      } else {
        $('#header').addClass('open');
      }
    });
  
    // #maskのエリアをクリックした時にメニューを閉じる
    $('#mask').on('click', function() {
      $('#header').removeClass('open');
    });
  
    // リンクをクリックした時にメニューを閉じる
    $('#navi a').on('click', function() {
      $('#header').removeClass('open');
    });
  

  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function(){
    // リンクを取得
    let href= $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });


  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function() {
    // fadeinクラスに対して順に処理を行う
    $('.fadein').each(function() {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 10) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
});

  /*=================================================
  works スライダー
  ===================================================*/

document.addEventListener('DOMContentLoaded', function() {
  var swiper;
  // 有効化時のオプションを記述
  function initializeSwiper() {
      swiper = new Swiper('.swiper', {
            // Optional parameters
     loop: true,
     slidesPerView: 3,
     slidesPerGroup: 1,
     centeredSlides: true,
     spaceBetween: 15,
     
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
              
          },
         
      });
  }
  // 無効化する用の記述
  function destroySwiper() {
      if (swiper) {
          swiper.destroy();
          swiper = undefined;
      }
  }
  // if分を用いて横幅に応じて関数を実行
  function handleResize() {
      var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (w > 768) {
          if (!swiper) {
              initializeSwiper();
          }
      } else {
          destroySwiper();
      }
  }
  // 初回実行
  handleResize();
  window.addEventListener('resize', handleResize);
});