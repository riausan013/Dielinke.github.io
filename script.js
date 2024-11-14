function addText() {
    const textInput = document.getElementById("textInput");
    const colorInput = document.getElementById("colorInput");
    const category = prompt("Enter category (Asia, MENA, Africa & Australia, Europe, United States, Latam)");

    if (textInput.value.trim() !== "" && category) {
        const entryDiv = document.createElement("div");
        entryDiv.className = "entry";
        entryDiv.textContent = textInput.value;
        entryDiv.style.color = colorInput.value;

        // Append to the correct category based on user input
        switch(category.toLowerCase()) {
            case 'asia':
                document.getElementById("asiaEntries").appendChild(entryDiv);
                break;
            case 'mena':
                document.getElementById("menaEntries").appendChild(entryDiv);
                break;
            case 'africa & australia':
                document.getElementById("africaAustraliaEntries").appendChild(entryDiv);
                break;
            case 'europe':
                document.getElementById("europeEntries").appendChild(entryDiv);
                break;
            case 'united states':
                document.getElementById("usEntries").appendChild(entryDiv);
                break;
            case 'latam':
                document.getElementById("latamEntries").appendChild(entryDiv);
                break;
            default:
                alert("Invalid category entered!");
                return;
        }

        // Clear input fields after saving
        textInput.value = "";
        colorInput.value = "black"; // Reset color choice
    } else {
        alert("Please enter some text and a valid category before saving.");
    }
}
