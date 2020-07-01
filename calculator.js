function makeSquare() {
    var number = document.getElementById('square-input').value;
    var sol = number * number;
    document.getElementById("solution1").innerHTML = number + ' la patrat este: ' + sol;
}
document.getElementById('square-button').addEventListener('click', makeSquare);

function makeHalf() {
    var number = document.getElementById('half-input').value;
    const sol = number * number * number;
    document.getElementById("solution2").innerHTML = number + ' la cub este: ' + sol;
}
document.getElementById('half-button').addEventListener('click', makeHalf);

function makePercent() {
    var number1 = document.getElementById('percent1-input').value;
    var number2 = document.getElementById('percent2-input').value;
    var sol = 1;
    for (var i = 1; i <= number2; ++i) {
        sol *= number1
    }
    document.getElementById("solution3").innerHTML = number1 + ' ridicat la puterea ' + number2 + ' este: ' + sol;
}
document.getElementById('percent-button').addEventListener('click', makePercent);

function makeArea() {
    var number = document.getElementById('area-input').value;
    const sol = number * number * Math.PI;
    document.getElementById("solution4").innerHTML = 'Aria unui cerc de raza ' + number + ' este: ' + sol;
}
document.getElementById('area-button').addEventListener('click', makeArea);

function makeSqrt() {
    var number = document.getElementById('sqrt-input').value;
    const sol = Math.sqrt(number);
    document.getElementById("solution5").innerHTML = 'Radacina patrata din ' + number + ' este: ' + sol;
}
document.getElementById('sqrt-button').addEventListener('click', makeSqrt);

