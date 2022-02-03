let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

function sumSalary(salaries) {
  let values = Object.values(salaries);

  let result = 0;

  for (const val of values) {

    if (Number.isInteger(val) === true) {
      result += val;
    } 
  }
  return result;
}
