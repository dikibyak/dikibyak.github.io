var menuElem = document.querySelector('.menu');
var titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};
