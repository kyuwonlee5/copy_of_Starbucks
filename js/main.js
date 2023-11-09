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
    badgeEl.style.display = "none";
  } else {
    // badge show
    badgeEl.style.display = "block";
  }
}, 300));
//_.throttle(실행할 함수, 시간)