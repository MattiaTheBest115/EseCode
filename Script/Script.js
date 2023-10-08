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

function formattanumero(input) {
    input.value = input.value.replace(/^0+/, '');

    let num = parseInt(input.value, 10);

    if (!isNaN(num)) {
        input.value = num.toString().padStart(4, '0');
    } else {
        input.value = '1';
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

document.getElementById("pokemon1").addEventListener("change", function () {
    var nomePokemon = this.value;
    FormeDisponibili(nomePokemon);
});

document.getElementById("ndex1").addEventListener("change", function () {
    var nomePokemon = document.getElementById("pokemon1").value;
    FormeDisponibili(nomePokemon);
});

function AttivazioneCasellaRegione(inputElement) {
    var valorePosizione = inputElement.value.trim().toLowerCase();

    if (parole_ambigue.includes(valorePosizione)) {
        document.getElementById("Regione").removeAttribute("disabled");
    } else {
        document.getElementById("Regione").setAttribute("disabled", "disabled");
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
    document.getElementById('forma1').value = "";
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

function FormeDisponibili(nomePokemon) {
    var select = document.getElementById("forma1");
    while (select.length > 1) {
        select.remove(1);
    }

    var ListaMega = ["Venusaur", "Blastoise", "Beedrill", "Pidgeot", "Alakazam", "Slowbro", "Gengar", "Kangaskhan", "Pinsir", "Gyarados", "Aerodactyl", "Ampharos", "Steelix", "Scizor", "Heracross", "Houndoom", "Tyranitar", "Sceptile", "Blaziken", "Swampert", "Gardevoir", "Sableye", "Mawile", "Aggron", "Medicham", "Manectric", "Sharpedo", "Camerupt", "Altaria", "Banette", "Absol", "Glalie", "Salamence", "Metagross", "Latias", "Latios", "Rayquaza", "Lopunny", "Garchomp", "Lucario", "Abomasnow", "Gallade", "Audino", "Diancie"];
    var ListaMega2 = ["Charizard", "Mewtwo"];
    var ListaArcheorisveglio = ["Kyogre", "Groudon"];
    var ListaAlola = ["Rattata", "Raticate", "Raichu", "Sandshrew", "Sandslash", "Vulpix", "Ninetales", "Diglett", "Dugtrio", "Meowth", "Persian", "Geodude", "Graveler", "Golem", "Grimer", "Muk", "Exeggutor", "Marowak"];
    var ListaUltraesplosione = ["Necrozma"];
    var ListaGalar = ["Weezing", "Zigzagoon", "Linoone", "Ponyta", "Rapidash", "Meowth", "Corsola", "Darumaka", "Darmanitan", "Articuno", "Zapdos", "Moltres"];
    var ListaGigamax = ["Venusaur", "Charizard", "Blastoise", "Butterfree", "Pikachu", "Meowth", "Machamp", "Gengar", "Kingler", "Lapras", "Eevee", "Snorlax", "Garbodor", "Melmetal", "Rillaboom", "Cinderace", "Inteleon", "Corviknight", "Orbeetle", "Drednaw", "Coalossal", "Flapple", "Appletun", "Sandaconda", "Toxtricity", "Toxtricity", "Centiskorch", "Hatterene", "Grimmsnarl", "Alcremie", "Copperajah", "Duraludon"];
    var ListaGigamax2 = ["Urshifu"];
    var ListaHisui = ["Growlithe", "Arcanine", "Electrode", "Typhlosion", "Qwilfish", "Sneasel", "Samurott", "Lilligant", "Zorua", "Zoroark", "Braviary", "Sliggoo", "Goodra", "Avalugg", "Decidueye"];
    var ListaPaldea = ["Wooper"];
    var ListaPaldea2 = ["Tauros"];
    var Pikachu_Cosplay = ["rockstar", "damigella", "confetto", "scienziata", "wrestler"];
    var Pikachu_berretto = ["Berretto Originale", "Berretto Hoenn", "Berretto Sinnoh", "Berretto Unima", "Berretto Kalos", "Berretto Alola", "Berretto Compagni", "Berretto Giramondo"];
    //CONTINUARE

    if (ListaMega.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("Mega", "M");
    }
    if (ListaMega2.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("Mega X", "MX");
        select.options[select.options.length] = new Option("Mega Y", "MY");
    }
    if (ListaArcheorisveglio.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("Archeorisveglio", "A");
    }
    if (ListaAlola.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("Alola", "A");
    }
    if (ListaUltraesplosione.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("Criniera del Vespro", "V");
        select.options[select.options.length] = new Option("Ali dell'Aurora", "A");
        select.options[select.options.length] = new Option("UltraNecrozma", "U");
    }
    if (ListaGalar.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("Galar", "G");
    }
    if (ListaGigamax.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("Gigamax", "???");
    }
    if (ListaGigamax2.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("Urshifu Buio", "???");
        select.options[select.options.length] = new Option("Urshifu Acqua", "???");
    }
    if (ListaHisui.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("Hisui", "H");
    }
    if (ListaPaldea.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("Paldea", "P");
    }
    if (ListaPaldea2.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("Varietà Combattiva", "C");
        select.options[select.options.length] = new Option("Varietà Infuocata", "I");
        select.options[select.options.length] = new Option("Varietà Acquatica", "A");
    }
    if (Pikachu_Cosplay.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("rockstar", "");
        select.options[select.options.length] = new Option("damigella", "");
        select.options[select.options.length] = new Option("confetto", "");
        select.options[select.options.length] = new Option("scienziata", "");
        select.options[select.options.length] = new Option("wrestler", "");
    }
    if (Pikachu_Cosplay.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("rockstar", "");
        select.options[select.options.length] = new Option("damigella", "");
        select.options[select.options.length] = new Option("confetto", "");
        select.options[select.options.length] = new Option("scienziata", "");
        select.options[select.options.length] = new Option("wrestler", "");
    }
    if (Pikachu_berretto.includes(nomePokemon)) {
        select.options[select.options.length] = new Option("Berretto Originale", "");
        select.options[select.options.length] = new Option("Berretto Hoenn", "");
        select.options[select.options.length] = new Option("Berretto Sinnoh", "");
        select.options[select.options.length] = new Option("Berretto Unima", "");
        select.options[select.options.length] = new Option("Berretto Kalos", "");
        select.options[select.options.length] = new Option("Berretto Alola", "");
        select.options[select.options.length] = new Option("Berretto Compagni", "");
        select.options[select.options.length] = new Option("Berretto Giramondo", "");
    }
}