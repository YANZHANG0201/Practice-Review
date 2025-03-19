//函数
function min(a, b) {
  return a > b ? b : a;
}

function pow(x, n) {
  if (x == 0) return 1;
  if (x < 0) return 1 / pow(x, -n);
  let res = 1;
  while (n > 0) {
    res = res * x;
    n = n - 1;
  }
  return res;
}
//箭头函数
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree",
  () => alert("you agree"),
  () => alert("you canceled")
);

/* 箭头函数相关特性 */
