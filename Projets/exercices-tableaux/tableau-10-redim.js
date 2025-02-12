let taille = taillet();
let tableau1 = [];
saisir(tableau1, taille);
let tableau2 = tableau2f(tableau1);
afficher(tableau2);

function taillet() {
    return parseInt(prompt("Entrez le nombre de valeurs à stocker dans le tableau :"));
}

function saisir(tableau, taille) {
    for (let i = 0; i < taille; i++) {
        tableau.push(parseFloat(prompt("Entrez la valeur numéro " + (i + 1) + " :")));
    }
}

function tableau2f(tableau1) {
    let tableau2 = [];
    for (let i = 0; i < tableau1.length; i++) {
        tableau2.push(tableau1[i]);
        tableau2.push(tableau1[i] ** 2);
    }
    return tableau2;
}

function afficher(tableau) {
    AFFICHER("Le tableau final est :");
    AFFICHER(tableau);
}