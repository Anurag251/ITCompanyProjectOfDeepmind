const solutionsPop = document.querySelector('.solutions-popup');
const solutionsClose = document.querySelector('.solutions-close');
const solutionBtn = document.querySelectorAll('.solutionBtn');
const background = document.querySelector('.background');
const mouse = document.querySelector('.cursor-close');

solutionBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    solutionsPop.classList.add('active');
    background.classList.add('active');
  });
});

solutionsClose.addEventListener('click', () => {
  solutionsPop.classList.remove('active');
  background.classList.remove('active');
});

background.addEventListener('click', () => {
  solutionsPop.classList.remove('active');
  background.classList.remove('active');
});

document.addEventListener('mousemove', (e) => {
  let x = e.x;
  let y = e.y;

  mouse.style.top = y + 'px';
  mouse.style.left = x + 'px';
});
