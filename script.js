function addText() {
    const textInput = document.getElementById("textInput");
    const colorInput = document.getElementById("colorInput");
    const regionInput = document.getElementById("regionInput");
    const category = regionInput.value;

    if (textInput.value.trim() !== "") {
        const newEntry = {
            text: textInput.value,
            color: colorInput.value
        };

        // Save to localStorage
        const storedData = JSON.parse(localStorage.getItem(category)) || [];
        storedData.push(newEntry);
        localStorage.setItem(category, JSON.stringify(storedData));

        // Add entry to UI
        appendEntry(category, newEntry);

        // Clear input fields
        textInput.value = "";
        colorInput.value = "black"; // Reset color choice
    } else {
        alert("Please enter some text and select a region before saving.");
    }
}

function appendEntry(category, entry) {
    const entriesDiv = document.getElementById(`${category}Entries`);
    const entryDiv = document.createElement("div");
    entryDiv.className = "entry";
    entryDiv.textContent = entry.text;
    entryDiv.style.color = entry.color;
    entriesDiv.appendChild(entryDiv);
}

function loadEntries() {
    const categories = [
        "asia",
        "mena",
        "africaAustralia",
        "europe",
        "us",
        "latam"
    ];

    categories.forEach(category => {
        const storedData = JSON.parse(localStorage.getItem(category)) || [];
        storedData.forEach(entry => appendEntry(category, entry));
    });
}

// Load entries when the page is loaded
window.onload = loadEntries;
