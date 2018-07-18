 document.querySelector('img').onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpg') {
      myImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.jpg');
    }
}
var myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello world!';