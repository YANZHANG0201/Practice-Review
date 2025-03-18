//数组
// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// let odd = Math.floor((styles.length - 1) / 2);
// styles[odd] = "Classic";
// console.log(styles.shift());
// styles.unshift("Rap");
// styles.unshift("Reggae");

//数组也是对象，对象调用函数，this是这个对象
// let arr = ["a", "b"];

// arr.push(function () {
//   alert(this);
// });

// arr[2](); //

// function sumInput() {
//   let arr = [];
//   let sum = 0;
//   let num = +prompt("emther a number");
//   while (num !== "") {
//     arr.push(num);
//     sum += num;
//     let num = +prompt("emther a number");
//   }

//   return sum;
// }

//要判断是否为数字+while true
//应该用动态规划?最大子数组

//splice
// let newArr = ["I", "Study", "JS"];
//删除第二个元素
// newArr.splice(1, 1);
// console.log(newArr);

//删除第一个元素并且替换you
//-->返回的是删除的那个元素
// console.log(newArr.splice(0, 1, "You"));
// console.log(newArr);

//slice 直接获取子数组，返回的就是那个子数组
// let testArr = [1, 2, 3, 5];
// console.log(testArr.slice(1, 2));
//原数组不受影响
// console.log(testArr);

//concat
// let arr = [1, 2];
// console.log(arr.concat([1, 2], [3, 4]));
//不影响原来的数组
// console.log(arr);

//for Each--允许数组的每个元素都运行一个函数--没有返回

//find-->返回符合条件的第一个
// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];
// let userFind = users.find((item) => item.id == 1);
// console.log(userFind);

//filter-->返回所有匹配的

// 转换数组-->改变了原来的数组
//map-->对每个元素都调用函数，并且返回结果数组
//split-->字符串变数组
//join-->数组变字符串
//reduce-->对每个元素进行操作，然后将当前结果搬运到下一次
// let arr = [1, 2, 3, 4];
// let res = arr.reduce((sum, curr) => sum + curr, 0);
//判断数组

//将 border-left-width 转换成 borderLeftWidth
function camelize(str) {
  let strArr = str.split("-");
  console.log(strArr);
  for (let i = 1; i < strArr.length; i++) {
    strArr[i] = `${strArr[i][0].toUpperCase()}${strArr[i].slice(1)}`;
  }
  return strArr.join("");
}
// console.log(camelize("background-color"));

function filterRange(arr, a, b) {
  let newArr = [];
  let addArr = arr.filter((item) => item >= a && item < b);
  return newArr.concat(addArr);
}
// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);

//用splice
// function filterRangeInPlace(arr, a, b) {
//   arr = arr.filter((item) => item >= a && item < b);
//   console.log(arr);
// }

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] >= b) {
      arr.splice(i, 1);
      //删除后i要-1
      i--;
    }
  }
}

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); 删除了范围在 1 到 4 之外的所有值

// console.log(arr); // [3, 1]

//降序排序
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr); // 8, 5, 2, 1, -10

//可以用slice创建副本

//创建一个可扩展到calculator
//-->创建一个保存计算方法的属性才可以

// function Calculator(){
//     this.calculate=funcion(str){
//        let arr=str.split('')
//        if(arr[1]=='+'){
//         return (+arr[0]+ +arr[2])
//        }else if(arr[1]=='-'){
//         return (+arr[0]- +arr[2])
//        }
//     }
//     this.addMethod=function(name,func){

//     }
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((item) => item.name);

// console.log(names); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((item) => {
//   return {
//     name: `${item.name} ${item.surname}`,
//     id: item.id,
//   };
// });
// console.log(usersMapped);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }
// sortByAge(arr);

// now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// function getAverageAge(arr) {
//   return arr.reduce((acc, curr) => acc + curr.age, 0) / arr.length;
// }
// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

//数组去重
//用哈希
// function unique(arr) {
//   let set = new Set();
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//       continue;
//     } else {
//       set.add(arr[i]);
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(strings)); // Hare, Krishna, :-O

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

// function groupById(arr) {
//   arr.map((item) => {
//     let id = item.id;
//     return {
//       id: item,
//     };
//   });
// }
// function groupById(arr) {
//   return arr.reduce((acc, curr) => {
//     acc[curr.id] = curr;
//     return acc;
//   }, {});
// }
// let usersById = groupById(users);
// console.log(usersById);

/*
  // 调用函数后，我们应该得到：
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
