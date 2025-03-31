const noteInput = document.getElementById("noteInput");
const preview = document.getElementById("preview");
const exportBtn = document.getElementById("exportBtn");

// Load saved notes from localStorage
noteInput.value = localStorage.getItem("note") || "";
preview.innerHTML = marked.parse(noteInput.value);

// Save notes to localStorage and update preview
noteInput.addEventListener("input", () => {
    localStorage.setItem("note", noteInput.value);
    preview.innerHTML = marked.parse(noteInput.value);
});

// Export notes as .txt file
exportBtn.addEventListener("click", () => {
    const blob = new Blob([noteInput.value], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "note.txt";
    link.click();
});