var tree = document.getElementsByClassName('menu')[0];
var treeLis = tree.getElementsByTagName('li');

for (let i = 0; i < treeLis.length; i++) {
	if (!treeLis[i].children[1]) {
		treeLis[i].style.fontWeight = 'normal';
		treeLis[i].hidden = true;
	}
	else {
		treeLis[i].style.fontWeight = 'bold';
		treeLis[i].children[0].onclick = function() {return false;}
	}
}

tree.onclick = function(e) {
	let target = e.target;
	
	if (target.tagName != 'A') return;

	for (let i = 0; i < target.parentNode.children[1].children.length; i++)
		target.parentNode.children[1].children[i].hidden = !target.parentNode.children[1].children[i].hidden;
}

/*
document.getElementById('').addEventListener("click", function(event){
    event.preventDefault()
});
*/