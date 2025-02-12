let nombrevaleurs, i, valeur, valeurs, nombrenegatifs, nombrepositives

nombrevaleurs = parseInt(prompt("Entrez la longueur du tableau : "))

nombrenegatifs = 0
nombrepositives = 0

valeurs = []

for (i = 0; i < nombrevaleurs; i++) {
    valeur = parseInt(prompt("valeur " + (i+1) + " : "))
    valeurs.push(valeur)
}

for (i = 0; i < valeurs.length; i++) {
    if (valeurs[i] < 0) {
        nombrenegatifs++
    } else if (valeurs[i] > 0) {
        nombrepositives++
    }
}

AFFICHER("Nombre de valeurs négatives : " + nombrenegatifs)
AFFICHER("Nombre de valeurs positives : " + nombrepositives)