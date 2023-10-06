document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");
    const form = document.getElementById("pokemon-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const NomeAllenatore = document.getElementById("NomeAllenatore").value;
        const Sprite = document.getElementById("Sprite").value;
        const ClasseAllenatore = document.getElementById("ClasseAllenatore").value;
        const TotalePokemon = document.getElementById("TotalePokemon").value;
        const Colore1 = document.getElementById("Colore1").value;
        const Colore2 = document.getElementById("Colore2").value;
        const Ricompensa = document.getElementById("Ricompensa").value;
        const Gioco = document.getElementById("Gioco").value;
        const Posizione = document.getElementById("posizione").value;

        // NON CAMBIARE FORMATTAZIONE
        const wikicode = `{{Squadra
|type=${Colore1}
|type2=${Colore2}
|pokemon=${TotalePokemon}
|sprite=${Sprite}
|prize=${Ricompensa} {{PDollar}}
|class=${ClasseAllenatore}
|name=${NomeAllenatore}
|game=${Gioco}
|location=[[${Posizione}]]
`;
        document.getElementById("wikicode-result").textContent = wikicode;

        copyButton.addEventListener("click", function copyToClipboard() {
            const tempInput = document.createElement("textarea");
            tempInput.value = wikicode;
            document.body.appendChild(tempInput);

            tempInput.select();
            tempInput.setSelectionRange(0, 99999);

            document.execCommand("copy");
            document.body.removeChild(tempInput);

            copyButton.textContent = "Copiato!";
            setTimeout(function () {
                copyButton.textContent = "Copia";
            }, 2000);

            copyButton.removeEventListener("click", copyToClipboard);
        });
    });
});

function selezionaTesto(inputElement) {
    inputElement.select();
}

function formatNumber(input) {
    input.value = input.value.replace(/[^0-9,.]/g, '');

    var value = input.value.replace(/,/g, '').replace(/\./g, '').replace(/,/g, '.');

    if (value !== '' && !isNaN(value)) {
        var formattedValue = parseFloat(value).toLocaleString('it-IT');
        input.value = formattedValue;
    }
}

function ValoreaModifica(inputElement) {
    var inputValue = inputElement.value.trim();
    var idlivello = ["level1", "level2", "level3", "level4", "level5", "level6"];
    var idndex = ["ndex2", "ndex2", "ndex2", "ndex2", "ndex2", "ndex2"];
    var Ricompensa = document.getElementById("Ricompensa");

    if (inputValue === "" || isNaN(inputValue)) {
        if (!idlivello.includes(inputElement.id) || !idndex.includes(inputElement.id)) {
            inputElement.value = "1";
        }
    }
    else if (inputElement.id === "ndex1" && (inputValue === "0" || inputValue === "1")) {
        inputElement.value = "1";
        immaginePokémon(1);
    }
    else if (Ricompensa === "Ricompensa" && inputvalue === "") {
        inputElement.value = "0";
    }
}

function controlloNome(inputElement) {
    var inputValue = inputElement.value.trim();
    if (inputValue.value === "") {
        inputElement.value = "Bulbasaur";
    }
}

function validateInput(inputElement) {
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

function capitalizeInput(input) {
    const inputValue = input.value;
    const capitalizedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    input.value = capitalizedValue;
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


function traduciElemento(inputElement, dizionario) {
    var inputText = inputElement.value.toLowerCase();

    var translatedText = dizionario[inputText] || inputElement.value;

    if (translatedText !== inputElement.value) {
        document.getElementById('VecchiaParola').value = inputElement.value;
        inputElement.value = translatedText;
    }
}

function NumeroInNome(inputElement) {
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

function NomeInNumero(inputElement) {
    var numero_pokedex = inputElement.value.toLowerCase();

    var nome_pokemon = document.getElementById("ndex1");

    var translatedText = Nome_in_Numero[numero_pokedex] || inputElement.value;

    if (translatedText !== inputElement.value) {
        nome_pokemon.value = translatedText;
    }
    else {
        nome_pokemon.value = "???";
    }
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