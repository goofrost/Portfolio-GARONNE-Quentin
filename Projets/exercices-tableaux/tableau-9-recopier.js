let tableau1 = []
let tableau2 = []
let i

for (i = 0; i < 7; i++) {
    tableau1.push(parseInt(prompt("valeur " + (i+1) + " : ")))
}
for (i = 0; i < tableau1.length; i++) {
    tableau2.push(tableau1[i])
}

AFFICHER("Tableau original : " + tableau1)
AFFICHER("Tableau copie : " + tableau2)