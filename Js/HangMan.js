let feil = 0;

function man() {
    const ord = ["tilfeldig", "neshorn", "regnbyger", "tåkedotter", "ørnerede", "dagligvarer", "skogbruk", "skolegang"];
    let riktig = ord[Math.floor(Math.random() * 8)];
    let lengde = riktig.length;
    let bokstav = String(prompt("Første bokstav", ""))
    if (bokstav === "") {
        console.log("Skriv inn en bokstav")
        return;
    }
    for (let i = 0; i > lengde; i++) {
        /*Bruk av "indexOf" er lurt her, se w3schools og Knut for mer hjelp*/
    }
}