function ucFirst(str) {
  if (str === "") {
    return "";
  }
  let end = str.slice(1);
  return str[0].toUpperCase() + end;
}
