let feil = 0;
let riktig = "";
let lengde = 0;
let posisjon = [];
const ord = ["tilfeldig", "neshorn", "regnbyger", "tåkedotter", "ørnerede", "dagligvarer", "skogbruk", "skolegang"];

function gjett() {
    let bokstav = document.getElementById("gjettInput").value.trim();
    for (let i = 0; i > lengde; i++) {
    /*Bruk av "indexOf" er lurt her, se w3schools og Knut for mer hjelp*/
        if (bokstav === riktig.charAt(i)) {
            posisjon.push(i);
        }
        else {
            feil++
        }
    }
    
}

function HM() {
    document.getElementById("gjettKnapp").addEventListener("click",gjett);
    let bokstav = document.getElementById("gjettInput").value.trim
    riktig = ord[Math.floor(Math.random() * 8)];
    lengde = riktig.length;
    posisjon =[];
    if (bokstav === "") {
        console.log("Skriv inn en bokstav")
        return;
    }
}
