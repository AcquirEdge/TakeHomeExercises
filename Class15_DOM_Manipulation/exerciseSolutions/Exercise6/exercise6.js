/**
 * Function to add event listeners to the buttons. When a button is clicked, the text of the related paragraph should be changed to "Text has been changed!".
 */
function addEventListenerToButtons() {
    // Get the button and paragraph elements by Tag Name
    let buttons = document.getElementsByTagName("button");
    let paragraphs = document.getElementsByTagName("p");

    // Add an event listener to each button
    // The callback function should change the text of the related paragraph
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', () => {
            paragraphs[i].textContent = "Button " + (i + 1) + " text has been changed!";
        });
    }
}

// Call the function
addEventListenerToButtons();
