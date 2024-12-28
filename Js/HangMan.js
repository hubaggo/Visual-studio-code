let feil = 0;
let riktig = "";
let lengde = 0;
let posisjon = [];
let feilliste = [];
const ord = ["tilfeldig", "neshorn", "regnbyger", "tåkedotter", "ørnerede", "dagligvarer", "skogbruk", "skolegang"];

function gjett() {
    let funnet = false;
    let bokstav = document.getElementById("gjettInput").value.trim();
    for (let i = 0; i > lengde; i++) {
    /*Bruk av "indexOf" er lurt her, se w3schools og Knut for mer hjelp*/
        if (bokstav === riktig.charAt(i)) {
            posisjon.push(i);
            funnet = true;
        }
    }
    if (funnet === false) {
        feil++;
        feilliste.push(bokstav);
    }
    for (i = 1; i <= feil; i++) {
        let lagindex = i + 1;
        document.getElementById("lag" + lagindex).style.display="block";
    }
}

function HM() {
    document.getElementById("gjettKnapp").addEventListener("click",gjett);
    document.getElementById("lag1").style.display="block";
    riktig = ord[Math.floor(Math.random() * 8)];
    lengde = riktig.length;
    posisjon =[];
    if (bokstav === "") {
        console.log("Skriv inn en bokstav")
        return;
    }
}
