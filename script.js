document.addEventListener("DOMContentLoaded", () => {
    const storedEntries = JSON.parse(localStorage.getItem("textEntries")) || {};

    Object.keys(storedEntries).forEach(region => {
        const regionDiv = document.getElementById(`${region}Entries`);
        storedEntries[region].forEach(({ text, color }) => {
            const entryDiv = document.createElement("div");
            entryDiv.className = "entry";
            entryDiv.textContent = text;
            entryDiv.style.color = color;
            regionDiv.appendChild(entryDiv);
        });
    });
});

function addText() {
    const textInput = document.getElementById("textInput");
    const colorInput = document.getElementById("colorInput");
    const regionInput = document.getElementById("regionInput");
    const regionDiv = document.getElementById(`${regionInput.value}Entries`);

    if (textInput.value.trim() !== "") {
        const entryDiv = document.createElement("div");
        entryDiv.className = "entry";
        entryDiv.textContent = textInput.value;
        entryDiv.style.color = colorInput.value;
        regionDiv.appendChild(entryDiv);

        saveToLocalStorage(regionInput.value, {
            text: textInput.value,
            color: colorInput.value
        });

        textInput.value = "";
        colorInput.value = "black"; // Reset color choice
    } else {
        alert("Please enter some text before saving.");
    }
}

function saveToLocalStorage(region, entry) {
    const storedEntries = JSON.parse(localStorage.getItem("textEntries")) || {};
    if (!storedEntries[region]) {
        storedEntries[region] = [];
    }
    storedEntries[region].push(entry);
    localStorage.setItem("textEntries", JSON.stringify(storedEntries));
}
