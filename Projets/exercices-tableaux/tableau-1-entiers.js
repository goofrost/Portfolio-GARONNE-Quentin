function genererTableau(){
let tableau = [];
for (let i = 0; i < 20; i++) {
    tableau.push(-1);
}
return tableau ;
}

function tester(t){
    let fonction = t.fonction
    let res = t.resultat
    if (fonction() == res){

      AFFICHER("SUCCES : " + t.nom)
      return 1;
    } else {
      AFFICHER("ECHEC  : " + t.nom)
      return 0;
    }
}

function lance_tests(tests){
  let compteur = 0;
  let reussite = 0;
  for(const t of tests){
    reussite = reussite + tester(t);
    compteur = compteur + 1
  }
  return [reussite, compteur]
}

let res = lance_tests([
  {
    "fonction": function(){ return genererTableau().length },
    "resultat": 20,
    "nom":'Longueur tableau == 20'
  },
  {
    "fonction": function(){ return genererTableau()[0] },
    "resultat": -1,
    "nom":'-1 dans 0'
  },
  {
    "fonction": function(){ let check = genererTableau().length == 20; for(const val of genererTableau()) {val == -1 && check} ; return check   },
    "resultat": true,
    "nom":'Toutes les valeurs Ã  -1'
  },
]); 


AFFICHER(res[0] + "/" + res[1])

