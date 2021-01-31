
function calculate() {
    let base = parseInt(document.getElementById("base").value);
    let power = parseInt(document.getElementById("power").value);
    if (base && power && base >= 0 && power >= 0) {
        let answer = powerRec(base, power);
        document.getElementById("answer").innerHTML = answer;
    } else {
        document.getElementById("answer").innerHTML = 'Please enter valid input.';
    }
}

function powerRec(base, power) {
    return power != 0 ? base * powerRec(base, power - 1) : 1; 
}