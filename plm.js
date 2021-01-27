function is_Palindrome(tmpStr) {
  let rev = tmpStr.split("").reverse().join("");
  return tmpStr == rev;
}

function longest_palindrome(str) {
  let tmpStr = str.toLowerCase().split(" ").join("");

  let max_length = 0;
  let result = "none";

  for (let i = 0; i < tmpStr.length; i++) {
    let subs = tmpStr.substr(i, tmpStr.length);

    for (let j = subs.length - 1; j >= 0; j--) {
      let tmpSubStr = subs.substr(0, j);
      if (tmpSubStr.length <= 1) continue;
      let rev = tmpSubStr.split("").reverse().join("");
      if (tmpSubStr === rev) {
        if (tmpSubStr.length > max_length) {
          max_length = tmpSubStr.length;
          result = tmpSubStr;
        }
      }
    }
  }
  str = result;
  return str;
}
