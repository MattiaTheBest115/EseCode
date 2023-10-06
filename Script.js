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

function formatNumber(input) {
    input.value = input.value.replace(/[^0-9,.]/g, '');

    var value = input.value.replace(/,/g, '').replace(/\./g, '').replace(/,/g, '.');

    if (value !== '' && !isNaN(value)) {
        var formattedValue = parseFloat(value).toLocaleString('it-IT');
        input.value = formattedValue;
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

function checkLevel1(input) {
    var value = parseInt(input.value, 10);
    if (isNaN(value)) {
        input.value = 0;
    } else if (value < 0) {
        input.value = 0;
    } else if (value > 255) {
        input.value = 255;
    }
}

function changeBackgroundColor(select) {
    var selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue === "♂") {
        select.style.backgroundColor = "blue";
        select.style.color = "white";
    } else if (selectedValue === "♀") {
        select.style.backgroundColor = "red";
        select.style.color = "white";
    } else {
        select.style.backgroundColor = "";
        select.style.color = "";
    }
}

function capitalizeInput(input) {
    const inputValue = input.value;
    const capitalizedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    input.value = capitalizedValue;
}

function traduciElemento(inputElement, dizionario) {
    var inputText = inputElement.value.toLowerCase();

    var translatedText = dizionario[inputText] || inputElement.value;

    if (translatedText !== inputElement.value) {
        document.getElementById('VecchiaParola').value = inputElement.value;
        inputElement.value = translatedText;
    }
}

function immaginePokémon(inputElement) {
    var url_immaginePrefix = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    var idElement = inputElement.id;
    var Numero_Pokedex = inputElement.value;
    var immagine;
    immagine = document.getElementById("immaginepkm" + idElement.charAt(4));
    immagine.src = url_immaginePrefix + Numero_Pokedex + ".png";
}

function ValoreaModifica(inputElement) {
    var inputValue = inputElement.value.trim();
    var idlivello = ["level1", "level2", "level3", "level4", "level5", "level6"];

    if (inputValue === "" || isNaN(inputValue)) {
        if (!idlivello.includes(inputElement.id)) {
            inputElement.value = "0";
        } else {
            inputElement.value = "1";
        }
    }
}

function Numero_in_Nome(inputElement) {
    var numero_pokedex = inputElement.value;

    var nome_pokemon = document.getElementById("pokemon1");

    var translatedText = Numero_in_Nome[numero_pokedex] || inputElement.value;

    if (translatedText !== inputElement.value) {
        nome_pokemon.value = translatedText;
    }
}

function selezionaTesto(inputElement) {
    if (inputElement.value === "0") {
        inputElement.select();
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
    document.getElementById('ndex1').value = "0";
    document.getElementById('pokemon1').value = "";
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