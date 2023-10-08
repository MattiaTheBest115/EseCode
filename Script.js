function impostaNdexDaPokemon(inputElement) {
    var nomePokemon = inputElement.value.trim().toLowerCase();

    var numeroPokedex = document.getElementById("ndex1");

    if (Nome_in_Numero.hasOwnProperty(nomePokemon)) {
        var numeroCorrispondente = Nome_in_Numero[nomePokemon];
        numeroPokedex.value = numeroCorrispondente;
        var immagineURL = "https://raw.githubusercontent.com/kwsch/PKHeX/master/PKHeX.Drawing.PokeSprite/Resources/img/Artwork%20Pokemon%20Sprites/a_" + numeroCorrispondente + ".png";
        document.getElementById("immaginepkm1").src = immagineURL;
    } else {
        numeroPokedex.value = "000";
        document.getElementById("immaginepkm1").src = "Immagini/warn.png";
    }
}

function impostaNomeDaNdex(inputElement) {
    var numeroPokedex = inputElement.value;

    var nomePokemon = document.getElementById("pokemon1");

    if (Numero_in_Nome.hasOwnProperty(numeroPokedex)) {
        var nomeCorrispondente = Numero_in_Nome[numeroPokedex];

        nomePokemon.value = nomeCorrispondente;

        var immagineURL = "https://raw.githubusercontent.com/kwsch/PKHeX/master/PKHeX.Drawing.PokeSprite/Resources/img/Artwork%20Pokemon%20Sprites/a_" + numeroPokedex + ".png";

        document.getElementById("immaginepkm1").src = immagineURL;
    } else {
        nomePokemon.value = "???";
        document.getElementById("immaginepkm1").src = "Immagini/warn.png";
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

function formattanumero(input) {
    input.value = input.value.replace(/^0+/, '');

    let num = parseInt(input.value, 10);

    if (!isNaN(num)) {
        input.value = num.toString().padStart(4, '0');
    } else {
        input.value = '1';
    }
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
}

function livelloa1(inputElement) {
    var valore = inputElement.value;

    if (inputElement.value === "") {
        inputElement.value = "1";
    }
}

function traduciElemento(inputElement, dizionario) {
    var inputText = inputElement.value.trim().toLowerCase();

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

function impostaBulbasaur(inputElement) {
    if (inputElement.value.trim() === '') {
        inputElement.value = "Bulbasaur";
        document.getElementById("immaginepkm1").src = "https://raw.githubusercontent.com/kwsch/PKHeX/master/PKHeX.Drawing.PokeSprite/Resources/img/Artwork%20Pokemon%20Sprites/a_1.png";
        document.getElementById("ndex1").value = "1";
    }
}

function AttivazioneCasellaRegione(inputElement) {
    var valorePosizione = inputElement.value.trim().toLowerCase();

    if (parole_ambigue.includes(valorePosizione)) {
        document.getElementById("Regione").removeAttribute("disabled");
    } else {
        document.getElementById("Regione").setAttribute("disabled", "disabled");
    }
}

function puliziaAllenatore() {
    // Allenatore
    document.getElementById("NomeAllenatore").value = "";
    document.getElementById("ClasseAllenatore").value = "";
    document.getElementById("SpriteAllenatore").value = "";
    document.getElementById("Colore1").value = "";
    document.getElementById("Colore2").value = "";
    document.getElementById("TotalePokemon").value = "1";
    document.getElementById("Gioco").value = "";
    document.getElementById("Ricompensa").value = "0";
    document.getElementById("Posizione").value = "";
    document.getElementById("Regione").value = "";
}

function puliziaSquadra() {
    document.getElementById('Numero_Pokemon').value = " ";
    document.getElementById('Generazione').value = "-";
    document.getElementById('NomeGioco').value = "";
    document.getElementById('immaginepkm1').src = "https://raw.githubusercontent.com/kwsch/PKHeX/master/PKHeX.Drawing.PokeSprite/Resources/img/Artwork%20Pokemon%20Sprites/a_1.png";
    document.getElementById('ndex1').value = "1";
    document.getElementById('pokemon1').value = "Bulbasaur";
    document.getElementById('livello1').value = "1";
    document.getElementById('sesso1').value = "♂";
    document.getElementById('abilita1').value = "";
    document.getElementById('strumenti1').value = "";
    document.getElementById('mossa1').value = "";
    document.getElementById('tipo1').value = "";
    document.getElementById('categoria1').value = "Speciale";
    document.getElementById('mossa2').value = "";
    document.getElementById('tipo2').value = "";
    document.getElementById('categoria2').value = "Speciale";
    document.getElementById('mossa3').value = "";
    document.getElementById('tipo3').value = "";
    document.getElementById('categoria3').value = "Speciale";
    document.getElementById('mossa4').value = "";
    document.getElementById('tipo4').value = "";
    document.getElementById('categoria4').value = "Speciale";
    document.getElementById('PKMtipo1').value = "";
    document.getElementById('PKMtipo2').value = "";
    document.getElementById('forma1').value = "";
}

document.getElementById("pokemon1").addEventListener("change", function () {
    var nomePokemon = this.value;
    FormeDisponibili(nomePokemon);
});

document.getElementById("ndex1").addEventListener("change", function () {
    var nomePokemon = document.getElementById("pokemon1").value;
    FormeDisponibili(nomePokemon);
});