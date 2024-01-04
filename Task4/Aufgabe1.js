function CustomObject() {
}
var myCustomObject = new CustomObject();
//muss mit index.html ausgeführt werden, da es mit nodejs nicht unterstützt wird
console.log(window instanceof Window); // true
console.log(document instanceof Document); // true
console.log(CustomObject instanceof Object); // true
console.log(myCustomObject instanceof CustomObject); // true
