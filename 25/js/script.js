/*
Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
*/

const table = document.createElement("table");
table.classList.add("table");

for (let i = 0, count = 1; i < 10; i++) {
  const row = table.insertRow(i);
  for (let j = 0; j < 10; j++, count++) {
    const cell = row.insertCell(j);
    const newText = document.createTextNode(count);
    cell.appendChild(newText);
  }
}

document.body.append(table);
