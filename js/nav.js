// nav dropdown

const dropDownBtn = document.querySelectorAll('.drop-down');
const drop = document.querySelectorAll('.nav-sec .drop');

dropDownBtn.forEach((btn, idx) => {
  $(btn).hover(() => {
    drop[idx].classList.toggle('active');
  });
});
