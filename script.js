function addText() {
    const textInput = document.getElementById("textInput");
    const colorInput = document.getElementById("colorInput");
    const regionInput = document.getElementById("regionInput");
    const category = regionInput.value; // Get selected region from the dropdown

    if (textInput.value.trim() !== "") {
        const entryDiv = document.createElement("div");
        entryDiv.className = "entry";
        entryDiv.textContent = textInput.value;
        entryDiv.style.color = colorInput.value;

        // Append to the correct category based on selected region
        switch(category) {
            case 'asia':
                document.getElementById("asiaEntries").appendChild(entryDiv);
                break;
            case 'mena':
                document.getElementById("menaEntries").appendChild(entryDiv);
                break;
            case 'africaAustralia':
                document.getElementById("africaAustraliaEntries").appendChild(entryDiv);
                break;
            case 'europe':
                document.getElementById("europeEntries").appendChild(entryDiv);
                break;
            case 'us':
                document.getElementById("usEntries").appendChild(entryDiv);
                break;
            case 'latam':
                document.getElementById("latamEntries").appendChild(entryDiv);
                break;
            default:
                alert("Invalid category selected!");
                return;
        }

        // Clear input fields after saving
        textInput.value = "";
        colorInput.value = "black"; // Reset color choice
    } else {
        alert("Please enter some text and select a region before saving.");
    }
}
