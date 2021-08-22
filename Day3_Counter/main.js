let a = 0
function add() {
    a++
    document.getElementById("id1").innerText = a
}
function sub() {
    a--
    document.getElementById("id1").innerText = a
}
function reset() {
    a=0
    document.getElementById("id1").innerText = a
}