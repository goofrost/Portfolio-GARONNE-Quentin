// Cet algorithme cree un tableau d'entiers fifi de longueur 8. Il represente la suite de Fibonacci ou chaque nombre est la somme des deux nombres precedents. Cet algorithme le fait dans 1 boucle et affiche le resultat dans une autre // 
// Voici l'algorithme simplifie //
VARIABLES
TABLEAU D'ENTIERS fifi[8]
ENTIER i
DEBUT
  fifi[0] <-- 0
  fifi[1] <-- 1
  POUR i allant de 2 à 7
    fifi[i] <-- fifi[i - 1] + fifi[i - 2]
  FIN POUR
  POUR i allant de 0 à 7
    ECRIRE fifi[i]
  FIN POUR
FIN
