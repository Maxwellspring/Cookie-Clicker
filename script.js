let price = 10
let multiplier = 1
let clicks = 0

function addToMuliplyer() {
    if (clicks >= price) {
        clicks = clicks - price;
        multiplier++
        price++
    }
    document.getElementById("count").innerHTML = `cookie clicks is ${clicks} clicks`
    document.getElementById("multiplier").innerHTML = `Mulitplier is ${multiplier}x`
    return [multiplier, clicks, price]
}

function count() {

    addedAmount = 1 * multiplier;

    clicks += addedAmount;

    document.getElementById("count").innerHTML = `cookie clicks is ${clicks} clicks`
    return clicks

}