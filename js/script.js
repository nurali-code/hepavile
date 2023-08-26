var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
	relativeInput: true
});

var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2, {
	relativeInput: true
});

const btn_open = document.getElementById('btn_open'),
	body = document.getElementById('body'),
	modal_close = document.getElementById('modal_close'),
	modal = document.getElementById('modal');

console.log(modal);

modal_close.onclick = () => {
	modal.classList.remove('active')
	body.classList.remove('active')
}
btn_open.onclick = () => { 
	modal.classList.add('active')
	body.classList.add('active')
 }