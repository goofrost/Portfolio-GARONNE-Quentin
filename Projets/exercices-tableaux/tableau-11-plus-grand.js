let tab = []
let tab2 = []
let n = parseInt(LIRE("Entrez le nombre de valeur du tableau : "))
let i = 0
AFFICHER(n)
for (let x = 0; x <= n-1; x = x + 1){
    i = parseInt(LIRE("Entrez une valeur : "))
    tab[x] = i
}
for (let y = 0; y <= n-1; y = y + 1){
    tab2[2*y] = tab[y]
    tab2[2*y+1] = tab[y]*tab[y]
}
AFFICHER(tab2)
let max = 0
for (let z = 0; z <= n-1; z = z + 1){
    if (tab2[z*2+1] > tab2[max]){
        max = z*2+1
    }
}
AFFICHER("La valeur maximum du second tableau est ",tab2[max]," qui a pour indice ",max," dans le tableau")