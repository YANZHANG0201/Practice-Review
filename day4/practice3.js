//数据类型剩下的
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

const { GiConsoleController } = require("react-icons/gi");

// function sumSalaries(obj) {
//   let sum = 0;
//   for (let value of Object.values(obj)) {
//     sum += value;
//   }
//   return sum;
// }
// console.log(sumSalaries(salaries)); // 650

//解构赋值

// let user = { name: "John", years: 30 };

// 等号左侧是你的代码
// let { name, years: age, isAdmin = false } = user;

// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(obj) {
//   let max = -Infinity;
//   let maxName = null;
//   for (let [name, salary] of Object.entries()) {
//     if (salary > max) {
//       max = salary;
//       maxName = name;
//     }
//   }
//   return maxName;
// }

//日期和时间

// let now = new Date("2020-2-2");
// console.log(now);
//2月对应1
//星期是从0（周日）-6（周六）
// let date1 = new Date(2012, 1, 20, 3, 12);
// console.log(date1);

// let date = new Date(2015, 0, 2);

// function getDateAgo(date, day) {
//   date.setDate(date.getDate() - day);
//   return date.getDate();
// }
//每次都修改了所以和答案不对

// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);

//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate();
// }
// console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
//上个月的最后一天 0

//JSON
//JSON-stringfy
