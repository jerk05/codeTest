
function calculate() {
    let number = parseInt(document.getElementById("number").value);

    let answer = getFibonacci(number);
    document.getElementById("answer").innerHTML = answer;
}


function getFibonacci(n) {
    let t1 = 0;
    let t2 = 1;
    let nextNumber = 0;
    let series = [];
    nextNumber = t1 + t2;

    while (nextNumber <= n) {
        series.push(nextNumber);
        t1 = t2;
        t2 = nextNumber;
        nextNumber = t1 + t2;
    }
    return series;
} 