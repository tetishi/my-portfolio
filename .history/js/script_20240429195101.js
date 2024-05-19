//　ハンバーガーメニュー
const ham = document.querySelector('.mobile-menu__btn');
const nav = document.querySelector('.mobile-header');

ham.addEventListener('click', function() {
  ham.classList.toggle('is-open');
  nav.classList.toggle('is-open');
});

// ハンバーガーメニュー内をクリックしらたらハンバーガーメニューを閉じる
$('.mobile-header a[href]').on('click', function() {
  $('.mobile-menu__btn').trigger('click');
});
// ハンバーガーメニュー開いている時のスクロールを禁止する
let state = false;
let pos;
$('.mobile-menu__btn').on('click', function(){
  if (state == false) {
    pos = $(window).scrollTop();
    $('body').addClass('js-fixed').css({'top': -pos});
    state = true;
  } else {
    $('body').removeClass('js-fixed').css({'top': 0});
    window.scrollTo(0, pos);
    state = false;
  }
});
