function formatNumber(input) {
    var value = input.value.replace(/[,.]/g, '');
    if (value === '' || isNaN(value)) {
        return;
    }
    var formattedValue = parseFloat(value).toLocaleString('it-IT');
    input.value = formattedValue;
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

function traduciNomePokemon(inputElement) {
    var inputText = inputElement.value.toLowerCase();
    var translatedText = traduzioniNomiPokemon[inputText] || inputElement.value;
    inputElement.value = translatedText;

    if (translatedText !== inputElement.value) {
        document.getElementById('VecchiaParola').value = inputElement.value;
    }

    inputElement.value = translatedText;
}

function traduciElemento(inputElement, dizionario) {
    var inputText = inputElement.value.toLowerCase();

    var translatedText = dizionario[inputText] || inputElement.value;

    if (translatedText !== inputElement.value) {
        document.getElementById('VecchiaParola').value = inputElement.value;
        inputElement.value = translatedText;
    }
}
