var back=document.getElementsByClassName("color");

var a=["brown","yellow","red","aqua","purple","azure"];

var number=(Math.floor(Math.random()*a.length));
console.log(number);
document.body.style.backgroundColor=a[number];