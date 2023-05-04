const day = document.querySelector(".day-input");
const month = document.querySelector(".month-input");
const year = document.querySelector(".year-input");
const btn = document.getElementById("btn-result");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const dayEntered = day.value;
  const monthEntered = month.value;
  const yearEntered = year.value;

  console.log(dayEntered, monthEntered, yearEntered);

  /*year validation*/
});
