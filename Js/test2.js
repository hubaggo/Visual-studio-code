document.getElementById("play").addEventListener("click", play)

let humanScore = 0
let computerScore = 0
 
function play() {
    const choices = ["stein", "papir", "saks"]
    let value = document.getElementById("choice").value
    let robot = choices[Math.floor(Math.random() * 3)]
    if (!choices.includes(value)) {
        console.log("Not valid choice")
    }
    if (value === robot) {
        console.log("Tie")
        document.getElementById("result").innerText="Tie"
    }
    else if (value === "stein" & robot === "saks") {
        console.log("Player won")
        document.getElementById("result").innerText="Player won"
        humanScore++
        
    }
    else if (value === "papir" & robot === "stein") {
        console.log("Player won")
        document.getElementById("result").innerText="Player won"
        humanScore++
    }
    else if (value === "saks" & robot === "papir") {
        console.log("Player won")
        document.getElementById("result").innerText="Player won"
        humanScore++
    }
    else {
        console.log("Robot won")
        document.getElementById("result").innerText="Robot won"
        computerScore++
    }
    document.getElementById("humanScore").innerText="Player score: " + humanScore
    document.getElementById("computerScore").innerText="Robot score: " + computerScore
}