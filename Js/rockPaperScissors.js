const readline = require('readline');

// Sett opp readline for å hente input fra bruker
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function steinSaksPapir () {

    rl.question("Stein, Saks, Papir! Hva velger du? ", (verdispiller) => {
        let min = (1);
    let max = (3);
    let verdiAItall = Math.floor(Math.random() * (max - min + 1)) + min;

    let vstall;

    if (verdispiller === "Stein") {
        vstall = 1;
    }
    else if (verdispiller === "stein") {
        vstall = 1;
    }
    else if (verdispiller === "Saks") {
        vstall = 2;
    }
    else if (verdispiller === "saks") {
        vstall = 2;
    }
    else if (verdispiller === "Papir") {
        vstall = 3;
    }
    else if (verdispiller === "papir") {
        vstall = 3;
    }
    else {
        return "Venligst si Stein, Saks eller Papir";
    }

    let verdiAI;

    if (verdiAItall === 1) {
        verdiAI = "Stein";
    }
    else if (verdiAItall === 2) {
        verdiAI = "Saks";
    }
    else if (verdiAItall === 3) {
        verdiAI = "Papir";
    }
    console.log(verdiAI);

    if (vstall === verdiAItall) {
        console.log("Begge valgte ", verdispiller, ", så det blir uavgjort.");
    }

    else if (vstall === 1 && verdiAItall === 2) {
        console.log("Du vant! ", verdispiller, " slår ", verdiAI);
    }

    else if (vstall === 2 && verdiAItall === 1) {
        console.log("Jeg vant! ", verdiAI, " slår ", verdispiller);
    }

    else if (vstall === 2 && verdiAItall === 3) {
        console.log("Du vant! ", verdispiller, " slår ", verdiAI);
    }

    else if (vstall === 3 && verdiAItall === 2) {
        console.log("Jeg vant! ", verdiAI, " slår ", verdispiller);
    }

    else if (vstall === 3 && verdiAItall === 1) {
        console.log("Du vant! ", verdispiller, " slår ", verdiAI);
    }

    else if (vstall === 1 && verdiAItall === 3) {
        console.log("Jeg vant! ", verdiAI, " slår ", verdispiller);
    }

    rl.close();
    });

}

steinSaksPapir();