document.getElementById("knap").addEventListener("click", hilsen);

function hilsen() {
    let hilsenInput = document.getElementById("hilsenInput").value.trim();
    if (hilsenInput !== "") {
        document.getElementById("hilsenOutput").innerText="Hei " + hilsenInput + "! På denne nettsiden kan du se alle de forskjelige tingene, som jeg kan komme på, som jeg har gjort fra ungdomsskolen, helt fram til nå.";

        document.getElementById("navnInput").value = "";

    }
    else{
        document.getElementById("hilsenOutput").innerText="Du må skrive inn et gyldig navn";

        document.getElementById("navnInput").value = "";
    }
}