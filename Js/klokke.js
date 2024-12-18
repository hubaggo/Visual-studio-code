function klokke() {
    let date = new Date();
    let t = date.getHours();
    let m = date.getMinutes();

    let tid = "Klokken var " + t + ":" + m + " da du åpnet denne nettsiden";

    console.log(tid)

    document.getElementById("klokke").innerText = tid
}

klokke();