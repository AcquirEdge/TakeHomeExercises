/**
 * Function to add an event listener to the button.
 */
function addButtonListener() {
    // Get the button element by ID
    let button = document.getElementById("btn");

    // Add an event listener to the button
    // The callback function should change the text of the paragraph with ID 'message' to "Button clicked!"
    let message = document.getElementById("message");
    button.addEventListener("click", () => {
        message.innerText = "Button clicked!";
    })
}

// Call the function
addButtonListener();
