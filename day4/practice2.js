//map && set
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//想用两个for和map来解，好像是可以用那个字母charAtCode来标识-->想复杂了直接转换字符串用字符串来比较
// function aclean(arr) {
//   for (let i = 0; i < arr.length; i++) {}
// }

// function aclean(arr) {
//   let hash = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split("").sort().join("");
//     hash.set(sorted, arr[i]);
//   }
//   return Array.from(hash.values());
// }
// console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

//弱映射和弱集合 WeakMap && WeakSet

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" },
// ];
// let readMsg = new WeakSet();
// readMsg.add[messages[0]];
