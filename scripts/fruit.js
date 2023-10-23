
var count = 1;
document.getElementById("count").innerHTML = count;

document.getElementById("add").onclick = function () {
    document.getElementById("count").innerHTML = count++;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("sub").onclick = function () {
    document.getElementById("count").innerHTML = count--;
    document.getElementById("count").innerHTML = count;
}