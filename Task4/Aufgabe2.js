
function addTax(amount, taxRate, callback) {
    var newAmount = amount + amount * (taxRate / 100);
    // prüft ob callback eine funktion ist
    if (typeof callback === "function") {
        callback(newAmount);
    }
}

addTax(100, 19, function(result) {
    let element = document.createElement("p");
    element.innerText = result; // 119
    document.body.appendChild(element);
});

addTax(100, 19, function(result) {
    console.log(result); // 119
});
