

let button = document.getElementById('button'),
	text = '',
	list = document.querySelector('#list');

button.onclick = function () {
	text = document.querySelector('input').value;
		if (text == '') {
			alert('You must be doing something wrong');
		} else {
			let li = document.createElement('li');
			li.innerHTML = text;
			li.onclick = function() {
				li.classList.add('checked');
			};
			list.appendChild(li);
			document.body.style.backgroundColor = getRandomColor();
		}
		document.querySelector('input').value = '';

	}
function getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
		  for (var i = 0; i < 6; i++) {
		    color += letters[Math.floor(Math.random() * 16)];
		  }
	  return color;
}