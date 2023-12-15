document.getElementById("myBtn").onmouseover = displayDate;
document.getElementById("myBtn").onmouseleave = notDisplay;
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
function notDisplay(){
    document.getElementById("demo").innerHTML = "";
}