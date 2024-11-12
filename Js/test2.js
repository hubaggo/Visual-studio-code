function finnAlder() {

    let tall1 = Number(prompt("Hva er det første tallet?", ""));
    let tall2 = Number(prompt("Hva er det andre tallet?", ""));
    let navn = prompt("Hva er navnet ditt?", "");
    let alder = (tall1 + tall2);

    document.getElementById("finnAlder").innerHTML = navn + ", du er " + alder + " år gammel!";
}
