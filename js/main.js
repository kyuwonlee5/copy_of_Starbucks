const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); // search class 안에있는 input 요소

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener('scroll', _.throttle(function(){
  console.log("scroll!!");
  if(window.scrollY > 500) {
    // badge hide
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    // badge show
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300));
//_.throttle(실행할 함수, 시간)