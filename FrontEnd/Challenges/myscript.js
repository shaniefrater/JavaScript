function disableBtn() {
    document.getElementById("myButton").disabled = true;

}

function enableBtn() {
    document.getElementById("myButton").disabled = false;

}

function toggleButton() {
    let currentState = document.getElementById("myButton").disabled

    console.log(currentState);

    if (currentState == true) {
        enableBtn();
    } else {
        disableBtn();
    }
}

function myFunction(event) {
    document.getElementById("output").innerHTML += String.fromCharCode(event.which);
}

function bigImg(x) {
    x.src = "https://www.nicepng.com/png/full/68-682147_ig-icon-pink-instagram.png"
    x.style.height = "48px";
    x.style.width = "48px";
}

function normalImg(x) {
    x.src = "http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png"
    x.style.height = "48px";
    x.style.width = "48px";
}

var emptyP = document.getElementById("");
var d = new Date();

function displayDate() {
    alert("Today's Date is:" + d.toString());
    return emptyP.innerHTML = d.getDate();
}

function showUrl() {
    emptyP1 = document.getElementById("");
    let url = window.location.href;

    alert("The full URL of this page is:" + url);
    return emptyP1.innerHTML = d.showUrl();
}
