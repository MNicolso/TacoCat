const printBox = document.getElementById("printBox");
const statusBox = document.getElementById("statusBox");

document.getElementById("button").addEventListener('click', () => {
    var inputBox = document.getElementById("inputBox").value;
    var inputReverse = inputBox.split("").reverse().join("");
    let input = inputBox.toLowerCase().replace(/\s|\'|\"/g, '');
    let outputReverse = inputReverse.toLowerCase().replace(/\s|\'|\"/g, '');

    printBox.innerHTML = outputReverse
    verify(outputReverse, input)
})
    function verify(outputReverse, input) {
        if (outputReverse === input) {
            statusBox.innerHTML = "That's a palindrome!"
        }
        else if (outputReverse !== input) {
            statusBox.innerHTML = "That's a palindon't!"
        }
    }


