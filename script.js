// Function to create the dynamic table
function createTable() {
    // Get the number of rows
    let rows = prompt("Input number of rows");
    // Get the number of columns
    let cols = prompt("Input number of columns");

    // Validate input
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return; // Exit the function if input is invalid
    }

    // Convert inputs to integers
    rows = parseInt(rows);
    cols = parseInt(cols);

    // Get the table element
    const table = document.getElementById("myTable");
    // Clear any existing content in the table
    table.innerHTML = "";

    // Create the table rows and cells
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr"); // Create a new row
        for (let j = 0; j < cols; j++) {
            const td = document.createElement("td"); // Create a new cell
            td.textContent = `Row-${i} Column-${j}`; // Set the text content
            tr.appendChild(td); // Append the cell to the row
        }
        table.appendChild(tr); // Append the row to the table
    }
}

// Add event listener to the button
document.getElementById("createTableButton").addEventListener("click", createTable);