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
        console.log("Uavgjort")
        document.getElementById("result").innerText="Uavgjort! Vi valgte samme ting. -_-"
    }
    else if (value === "stein" & robot === "saks") {
        console.log("Spiller vant")
        document.getElementById("result").innerText="Du vant! :("
        humanScore++
        
    }
    else if (value === "papir" & robot === "stein") {
        console.log("Spiller vant")
        document.getElementById("result").innerText="Du vant! :("
        humanScore++
    }
    else if (value === "saks" & robot === "papir") {
        console.log("Spiller vant")
        document.getElementById("result").innerText="Du vant! :("
        humanScore++
    }
    else {
        console.log("Robot vant")
        document.getElementById("result").innerText="Jeg vant! :)"
        computerScore++
    }
    document.getElementById("humanScore").innerText="Player score: " + humanScore
    document.getElementById("computerScore").innerText="Robot score: " + computerScore
}