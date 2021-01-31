
function calculate() {
    let array = document.getElementById("array").value;
    parsedArray = array.split(",");

    let uniqueArray = [];
    parsedArray.forEach((element) => {
        if (!uniqueArray.includes(element))
        uniqueArray.push(element)
    });
    document.getElementById("answer").innerHTML = uniqueArray;
}