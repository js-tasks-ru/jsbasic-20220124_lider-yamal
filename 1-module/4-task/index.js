function checkSpam(str) {
  let lc = str.toLowerCase();
  console.log(lc);
  if (lc.includes("1xbet") || lc.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}

