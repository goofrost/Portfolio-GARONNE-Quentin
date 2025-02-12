let notes = [];
for (let i = 1; i <= 9; i++) {
    let note = prompt("Saisir la note " + i + ":");
    notes.push(parseFloat(note));
}

let somme = 0;
for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
}

let moyenne = somme / notes.length;
AFFICHER("La moyenne des notes est : " + moyenne);
