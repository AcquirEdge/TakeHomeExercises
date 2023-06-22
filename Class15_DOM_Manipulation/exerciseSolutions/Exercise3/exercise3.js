/**
 * Function to add a new paragraph element to the div with ID 'content'.
 */
function addElement() {
    // Get the div element by ID
    let element = document.getElementById("content");

    // Create a new paragraph element
    let newParagraph = document.createElement("p");

    // Set the text content of the paragraph
    newParagraph.textContent = "New Paragraph Content";

    // Append the new paragraph to the div
    element.appendChild(newParagraph);
}

// Call the function
addElement();
