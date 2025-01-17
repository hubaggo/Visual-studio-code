let svar1;
let svar2;
let svar3;
let svar4;

function onload() {
    document.getElementById("gjett").addEventListener("click", quiz);

    svar1 = document.getElementById("1");
    svar2 = document.getElementById("2");
    svar3 = document.getElementById("3");
    svar4 = document.getElementById("4");
}
function quiz() {
    let poeng = 0;

    if (svar1.value === "d") {
    poeng++;
   }
   if (svar2.value === "c") {
    poeng++;
   }
   if (svar3.value === "c") {
    poeng++
   }
   if (svar4.value === "c") {
    poeng++
   }
   document.getElementById("poeng").innerText = poeng + "/4"
   //Legg til en "Litten partyfjess emoji om man vinner"
}