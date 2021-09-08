console.log("1 --------------Ucfirst------------------"); 

function Ucfirst(mot){

    return mot.charAt(0).toUpperCase() + mot.slice(1);
}

//test de la fonction Ucfirst
console.log(Ucfirst('hello world')); 

console.log("2 ----------Capitalize----------------------"); 

function Capitalize(mot) {

    var tableau = mot.split();

    var upperCase = tableau.map(function(word) {

      return Ucfirst(word);
      
    });
    return upperCase.join(" ");
  }


//test de la fonction Capitalize
console.log(Capitalize('hello world')); 
console.log("3 -------CamelCase-------------------------"); 



function CamelCase(mot){

    return Capitalize(mot).replace(/\s+/, '');
}

//test de la fonction CamelCase
console.log(CamelCase('hello world')); 
console.log("4 ----------Verlan----------------------");


function Verlan(mot){
    

    var tableau = mot.toLowerCase().split(/\s+/);


   var newMot = tableau.map(function(word) {

    return word.split('').reverse().join('');
    
  });

   return newMot.join(" ");
}

//test de la fonction Verlan
console.log(Verlan('hello world')); 
console.log("5 -----------Snake_case---------------------");


function Snake_case(mot){
    return mot.replace(" ","_");
}

//test de la fonction Snake_case
console.log(Snake_case('hello world')); 
console.log("6 -----------Yoda---------------------");

function Yoda(mot){

    var tableau = mot.toLowerCase().split(/\s+/);

        tableau.reverse();

    return tableau.join(" ");
}

//test de la fonction Yoda
console.log(Yoda('hello world')); 


console.log("7 ---------chiffrement-----------------------");


// Cryptage (uniquement les voyelles)

// anaconda => 4n4c0nd4


function chiffrement(mot){

    var encodage = [
        {key:"4", value:"a"},
        {key:"2", value:"e"},
        {key:"1", value:"i"},
        {key:"0", value:"o"},
        {key:"3", value:"u"},
        {key:"8", value:"y"}
    
    ];



   var tableau = mot.split();


   var chiffre = tableau.map(function(word) {

    for (let p = 0; p < encodage.length; p++) {

        for (let i = 0; i < word.length; i++) {

            if(word[i] === encodage[p].value) {
               word = word.replace(word[i], encodage[p].key);
            }
        }
    }
    return word;
  });

   return chiffre.join(" ");
    
}

//test de la fonction chiffrement
console.log(chiffrement('anaconda')); 