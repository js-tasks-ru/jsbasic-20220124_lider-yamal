function highlight(table) {
  for (let row of table.rows) {
    for (let cell of row.cells) {
      if (cell.dataset.available) {
        cell.closest('tr').hidden = false;
      } else {
        cell.closest('tr').hidden = true;
      }

      if (cell.dataset.available == "true") {
        cell.closest('tr').classList.add('available');
      } else if (cell.dataset.available == "false") {
        cell.closest('tr').classList.add('unavailable');
      } 

      if (cell.textContent === 'm') {
        cell.closest('tr').classList.add('male');
      } else if (cell.textContent === 'f') {
        cell.closest('tr').classList.add('female');
      }
      
      if (+cell.textContent < 18) {
        cell.closest('tr').style = "text-decoration: line-through";
      }
    }
  }
}
