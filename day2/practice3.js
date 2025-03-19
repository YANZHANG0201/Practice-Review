//对象
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// function isEmpty(obj) {
//   let num = 0;
//   for (key in obj) {
//     if (key) {
//       num += 1;
//     }
//   }
//   if (num == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
//修正后


/* a, b, c, d 4个请求，保证顺序请求的实现方式 */

/* for in 和 for of的区别 */

function isEmpty(obj) {
  for (let key in obj) {
    // 如果进到循环里面，说明有属性。
    return false;
  }
  return true;
}


// let schedule = {};
// console.log(isEmpty(schedule));
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule));

// let sum = 0;

// for (key in salaries) {
//   sum = sum + salaries[key];
// }
// return sum;

// function multiplyNumeric(obj) {
//   for (key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
// }
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);
// console.log(menu);

//浅拷贝深拷贝

//JSON.stringfy/parse-->对象中含有一个函数的时候不能用这个方法进行深拷贝
const originArray = [1, 2, 3, 4, 5];
const originObj = { a: "a", b: "b", c: [1, 2, 3] };

const cloneArray = JSON.parse(JSON.stringify(originArray));
const cloneObj = JSON.parse(JSON.stringify(originObj));

//递归

function deepClone(source) {
  const target = source.constructor === Array ? [] : {};

  for (let keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] == "object") {
        target[keys] = source[keys].constructor === Array ? [] : {};
        target[keys] = deepClone(source[keys]);
      }
    }
  }
  return target;
}
//第一层拷贝
function shallowCopy(source) {
  const target = source.constructor === Array ? [] : {};
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}
