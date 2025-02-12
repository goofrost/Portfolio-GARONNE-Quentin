let notes = [];
for (let i = 1; i <= 9; i++) {
    let note = prompt("Saisir la note " + i + ":");
    notes.push(parseFloat(note));
}
for (let i = 0; i < notes.length; i++) {
    AFFICHER("Note " + (i + 1) + ": " + notes[i]);
}