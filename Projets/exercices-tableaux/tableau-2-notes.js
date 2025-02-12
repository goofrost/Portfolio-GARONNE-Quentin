function genererNotesMusique(){
let notes = ["Do", "Ré", "Mi", "Fa", "Sol", "La", "Si"];
AFFICHER("Les notes de musique sont :");
    return notes ;
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
      "fonction": function(){ return genererNotesMusique().length },
      "resultat": 7,
      "nom":'Longueur tableau == 7'
    },
    {
      "fonction": function(){ return genererNotesMusique()[0] },
      "resultat": "Do",
      "nom":'Do dans 0'
    },
    {
      "fonction": function(){ return genererNotesMusique()[1] },
      "resultat": "RÃ©",
      "nom":'RÃ© dans 1'
    },    {
      "fonction": function(){ return genererNotesMusique()[2] },
      "resultat": "Mi",
      "nom":'Mi dans 2'
    },    {
      "fonction": function(){ return genererNotesMusique()[3] },
      "resultat": "Fa",
      "nom":'Fa dans 3'
    },    {
      "fonction": function(){ return genererNotesMusique()[4] },
      "resultat": "Sol",
      "nom":'Sol dans 4'
    },    {
      "fonction": function(){ return genererNotesMusique()[5] },
      "resultat": "La",
      "nom":'La dans 5'
    },    {
      "fonction": function(){ return genererNotesMusique()[6] },
      "resultat": "Si",
      "nom":'Si dans 7'
    },
  ]); 
  
  
  AFFICHER(res[0] + "/" + res[1])
  