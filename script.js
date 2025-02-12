let clicks = 0

function count() {

    clicks ++
    document.getElementById("count").innerHTML = `cookie clicks is ${clicks} clicks`
    return clicks

}