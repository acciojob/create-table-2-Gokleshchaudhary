function createTable() {
    //Write your code here
  function createTable() {
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Validate input
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    rn = parseInt(rn);
    cn = parseInt(cn);
    
    const table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear previous table

    for (let i = 0; i < rn; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < cn; j++) {
            let cell = document.createElement("td");
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
}
