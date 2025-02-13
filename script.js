let multPrice = 10
let multiplier = 1
let clicks = 0
let passiveClickers = 0
let passivePrice = 100
let spentClicks = 0

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

function updateDisplay() {
    let fixedSpentClicks = spentClicks * -1
    document.getElementById("count").innerHTML = `cookie clicks is ${clicks} clicks`
    document.getElementById("spent").innerHTML = `spent clicks is ${fixedSpentClicks} clicks`
    let compoundedClicks = passiveClickers * 1
    clicks = clicks + compoundedClicks
    return clicks
}

setInterval(updateDisplay, 100)