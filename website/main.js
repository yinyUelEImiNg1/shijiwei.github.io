

function multiply(num1, num2) {
var result = num1 * num2;
return result;}
document.getElementById("cheng").innerHTML=multiply(45,26)

function myFunction(a,b)
{return a*b;}
document.getElementById("demo").innerHTML=myFunction(4,3);

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;}
  if(!localStorage.getItem('name')) {
    setUserName();}
     else {var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;}
    myButton.onclick = function() {
        setUserName();}