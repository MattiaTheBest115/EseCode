function impostaNdexDaPokemon(inputElement) {
    var nome_pokemon = inputElement.value.toLowerCase();

    var numero_pokedex = document.getElementById("ndex1");

    var translatedText = Nome_in_Numero[nome_pokemon] || inputElement.value;

    if (translatedText !== inputElement.value) {
        numero_pokedex.value = translatedText;
        document.getElementById("immaginepkm1").src = "https://raw.githubusercontent.com/kwsch/PKHeX/master/PKHeX.Drawing.PokeSprite/Resources/img/Artwork%20Pokemon%20Sprites/a_" + numero_pokedex.value + ".png";
    }
    else {
        numero_pokedex.value = "???";
        document.getElementById("immaginepkm1").src = "Immagini/warn.png";
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
    document.getElementById('forma1').value = "N";
}

// WIKI CODE ALLENATORE  
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

    document.getElementById("wikicode-result").textContent = `{{Squadra
|type=${Colore1} 
|type2=${Colore2} 
|pokemon=${Totale_Pokemon} 
|sprite=${Sprite_Allenatore} 
|prize=${Ricompensa} {{PDollar}} 
|class=${Classe_Allenatore} 
|name=${Nome_Allenatore} 
|game=${Gioco} 
|location=[[${Posizione}]]
`;

    const copyButton = document.getElementById("copyButton");
    const wikicodeResult = document.getElementById("wikicode-result");

    copyButton.addEventListener("click", function () {
        const range = document.createRange();
        range.selectNodeContents(wikicodeResult);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();
        copyButton.textContent = "Copiato";
        setTimeout(function () {
            copyButton.textContent = "Copia";
        }, 2000);
    });
});

// WIKI CODE SQUADRA
document.getElementById('genWikiCodeSquadra').addEventListener('click', function () {
    const Numero_Pokemon = document.getElementById("Numero_Pokemon").value;
    const Generazione = document.getElementById("Generazione").value;
    const Nome_Gioco = document.getElementById("NomeGioco").value;
    const ndex = document.getElementById("ndex1").value;
    const Forma = document.getElementById("forma1").value;
    const Pokemon = document.getElementById("pokemon1").value;
    const Livello = document.getElementById("livello1").value;
    const Sesso = document.getElementById("sesso1").value;
    const Abilita = document.getElementById("abilita1").value;
    const Strumento = document.getElementById("strumenti1").value;
    const PokemonTipo1 = document.getElementById("PKMtipo1").value;
    const PokemonTipo2 = document.getElementById("PKMtipo2").value;
    const Mossa1 = document.getElementById("mossa1").value;
    const Tipo1 = document.getElementById("tipo1").value;
    const Categoria1 = document.getElementById("categoria1").value;
    const Mossa2 = document.getElementById("mossa2").value;
    const Tipo2 = document.getElementById("tipo2").value;
    const Categoria2 = document.getElementById("categoria2").value;
    const Mossa3 = document.getElementById("mossa3").value;
    const Tipo3 = document.getElementById("tipo3").value;
    const Categoria3 = document.getElementById("categoria3").value;
    const Mossa4 = document.getElementById("mossa4").value;
    const Tipo4 = document.getElementById("tipo4").value;
    const Categoria4 = document.getElementById("categoria4").value;

    document.getElementById("wikicode-result").textContent = ` 
|pokemon${Numero_Pokemon}={{Pokémon|gen=${Generazione}
|game=${NomeGioco}
|ndex=${ndex}${Forma}
|pokemon=${Pokemon}
|ability=${Abilita}
|held=${Strumento}
|level=${Livello}
|gender=${Sesso}
|type1=${PokemonTipo1}
|type2=${PokemonTipo2}
|move1=${Mossa1}|move1type=${Tipo1}|move1cat=${Categoria1}
|move2=${Mossa2}|move2type=${Tipo2}|move2cat=${Categoria2}
|move3=${Mossa3}|move3type=${Tipo3}|move3cat=${Categoria3}
|move4=${Mossa4}|move4type=${Tipo4}|move4cat=${Categoria4}
}}

`;

    const copyButton = document.getElementById("copyButton");
    const wikicodeResult = document.getElementById("wikicode-result");

    copyButton.addEventListener("click", function () {
        const range = document.createRange();
        range.selectNodeContents(wikicodeResult);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();
        copyButton.textContent = "Copiato";
        setTimeout(function () {
            copyButton.textContent = "Copia";
        }, 2000);
    });
});