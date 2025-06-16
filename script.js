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
describe('Table Creation', () => {
    it('should create a table with the correct number of rows and columns', () => {
        cy.visit('http://localhost:3000'); // Your local server URL
        cy.window().then((win) => {
            cy.stub(win, 'prompt').onFirstCall().returns('2').onSecondCall().returns('3');
        });
        cy.get('button').click(); // Click the button
        cy.get('table tr').should('have.length', 2); // Check number of rows
        cy.get('table tr:first td').should('have.length', 3); // Check number of columns
    });
});