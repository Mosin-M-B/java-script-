var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var pink = document.getElementById('pink');
var yellow = document.getElementById('yellow');
var box = document.getElementById('box');

function red1() {
    if (box.style.backgroundColor =="red") {
        red.innerText="Red";
        red.style.color="white";
        red.style.fontWeight="bold";
        red.style.backgroundColor ="red";
        box.style.backgroundColor ="snow";
        console.log("if");
    }else{
        red.style.color="Black";
        red.style.fontWeight="bold";
        red.style.backgroundColor ="snow";
        box.style.backgroundColor ="red"
        red.innerText="white";
        console.log("else");
    }
    console.log("red");
}
function blue1() {
    if (box.style.backgroundColor == 'blue') {
        blue.innerText="Blue";
        blue.style.color="white";
        blue.style.fontWeight="bold";
        blue.style.backgroundColor ="blue";
        box.style.backgroundColor ="snow";
        console.log("if");
    }else{
        blue.innerText="white";
        blue.style.color="Black";
        blue.style.fontWeight="bold";
        blue.style.backgroundColor ="snow";
        box.style.backgroundColor ="blue"
        console.log("else");
    }
}
function pink1() {
    if (box.style.backgroundColor == 'pink') {
        pink.innerText="Pink";
        pink.style.color="white";
        pink.style.fontWeight="bold";
        pink.style.backgroundColor ="pink";
        box.style.backgroundColor ="snow";
        console.log("if");
    }else{
        pink.innerText="white";
        pink.style.color="Black";
        pink.style.fontWeight="bold";
        pink.style.backgroundColor ="snow";
        box.style.backgroundColor ="pink"
        console.log("else");
    }
}
function green1() {
    if (box.style.backgroundColor == 'green') {
        green.innerText="Green";
        green.style.color="white";
        green.style.fontWeight="bold";
        green.style.backgroundColor ="Green";
        box.style.backgroundColor ="snow";
        console.log("if");
    }else{
        green.innerText="white";
        green.style.color="Black";
        green.style.fontWeight="bold";
        green.style.backgroundColor ="snow";
        box.style.backgroundColor ="green"
        console.log("else");
    }
}
function yellow1() {
    if (box.style.backgroundColor == 'yellow') {
        yellow.innerText="Yellow";
        yellow.style.color="white";
        yellow.style.fontWeight="bold";
        yellow.style.backgroundColor ="yellow";
        box.style.backgroundColor ="snow";
        console.log("if");
    }else{
        yellow.innerText="white";
        yellow.style.color="Black";
        yellow.style.fontWeight="bold";
        yellow.style.backgroundColor ="snow";
        box.style.backgroundColor ="yellow"
        console.log("else");
    }
}
