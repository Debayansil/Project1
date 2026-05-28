// var a=10; // chnages, not that frequent, example age.
// const b=20; // constant variable and cannot be changed, example is your name
// let c=30; // change as frequent as you want, example day of a month.

// document.getElementById("section4").innerText = "Changed From JS";

var c = document.getElementsByClassName("section1");

console.log("This is c: ",c[1].innerText);



var i = document.getElementById("section4");

console.log("This is i: ",i.innerText);


function show() {
    console.log("Section1 is clicked!!");
    document.getElementById("section1").style.color = "cyan";
}

function getValue() {
    let name1 = document.getElementById("no1").value;
    let name2 = document.getElementById("no2").value;
    alert(parseInt(name1)+parseInt(name2));
}