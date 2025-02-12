let multiplier = 1

let clicks = 0

function addToMuliplyer() {
    if (clicks >= 10) {
        clicks = clicks - 10;
        multiplier++
    }
    document.getElementById("count").innerHTML = `cookie clicks is ${clicks} clicks`
    document.getElementById("multiplier").innerHTML = `Mulitplier is ${multiplier}x`
    return [multiplier, clicks]
}

function count() {

    addedAmount = 1 * multiplier;

    clicks += addedAmount;

    document.getElementById("count").innerHTML = `cookie clicks is ${clicks} clicks`
    return clicks

}