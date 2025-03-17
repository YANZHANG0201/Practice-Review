//数据类型
//数字
// let num1 = +prompt("enter the first number");
// let num2 = +prompt("enter the second number");

// let sum = num1 + num2;
// alert(sum);

function readNumber() {
  let num = prompt("enter the first number");
  if (isNaN(Number(num))) {
    //这里递归要return 不然下一个递归结束后，当前的函数（旧的）还会继续
    return readNumber();
  } else {
    alert(num);
    return num;
  }
}
//思路不对
// function random(min, max) {
//   let num = Math.random() * 100;
//   if (num >= min * 100 && num < max * 100) {
//     return num ;
//   } else {
//     return random(min, max);
//   }
// }

function random(min, max) {
  return min + Math.random() * (max - min);
}

function randomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
