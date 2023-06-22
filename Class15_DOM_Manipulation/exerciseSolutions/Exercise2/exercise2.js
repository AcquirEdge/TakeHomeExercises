/**
 * Function to change the text of each paragraph.
 */
function changeTexts() {
    // Get the paragraph elements by tag name
    let paragraphs = document.getElementsByTagName("p");

    // Change the text content of each paragraph to something different
    for(let i in paragraphs){
        paragraphs[i].textContent = "Message " + i + " new text.";
    }
}   

// Call the function
changeTexts();
