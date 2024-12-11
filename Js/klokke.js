function klokke() {
    let date = new Date();
    let t = date.getHours();
    let m = date.getMinutes();

    let tid = "Klokken er " + t + ":" + m;

    console.log(tid)

    document.getElementById("klokke").innerText = tid
}

klokke();