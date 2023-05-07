const day = document.querySelector(".day-input");
const month = document.querySelector(".month-input");
const year = document.querySelector(".year-input");
const btn = document.getElementById("btn-result");
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDay = date.getDate();

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const dayEntered = day.value;
  const monthEntered = month.value;
  const yearEntered = year.value;

  console.log(dayEntered, monthEntered, yearEntered);

  /*year validation*/
  if (yearEntered < 1900 || yearEntered > currentYear) {
    alert("Please enter a valid year");
    return;
  }
  /*month validation*/
  if (monthEntered < 1 || monthEntered > 12) {
    alert("Please enter a valid month");
    return;
  }
  /*day validation*/
  if (dayEntered < 1 || dayEntered > 31) {
    alert("Please enter a valid day");
    return;
  }
  /* if leap year*/
  if (
    (yearEntered % 4 == 0 && yearEntered % 100 != 0) ||
    yearEntered % 400 == 0
  ) {
    if (monthEntered == 2 && dayEntered > 29) {
      alert("Invalid Day");
      return;
    }
  } else if (
  /* if not leap year*/
    (yearEntered % 4 != 0 && yearEntered % 100 == 0) ||
    yearEntered % 400 != 0
  ) {
    if (monthEntered == 2 && dayEntered > 28) {
      alert("Invalid Day");
      return;
    }
  }
});
