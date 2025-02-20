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
    multPrice = window.localStorage.getItem("multPrice")
    multiplier = window.localStorage.getItem("muliplier")
    clicks = window.localStorage.getItem("count")
    passiveClickers = window.localStorage.getItem("passiveClicker")
    passivePrice = window.localStorage.getItem("passiveClickerPrice")
    spentClicks = window.localStorage.getItem("spent")
    GamblerPrice = window.localStorage.getItem("Gambler")
    return [clicks, multPrice, multiplier, passiveClickers, spentClicks, GamblerPrice]
}

function save() {
    window.localStorage.removeItem("count")
    window.localStorage.removeItem("spent")
    window.localStorage.removeItem("Gambler")
    window.localStorage.removeItem("multPrice")
    window.localStorage.removeItem("muliplier")
    window.localStorage.removeItem("passiveClickerPrice")
    window.localStorage.removeItem("passiveClicker")
    
    window.localStorage.setItem("count", clicks)
    window.localStorage.setItem("spent", fixedSpentClicks)
    window.localStorage.setItem("Gambler", GamblerPrice)
    window.localStorage.setItem("multPrice", multPrice)
    window.localStorage.setItem("muliplier", multiplier)
    window.localStorage.setItem("passiveClickerPrice", passivePrice)
    window.localStorage.setItem("passiveClicker", passiveClickers)
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