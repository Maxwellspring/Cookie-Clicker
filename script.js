let multPrice = 10
let multiplier = 1
let clicks = 0

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