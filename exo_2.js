function PassSanitaire(QRCODE){

    var message = "nombre de QR n'est pas suffisant";
    
    if (QRCODE >= 2){
        
        message = "nombre de QR est suffisant";
    
    }


    return message;
    }
    
//test fonction
    
console.log("1- "+PassSanitaire(1));

function Ismajeur(age){

    return (age > 17 ? 'tu es majeur': "tu n'es pas majeur");
}

console.log("20 ans "+ Ismajeur(20));
console.log("16 ans "+ Ismajeur(16));

console.log("-------------------------------------------")


function getDayFonction(valeur)
    {
      var day;    
      
      switch(valeur)
      {
        case 0:
          day="Dimanche";
          break;
        case 1:
          day="Lundi";
          break;
        case 2:
          day="Mardi";
          break;
        case 3:
          day="Mercredi";
          break;
        case 4:
          day="Jeudi";
          break;
        case 5:
          day="Vendredi";
          break;
        case 6:
          day="Samedi";
          break;
        default:
          day="Jour Invalide";
      }
      return day;
    }

    //test de la fonction getDate
date = new Date();

console.log("Aujourd'hui est:  ",getDayFonction(date.getDay()));

console.log("-------------------------------------------")

for (let i = 1; i <= 50; i++) {
    console.log("itération : "+i);
}

console.log("-------------------------------------------")

let maVariable = 6;

while (maVariable < 100) {

maVariable++;

}

console.log(maVariable);