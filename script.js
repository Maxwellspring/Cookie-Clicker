let multPrice = 10
let multiplier = 1
let clicks = 0
let passiveClickers = 0
let passivePrice = 100

function addToMuliplyer() {
    if (clicks >= multPrice) {
        clicks = clicks - multPrice;
        multiplier++
        multPrice = Math.ceil(multPrice * 1.5 - 3)
    }

    document.getElementById("multPrice").innerHTML = `multiplier price is ${multPrice} clicks`
    document.getElementById("count").innerHTML = `cookie clicks is ${clicks} clicks`
    document.getElementById("multiplier").innerHTML = `Mulitplier is ${multiplier}x`
    return [multiplier, clicks, multPrice]
}

function count() {
    addedAmount = 1 * multiplier;
    clicks += addedAmount;
    document.getElementById("count").innerHTML = `cookie clicks is ${clicks} clicks`
    return clicks

}

function passiveClickerP1() {
    if (clicks >= passivePrice) {
        clicks = clicks - passivePrice;
        passiveClickers++
        passivePrice = Math.ceil(passivePrice * 1.7 - 2)
    }
    document.getElementById("count").innerHTML = `cookie clicks is ${clicks} clicks`
    document.getElementById("passiveClickerPrice").innerHTML = `passive clicker price is ${passivePrice} clicks`
    document.getElementById("passiveClicker").innerHTML = `Passive Clickers is ${passiveClickers}`

    return [passiveClickers, clicks, passivePrice]
}

function passiveClickerP2() {
    // document.getElementById("passiveClickerPrice").innerHTML = `Passive Clickers is 0`
    let compoundedClicks = passiveClickers * 1
    clicks = clicks + compoundedClicks
    document.getElementById("count").innerHTML = `cookie clicks is ${clicks} clicks`

    return clicks
}

setInterval(passiveClickerP2, 100)