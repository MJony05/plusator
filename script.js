let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btn = document.querySelector(".btn");
let res = document.querySelector("#result");
let rnum1 = Math.trunc(Math.random() * 50 + 1);
let rnum2 = Math.trunc(Math.random() * 50 + 1);
num1.textContent = rnum1;
num2.textContent = rnum2;
let result = rnum1 + rnum2;
btn.addEventListener("click", function (e) {
  if (res.value == result) {
    alert("Correct ");
  } else {
    alert("Sorry. Incorrect. The correct answer was " + result);
  }
});
res.focus();
