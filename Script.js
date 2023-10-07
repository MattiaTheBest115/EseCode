document.getElementById('genWikiCodeAllenatore').addEventListener('click', function () {

    const Nome_Allenatore = document.getElementById("NomeAllenatore").value;
    const Classe_Allenatore = document.getElementById("ClasseAllenatore").value;
    const Sprite_Allenatore = document.getElementById("SpriteAllenatore").value;
    const Colore1 = document.getElementById("Colore1").value;
    const Colore2 = document.getElementById("Colore2").value;
    const Totale_Pokemon = document.getElementById("TotalePokemon").value;
    const Gioco = document.getElementById("Gioco").value;
    const Ricompensa = document.getElementById("Ricompensa").value;
    const Posizione = document.getElementById("Posizione").value;
    const Regione = document.getElementById("Regione").value;

    const WikiCodeAllenatore = `{{Squadra
|type=${Colore1}
|type2=${Colore2}
|pokemon=${Totale_Pokemon}
|sprite=${Sprite_Allenatore}
|prize=${Ricompensa} {{PDollar}}
|class=${Classe_Allenatore}
|name=${Nome_Allenatore}
|game=${Gioco}
|location=[[${Posizione}]]
}}`;

    document.getElementById("wikicode-result").textContent = WikiCodeAllenatore;
});

function impostaNdexDaPokemon(inputElement) {
    var nome_pokemon = inputElement.value.toLowerCase();

    var numero_pokedex = document.getElementById("ndex1");

    var translatedText = Nome_in_Numero[nome_pokemon] || inputElement.value;

    if (translatedText !== inputElement.value) {
        numero_pokedex = translatedText;
    }
}

function impostaNomeDaNdex(inputElement) {
    var numero_pokedex = inputElement.value;

    var nome_pokemon = document.getElementById("pokemon1");

    var translatedText = Numero_in_Nome[numero_pokedex] || inputElement.value;

    if (translatedText !== inputElement.value) {
        nome_pokemon.value = translatedText;
    }
    else {
        nome_pokemon.value = "???";
    }
}

function selezionaTesto(inputElement) {
    inputElement.select();
}

function capitalizeInput(input) {
    const inputValue = input.value;
    const capitalizedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    input.value = capitalizedValue;
}

function formatNumber(input) {
    input.value = input.value.replace(/[^0-9,.]/g, '');

    var value = input.value.replace(/,/g, '').replace(/\./g, '').replace(/,/g, '.');

    if (value !== '' && !isNaN(value)) {
        var formattedValue = parseFloat(value).toLocaleString('it-IT');
        input.value = formattedValue;
    }
}

function ValidaLivello(inputElement) {
    var inputValue = inputElement.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');

    var min = parseInt(inputElement.min);
    var max = parseInt(inputElement.max);
    var numericValue = parseInt(inputValue);

    if (isNaN(numericValue)) {
        inputElement.value = '';
    } else if (numericValue < min) {
        inputElement.value = min;
    } else if (numericValue > max) {
        inputElement.value = max;
    } else {
        inputElement.value = numericValue;
    }
}

function ValoreAzero(inputElement) {
    var valore = inputElement.value;

    if (valore === "") {
        inputElement.value = "0";
    }
}

function ValoreAuno(inputElement) {
    var valore = inputElement.value;

    if (valore === "" && document.getElementById("ndex1").id === "ndex1") {
        inputElement.value = "1";
        immaginePokémon();
        document.getElementById("pokemon1").value = "Bulbasaur";
    }
    else if (valore === "" && document.getElementById("level1").id === "level1") {
        inputElement.value = "1";
    }
}

function impostaBulbasaur(inputElement) {
    if (inputElement.value.trim() === '') {
        inputElement.value = "Bulbasaur";
        document.getElementById("immaginepkm1").src = "https://raw.githubusercontent.com/kwsch/PKHeX/master/PKHeX.Drawing.PokeSprite/Resources/img/Artwork%20Pokemon%20Sprites/a_1.png";
        document.getElementById("ndex1").value = "1";
    }
}

function traduciElemento(inputElement, dizionario) {
    var inputText = inputElement.value.toLowerCase();

    var translatedText = dizionario[inputText] || inputElement.value;

    if (translatedText !== inputElement.value) {
        document.getElementById('VecchiaParola').value = inputElement.value;
        inputElement.value = translatedText;
    }
}

function immaginePokémon() {
    var url_immaginePrefix = "https://raw.githubusercontent.com/kwsch/PKHeX/master/PKHeX.Drawing.PokeSprite/Resources/img/Artwork%20Pokemon%20Sprites/a_";
    var idElement = document.getElementById("ndex1");
    var Numero_Pokedex = idElement.value;
    var immagine = document.getElementById("immaginepkm1");

    if (immagine.src !== "https://raw.githubusercontent.com/kwsch/PKHeX/master/PKHeX.Drawing.PokeSprite/Resources/img/Artwork%20Pokemon%20Sprites/a_.png") {
        if (Numero_Pokedex !== "0" && Numero_Pokedex !== "") {
            immagine.src = url_immaginePrefix + Numero_Pokedex + ".png";
        }
    }
}

function immagineNonTrovata() {
    var immagine = document.getElementById("immaginepkm1");
    immagine.src = "Immagini/warn.png";
}

function puliziaAllenatore() {
    // Allenatore
    document.getElementById('DizionarioVeloce').value = "";
    document.getElementById('VecchiaParola').value = "";
    document.getElementById('NomeAllenatore').value = "";
    document.getElementById('ClasseAllenatore').value = "";
    document.getElementById('Sprite').value = "";
    document.getElementById('Colore1').value = "";
    document.getElementById('Colore2').value = "";
    document.getElementById('TotalePokemon').value = "1";
    document.getElementById('Gioco').value = "";
    document.getElementById('Ricompensa').value = "0";
    document.getElementById('posizione').value = "";
    document.getElementById('region').value = "";
}

function puliziaSquadra() {
    // Pokémon
    document.getElementById('immaginepkm1').src = "https://raw.githubusercontent.com/kwsch/PKHeX/master/PKHeX.Drawing.PokeSprite/Resources/img/Artwork%20Pokemon%20Sprites/a_1.png";
    document.getElementById('ndex1').value = "1";
    document.getElementById('pokemon1').value = "Bulbasaur";
    document.getElementById('level1').value = "1";
    document.getElementById('sesso1').value = "♂";
    document.getElementById('ability1').value = "";
    document.getElementById('item1').value = "";
    document.getElementById('pk1move1').value = "";
    document.getElementById('pk1type1').value = "";
    document.getElementById('pk1cat1').value = "Speciale";
    document.getElementById('pk1move2').value = "";
    document.getElementById('pk1type2').value = "";
    document.getElementById('pk1cat2').value = "Speciale";
    document.getElementById('pk1move3').value = "";
    document.getElementById('pk1type3').value = "";
    document.getElementById('pk1cat3').value = "Speciale";
    document.getElementById('pk1move4').value = "";
    document.getElementById('pk1type4').value = "";
    document.getElementById('pk1cat4').value = "Speciale";
    document.getElementById('pkm1type1').value = "";
    document.getElementById('pkm1type2').value = "";
    document.getElementById('pk1form1').value = "N";
}