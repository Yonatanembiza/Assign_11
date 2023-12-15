var document = window.document;
console.log(document)
var myNAvigator = window.navigator;
console.log(myNAvigator)
var myVariable = "Hello";
console.log(myVariable)
document.write("Hello there!")
document.createElement("P")

function highlightField() {
    // turn text yellow and make it bigger
    var elem = document.getElementById("id");
    if (!elem.className) {
        elem.className = "highlight";
    } else if (elem.className.indexOf("invalid") < 0) {
        elem.className += " highlight";
    }
}