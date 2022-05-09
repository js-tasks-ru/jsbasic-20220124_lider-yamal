function checkSpam(str) {
  let lc = str.toLowerCase();
  if (lc.includes("1xbet") || lc.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}

