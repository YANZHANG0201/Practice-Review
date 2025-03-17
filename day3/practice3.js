//字符串
function ucFirst(str) {
  let firstChat = str[0].toUpperCase();
  let newStr = `${firstChat}${str.slice(1)}`;
  return newStr;
}

// console.log(ucFirst("john") == "John");

//或者用includes
function checkSpam(str) {
  str = str.toLowerCase();
  if (str.indexOf("viagra") !== -1 || str.indexOf("xxx") !== -1) {
    return true;
  } else {
    return false;
  }
}

// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("free xxxxx"));
// console.log(checkSpam("innocent rabbit"));

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    //省略号实际上有一个单独的 Unicode 字符，而不是三个点。-->这里应该改成-1
    str = `${str.slice(0, maxlength - 3)}...`;
  }
  return str;
}
