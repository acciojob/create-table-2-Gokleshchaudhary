function createTable() {
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // Validate input: must be positive integers
  const rows = parseInt(rn, 10);
  const cols = parseInt(cn, 10);

  if (
    isNaN(rows) || isNaN(cols) ||
    rows <= 0 || cols <= 0
  ) {
    alert("Please enter positive numbers for rows and columns.");
    return;
  }

  const table = document.getElementById("myTable");
  table.innerHTML = ""; // Clear previous table

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}