let multPrice = 10
let multiplier = 1
let clicks = 0
let passiveClickers = 0
let passivePrice = 100
let spentClicks = 0
let GamblerPrice = 1000

function addToMuliplyer() {
    if (clicks >= multPrice) {
        spentClicks = spentClicks - multPrice;
        clicks = clicks - multPrice;
        multiplier++
        multPrice = Math.ceil(multPrice * 1.5 - 3)
    }
    document.getElementById("multPrice").innerHTML = `multiplier price is ${multPrice} clicks`
    document.getElementById("multiplier").innerHTML = `Mulitplier is ${multiplier}x`
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
    document.getElementById("passiveClickerPrice").innerHTML = `passive clicker price is ${passivePrice} clicks`
    document.getElementById("passiveClicker").innerHTML = `Passive Clickers is ${passiveClickers}`
    return [passiveClickers, clicks, passivePrice, spentClicks]
}

function Gambler() {
    if (clicks >= GamblerPrice) {
        spentClicks = spentClicks - GamblerPrice;
        clicks = clicks - GamblerPrice;
        clicks = clicks + Math.abs(Math.floor((Math.random() * 5000) - 3700))
        GamblerPrice = Math.ceil((Math.random() * 10) * 400)
        document.getElementById("Gambler").innerHTML = `Gambler price is ${GamblerPrice} clicks`
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
    } else {
        document.getElementById("CheatButton").innerHTML = "?"
    }
    return clicks
}

function updateDisplay() {
    let fixedSpentClicks = spentClicks * -1
    document.getElementById("count").innerHTML = `cookie clicks is ${clicks} clicks`
    document.getElementById("spent").innerHTML = `spent clicks is ${fixedSpentClicks} clicks`
    let compoundedClicks = passiveClickers * 1
    clicks = clicks + compoundedClicks
    progressBar()
    return clicks
}



setInterval(updateDisplay, 100)

// const worker = Worker("counter.js")