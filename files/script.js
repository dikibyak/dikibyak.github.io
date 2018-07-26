document.getElementById("enable").checked = true;

var asd = document.querySelector('img');

disable.onclick = function() {
  asd.style.display = "none";
}

enable.onclick = function() {
  asd.style.display = "block";
}

document.querySelector('#emptyDiv').innerHTML = '<div class="text1">Этот текст создан с помощью JavaScript</div>';

var elem1 = document.querySelectorAll('#text3 p');

var colors = ['#99CCFF','#3399FF','#0099FF','#6699CC','#336699'];

//alert(elem1[0].textContent.length);

elem1[0].style.color = colors[length];
