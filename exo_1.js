var p1 = 13;
        var p2 = 9;
        var p3 = 8;
        var p4 = 8;
        var p5 = 5;
        var temps_min = 50;


        // Nombre episode 

        var nbreEpisode = p1 + p2 + p3 + p4 + p5;
        console.log("Le nombre episode: "+ nbreEpisode);

        var nbreMinutes = temps_min * nbreEpisode;
        console.log("Total en minute: "+ nbreMinutes + " min");

        var nbreHeures = nbreMinutes / 60;
        console.log("Total en heure: "+ nbreHeures + " Heure");

        console.log("Total en heure arrondir: "+ nbreHeures.toFixed(0) + " Heure en arrondire");

