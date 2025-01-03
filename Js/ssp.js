document.getElementById("play").addEventListener("click", play);
//Poeng//
let humanScore = 0;
let computerScore = 0;
 
function play() {
    //Denne delen kode erklærer 3 nye variabler: "choices", som får verdien til arrayen, og som ikke kan endres på grunnav const//
    const choices = ["stein", "papir", "saks"];
    //"value" får verdien sin fra en id i html filen, der spilleren velger mellom stein, saks eller papir. "value" blir dermed variabelen som viser hva spilleren bestemte å ta//
    let value = document.getElementById("choice").value;
    //"robot" får sin verdi fra "choices" variabelen, og velger tilfeldig mellom de 3 verdiene i arrayen til "choices. "robot" blir dermed variabelen som hviser hva roboten har valgt
    let robot = choices[Math.floor(Math.random() * 3)];
    //Denne if-løken har ansvar om å returnere et error om noe går galt i koden
    if (!choices.includes(value)) {
        console.log("Not valid choice");
        return;
    }
    //I denne if-løken regnes det ut hvem som vant, roboten eller spilleren. Den første skjekker om "value" er det samme som "robot". Om det er det, betyr det at det er uavgjort//
    if (value === robot) {
        console.log("Uavgjort");
        //Dette setter verdien til en id i html filen//
        document.getElementById("result").innerText="Uavgjort! Vi valgte samme ting. -_-";
    }
    //I else-if delene blir det skjeket om spilleren vant, og om man har det settes "result" til en melding om at man vant, og "humanScore" variabelen økes med 1//
    else if (value === "stein" && robot === "saks") {
        console.log("Spiller vant");
        document.getElementById("result").innerText="Du vant! :(";
        humanScore++;
    }
    else if (value === "papir" && robot === "stein") {
        console.log("Spiller vant");
        document.getElementById("result").innerText="Du vant! :(";
        humanScore++;
    }
    else if (value === "saks" && robot === "papir") {
        console.log("Spiller vant");
        document.getElementById("result").innerText="Du vant! :(";
        humanScore++;
    }   
    //Siden alle andre alternativer enn at roboten vant har blitt skjeket, kan jeg bare bruke else for å skjeke dette. Her settes "result" til en melding om at roboten vant, og "robotScore" økes med 1
    else {
        console.log("Robot vant");
        document.getElementById("result").innerText="Jeg vant! :)";
        computerScore++;
    }
    //Her sendes poengsumen til html filen, og en humanScore id i html settes til "Spiller poeng: " + humanScor variabelen. Dette samme gjelder for poengsumen til roboten//
    document.getElementById("humanScore").innerText="Spiller poeng: " + humanScore;
    document.getElementById("computerScore").innerText="Robot poeng: " + computerScore;
}