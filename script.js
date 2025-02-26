let clicks = 0
let spentClicks = 0
let GamblerPrice = 1000
let multPrice = 10
let multiplier = 1
let passivePrice = 100
let passiveClickers = 0


function addToMuliplyer() {
    if (clicks >= multPrice) {
        spentClicks = spentClicks - multPrice;
        clicks = clicks - multPrice;
        multiplier++
        multPrice = Math.ceil(multPrice * 1.5 - 3)
    }
    return [multiplier, clicks, multPrice, spentClicks]
}

function count() {
    addedAmount = 1 * multiplier;
    clicks += addedAmount;
    return clicks
}

function passiveClickerP1() {
    if (clicks >= passivePrice) {
        spentClicks = spentClicks - passivePrice;
        clicks = clicks - passivePrice;
        passiveClickers++
        passivePrice = Math.ceil(passivePrice * 1.7 - 2)
    }
    return [passiveClickers, clicks, passivePrice, spentClicks]
}

function Gambler() {
    if (clicks >= GamblerPrice) {
        spentClicks = spentClicks - GamblerPrice;
        clicks = clicks - GamblerPrice;
        clicks = clicks + Math.abs(Math.floor((Math.random() * 5000) - 3700))
        GamblerPrice = Math.ceil((Math.random() * 10) * 400)
        return [clicks, GamblerPrice]
    }
}

function progressBar() {
    let progBar = document.getElementById("progress");
    progBar.value = clicks;
}

function cheat() {
    let inputThing = document.getElementById("cheatText").value

    if (inputThing == "click") {
        clicks += 100000
        document.getElementById("CheatButton").innerHTML = "Success!"
    } else if (inputThing == "win") {
        clicks += 1000000
    } else if (inputThing == "reset") {
        multPrice = 10
        multiplier = 1
        clicks = 0
        passiveClickers = 0
        passivePrice = 100
        spentClicks = 0
        GamblerPrice = 1000
    } else {
        document.getElementById("CheatButton").innerHTML = "?"
    }
    return [clicks, multPrice, multiplier, passiveClickers, spentClicks, GamblerPrice]
}

function restore() {
    multPrice = parseInt(localStorage.getItem("multPrice"));
    multiplier = parseInt(localStorage.getItem("multiplier"));
    clicks = parseInt(localStorage.getItem("clicks"));
    passiveClickers = parseInt(localStorage.getItem("passiveClickers"));
    passivePrice = parseInt(localStorage.getItem("passivePrice"));
    spentClicks = parseInt(localStorage.getItem("spentClicks"));
    GamblerPrice = parseInt(localStorage.getItem("GamblerPrice"));
    return [clicks, multPrice, multiplier, passiveClickers, spentClicks, GamblerPrice];
}

function save() {
    localStorage.setItem("clicks", clicks.toString());
    localStorage.setItem("spentClicks", spentClicks.toString());
    localStorage.setItem("GamblerPrice", GamblerPrice.toString());
    localStorage.setItem("multPrice", multPrice.toString());
    localStorage.setItem("multiplier", multiplier.toString());
    localStorage.setItem("passivePrice", passivePrice.toString());
    localStorage.setItem("passiveClickers", passiveClickers.toString());
}

function updateDisplay() {
    let fixedSpentClicks = spentClicks * -1
    document.getElementById("count").innerHTML = `cookie clicks is ${clicks} clicks`
    document.getElementById("spent").innerHTML = `spent clicks is ${fixedSpentClicks} clicks`
    document.getElementById("Gambler").innerHTML = `Gambler price is ${GamblerPrice} clicks`
    document.getElementById("multPrice").innerHTML = `multiplier price is ${multPrice} clicks`
    document.getElementById("multiplier").innerHTML = `Mulitplier is ${multiplier}x`
    document.getElementById("passiveClickerPrice").innerHTML = `passive clicker price is ${passivePrice} clicks`
    document.getElementById("passiveClicker").innerHTML = `Passive Clickers is ${passiveClickers}`
    let compoundedClicks = passiveClickers * 1
    clicks = clicks + compoundedClicks
    progressBar()

    return clicks
}

setInterval(updateDisplay, 100)

// const worker = Worker("counter.js")