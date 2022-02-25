import createElement from "../../assets/lib/create-element.js";

export default class UserTable {
  constructor(rows) {
    this.data = rows;
    this.elem = this.renderTable();
  }

  renderTable() {
    const tbl = document.createElement("table");

    for (let item of this.data) {
      const tr = tbl.insertRow();
      const td1 = tr.insertCell().appendChild(document.createTextNode(item.name));
      const td2 = tr.insertCell().appendChild(document.createTextNode(item.age));
      const td3 = tr.insertCell().appendChild(document.createTextNode(item.salary));
      const td4 = tr.insertCell().appendChild(document.createTextNode(item.city));
      const td5 = tr.insertCell().innerHTML = `<button>X</button>`;
    }

    this.tbl = tbl;

    this.onClick();

    return this.tbl;
  }

  remove(row) {
    row.target.closest('tr').remove();
  }

  onClick() {
    this.tbl.addEventListener('click', this.remove);
  }
}
