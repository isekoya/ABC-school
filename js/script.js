window.onload = function () {
  var nav = document.getElementById('nav-wrapper');
  var hamburger = document.getElementById('js-hamburger');
  var links = nav.querySelectorAll('a');

  hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
  });

  // メニューが開いているときにリンクをクリックできるようにする
  nav.addEventListener('click', function (event) {
  event.stopPropagation(); // クリックイベントのバブリングを防ぐ
  });

  // リンククリックでメニューを閉じる
  links.forEach(function(link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });
};

function handleScroll() {
  const items = document.querySelectorAll('.animate-item');
  const windowHeight = window.innerHeight;

  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < windowHeight - 100) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

