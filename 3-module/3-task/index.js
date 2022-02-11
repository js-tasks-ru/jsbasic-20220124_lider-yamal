function camelize(str) {
  let arr = str.split("-");
  let res = [];

  for (let item of arr) {
    if (item === "") {
      res.push("");

    } else if (res.length !== 0) {
      res.push(item[0].toUpperCase() + item.slice(1));

    } else {
      res.push(item);
    }
  }

  return res.join('');
}
