function showSalary(users, age) {
  let res = '';

  for (let user of users) {
    if (user.age <= age) {
      res += `${user.name}, ${user.balance}\n`;
    }
  }
  return res.trim();
}
