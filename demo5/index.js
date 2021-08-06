var one = document.getElementById('one');
var two = document.getElementById('two');
var img = document.querySelector('img')

one.onclick = function() {
    img.src = 'img/1.jpg'
}
two.onclick = function() {
    img.src = 'img/2.jpg'
}