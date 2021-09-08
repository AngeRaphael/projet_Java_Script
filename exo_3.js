//0) Récupérer les Nom des Pokémon (gen1) afin de les mettre sous forme d’Array

let gen1 = [
    "Bulbizarre",
    "Herbizarre",
    "Florizarre",
    "Salamèche",
    "Reptincel",
    "Dracaufeu",
    "Carapuce",
    "Carabaffe",
    "Tortank",
    "Chenipan",
    "Chrysacier",
    "Papilusion",
    "Aspicot",
    "Coconfort",
    "Dardargnan",
    "Roucool",
    "Roucoups",
    "Roucarnage",
    "Rattata",
    "Rattatac",
    "Piafabec",
    "Rapasdepic",
    "Abo",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sabelette",
    "Sablaireau",
    "Nidoran♀",
    "Nidorina",
    "Nidoqueen",
    "Nidoran♂",
    "Nidorino",
    "Nidoking",
    "Mélofée",
    "Mélodelfe",
    "Goupix",
    "Feunard",
    "Rondoudou",
    "Grodoudou",
    "Nosferapti",
    "Nosferalto",
    "Mystherbe",
    "Ortide",
    "Rafflesia",
    "Paras",
    "Parasect",
    "Mimitoss",
    "Aéromite",
    "Taupiqueur",
    "Triopikeur",
    "Miaouss",
    "Persian",
    "Psykokwak",
    "Akwakwak",
    "Férosinge",
    "Colossinge",
    "Caninos",
    "Arcanin",
    "Ptitard",
    "Têtarte",
    "Tartard",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Machoc",
    "Machopeur",
    "Mackogneur",
    "Chétiflor",
    "Boustiflor",
    "Empiflor",
    "Tentacool",
    "Tentacruel",
    "Racaillou",
    "Gravalanch",
    "Grolem",
    "Ponyta",
    "Galopa",
    "Ramoloss",
    "Flagadoss",
    "Magnéti",
    "Magneton",
    "Canarticho",
    "Doduo",
    "Dodrio",
    "Otaria",
    "Lamantine",
    "Tadmorv",
    "Grotadmorv",
    "Kokiyas",
    "Crustabri",
    "Fantominus",
    "Spectrum",
    "Ectoplasma",
    "Onix",
    "Soporifik",
    "Hypnomade",
    "Krabby",
    "Krabboss",
    "Voltorbe",
    "Électrode",
    "Noeunoeuf",
    "Noadkoko",
    "Osselait",
    "Ossatueur",
    "Kicklee",
    "Tygnon",
    "Excelangue",
    "Smogo",
    "Smogogo",
    "Rhinocorne",
    "Rhinoféros",
    "Leveinard",
    "Saquedeuneu",
    "Kangourex",
    "Hypotrempe",
    "Hypocéan",
    "Poissirène",
    "Poissoroy",
    "Stari",
    "Staross",
    "M. Mime",
    "Insécateur",
    "Lippoutou",
    "Élektek",
    "Magmar",
    "Scarabrute",
    "Tauros",
    "Magicarpe",
    "Léviator",
    "Lokhlass",
    "Métarmoph",
    "Évoli",
    "Aquali",
    "Voltali",
    "Pyroli",
    "Porygon",
    "Amonista",
    "Amonistar",
    "Kabuto",
    "Kaputops",
    "Ptéra",
    "Ronflex",
    "Artikodin",
    "Électhor",
    "Sulfura",
    "Minidraco",
    "Draco",
    "Dracolosse",
    "Mewtwo"
    ]
    
    let gen7 = ["Brindibou" ,"Efflèche" ,"Archéduc" ,"Flamiaou" ,"Matoufeu" ,"Félinferno" ,"Otaquin" ,"Otarlette" ,"Oratoria" ,"Picassaut" ,"Piclairon" ,"Bazoucan" ,"Manglouton" ,"Argouste" ,"Larvibule" ,"Chrysapile" ,"Lucanon" ,"Crabagarre" ,"Crabominable" ,"Plumeline" ,"Bombydou" ,"Rubombelle" ,"Rocabot" ,"Lougaroc" ,"Froussardine" ,"Vorastérie" ,"Prédastérie" ,"Tiboudet" ,"Bourrinos" ,"Araqua" ,"Tarenbulle" ,"Mimantis" ,"Floramantis" ,"Spododo" ,"Lampignon" ,"Tritox" ,"Malamandre" ,"Feunard" ,"Rondoudou" ,"Grodoudou" ,"Nosferapti" ,"Nosferalto" ,"Mystherbe" ,"Ortide" ,"Rafflesia" ,"Paras" ,"Parasect" ,"Mimitoss" ,"Aéromite" ,"Taupiqueur" ,"Triopikeur" ,"Miaouss" ,"Persian" ,"Psykokwak" ,"Akwakwak" ,"Férosinge" ,"Colossinge" ,"Caninos" ,"Arcanin" ,"Ptitard" ,"Têtarte" ,"Tartard" ,"Abra" ,"Kadabra" ,"Alakazam" ,"Machoc" ,"Machopeur" ,"Mackogneur" ,"Chétiflor" ,"Boustiflor" ,"Empiflor" ,"Tentacool" ,"Tentacruel" ,"Racaillou" ,"Gravalanch" ,"Grolem" ,"Ponyta" ,"Galopa" ,"Ramoloss" ,"Flagadoss" ,"Magnéti" ,"Magneton" ,"Canarticho" ,"Doduo" ,"Dodrio" ,"Otaria" ,"Lamantine" ,"Tadmorv" ,"Tadmorv" ,"Grotadmorv" ,"Kokiyas" ,"Crustabri" ,"Fantominus" ,"Spectrum" ,"Ectoplasma" ,"Onix" ,"Soporifik" ,"Hypnomade" ,"Krabby" ,"Krabboss" ,"Voltorbe" ,"Électrode" ,"Noeunoeuf" ,"Noadkoko" ,"Osselait" ,"Ossatueur" ,"Kicklee" ,"Tygnon" ,"Excelangue" ,"Smogo" ,"Smogogo" ,"Rhinocorne" ,"Rhinoféros" ,"Leveinard" ,"Saquedeuneu" ,"Kangourex" ,"Hypotrempe" ,"Hypocéan" ,"Poissirène" ,"Poissoroy" ,"Stari" ,"Staross" ,"M. Mime" ,"Insécateur" ,"Lippoutou" ,"Élektek" ,"Magmar" ,"Scarabrute" ,"Tauros" ,"Magicarpe" ,"Léviator" ,"Lokhlass" ,"Métarmoph" ,"Évoli" ,"Aquali" ,"Voltali" ,"Pyroli" ,"Porygon" ,"Amonista" ,"Amonistar" ,"Kabuto" ,"Kaputops" ,"Ptéra" ,"Ronflex" ,"Artikodin" ,"Électhor" ,"Sulfura" ,"Minidraco" ,"Draco" ,"Dracolosse" ,"Mewtwo" ,"Mew"];
    
    //La longueur total du tableaux
    console.log("Longueur total du tableau: "+ gen1.length );
    
    //Bonjour Pikachu
    console.log("Bonjour "+ gen1[gen1.indexOf('Pikachu')])
    
    //Parcourir le tableau et afficher index et item
    gen1.forEach((item, index) => {
    
      console.log("Item: "+item) 
      console.log("Index: "+index) 
    
    })
    
    //Ulysse a la fin su tableau
    gen1.push("Ulysse");
    console.table(gen1);
    
    //Rodolphe au debut
    gen1.unshift("Rodolphe");
    console.table(gen1);
    
    // touver l'index
    console.log("L'index de Ponyta est: "+ gen1.indexOf('Ponyta'));
    
    // contatener gen1 et gen7
    let gen1_gen7 = gen1.concat(gen7);
    console.table(gen1_gen7);
    
    
    //La longueur total du tableaux
    console.log("Longueur total du tableau: "+ gen1_gen7.length );
    
    //Bonjour Ptéra et Picassaut
    console.log("Bonjour "+ gen1_gen7[gen1.indexOf('Pikachu')])
    console.log("Bonjour "+ gen1_gen7[gen1.length + gen7.indexOf('Picassaut')])
    