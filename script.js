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
describe('Table Creation', () => {
    it('should create a table with the correct number of rows and columns', () => {
        // Simulate visiting the page
        cy.visit('http://localhost:3000'); // Your local server URL
        cy.window().then((win) => {
            cy.stub(win, 'prompt').onFirstCall().returns('2').onSecondCall().returns('3');
        });
        cy.get('#createTableButton').click(); // Click the button by ID
        cy.get('table tr').should('have.length', 2); // Check number of rows
        cy.get('table tr:first td').should('have.length', 3); // Check number of columns
    });

    it('should have the correct content in the cells', () => {
        cy.get('table tr:first td').eq(0).should('have.text', 'Row-0 Column-0');
        cy.get('table tr:first td').eq(1).should('have.text', 'Row-0 Column-1');
        cy.get('table tr:first td').eq(2).should('have.text', 'Row-0 Column-2');
        cy.get('table tr').eq(1).find('td').eq(0).should('have.text', 'Row-1 Column-0');
        cy.get('table tr').eq(1).find('td').eq(1).should('have.text', 'Row-1 Column-1');
        cy.get('table tr').eq(1).find('td').eq(2).should('have.text', 'Row-1 Column-2');
    });

    it('should display the correct prompt text', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').as('promptStub');
            cy.get('#createTableButton').click();
            cy.get('@promptStub').should('have.been.calledTwice');
        });
    });
});