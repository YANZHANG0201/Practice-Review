//值的比较
// 5 > 4-->true
// "apple" > "pineapple"-->false
// "2" > "12"-->true
// undefined == null-->true
// undefined === null-->false
// null == "\n0\n"-->false
// null === +"\n0\n"-->false
//条件语句
// let result = a + b < 4 ? "Below" : "Over";
// let message =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//       ? "Greetings"
//       : login == ""
//         ? "No login"
//         : "";
//
//逻辑运算符
//遇到真值-1，执行
// if (-1 || 0) alert("first");
//遇到假值0，不执行
// if (-1 && 0) alert("second");
//先&& 最后一个真值1，然后||，遇到真值1 执行
// if (null || (-1 && 1)) alert("third");
//switch重写if解构
// let a = +prompt("a?", "");
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2,3");
//     break;
// }
