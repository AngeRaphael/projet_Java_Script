//Declaration des variables

//Definition de la fonction : 

//Creation objet Pikachou
let Pikachu =  new Object();

//Ajouter des propriete
Pikachu.statistique = { 
    pv: 3,
    attaque: 55,
    defense: 4,
    attaque_spe: 5,
    defense_spe: 5,
    vitesse: 90
 };


 Pikachu.attaque = 
[
     "Boule Elek",
    "Cage Eclaire",
    "Camaraderie",
    "Charme",
    "Coup d'jus",
    "Double Pied",
    "Doux Baiser",
    "Eclair",
    "Eclair Fou",
    "Etincelle",
    "Fatal-Foudre"
];

Pikachu.espece = [ "Souris"];


 //afficher l'objet
 console.log('My objet: ', Pikachu);



 //Parcourir l'objet avec object.entries
 for (const [key, value] of Object.entries(Pikachu)) {
    console.log(`${key}: ${value}`);
  }


console.log(); 

