/**
 * Function to make the page interactive.
 */
function makeInteractive() {
    // Get the button and ul elements by ID
    let button = document.getElementById("addBtn");
    let list = document.getElementById("itemList");

    // Add an event listener to the button
    // The callback function should add a new li to the ul
    // The text of the li should be "Item " followed by a number, which should increment each time a new item is added
    let counter = 1;
    button.addEventListener("click", () => {
        let newItem = document.createElement("li");
        newItem.innerText = "Item " + counter++;
        list.appendChild(newItem);
    })

    // Add an event listener to the ul
    // The callback function should check if the clicked target is an li, and if so, remove it
    // Hint: Look up 'event delegation'
    list.addEventListener("click", (event) => {
        let target = event.target;
        if(target.tagName === "LI"){
            target.remove();
        }
    })
}

// Call the function
makeInteractive();
