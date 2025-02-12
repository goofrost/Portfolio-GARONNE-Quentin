function genererVoyelles(){
let voyelles = ["a","e","i", "o","u","y"];
    return voyelles ;

}

  /*----NE RIEN MODIFIER CI-DESSOUS------*/
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
      "fonction": function(){ return genererVoyelles().length },
      "resultat": 6,
      "nom":'Longueur tableau == 6'
    },
    {
      "fonction": function(){ return genererVoyelles()[0] },
      "resultat": "a",
      "nom":'a dans 0'
    },
    {
      "fonction": function(){ return genererVoyelles()[1] },
      "resultat": "e",
      "nom":'e dans 1'
    },    {
      "fonction": function(){ return genererVoyelles()[2] },
      "resultat": "i",
      "nom":'i dans 2'
    },    {
      "fonction": function(){ return genererVoyelles()[3] },
      "resultat": "o",
      "nom":'o dans 3'
    },    {
      "fonction": function(){ return genererVoyelles()[4] },
      "resultat": "u",
      "nom":'u dans 4'
    },    {
      "fonction": function(){ return genererVoyelles()[5] },
      "resultat": "y",
      "nom":'y dans 5'
    },
  ]); 
  
  
  AFFICHER(res[0] + "/" + res[1])
  