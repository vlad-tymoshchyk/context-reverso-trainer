/* Initial variables */
var COUNT = 10;
var CURRENT = 0;

/* end of variables*/
var container = document.createElement('div');
container.innerHTML = `

<div class="ripple">
	<div id="main">
		<h1 style="margin: auto">Context Reverso Trainer</h1>
		<hr>
		<div id="list"></div>
		<footer>

		</footer>
	</div>
</div>
<style>
	* {
		box-sizing: border-box;
	}
	body {
		overflow: hidden;
	}
	hr {
		width: 95%;
	}
	.ripple {
		opacity: 0;
		text-align: center;
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		animation: fading 2s linear;
		overflow-y: scroll;
		z-index: 999;
	}
	#main {
		border: 2px ridge black;
		border-radius: 10px;
		background-color: #eef;
		text-align: center;
		width: 50%;
		min-width: 700px;
		margin: 70px auto;
		min-height: 300px;
	}
	.fadein {
		animation: fading 1s forwards;
		/*animation-fill-mode: forwards*/
	}
	@keyframes fading {	
		from {
			opacity: 0;
		}
		to {	
			opacity: 1;
		}
	}
	.sector div, .sector textarea.textarea {
		text-align: center !important;
		background-color: white;
		border: 1px groove black;
		border-radius: 10px;
		padding: 10px;
		min-height: 50px;
		width: 98%;
		margin: 2px auto;
		font-size: 20px;
	}
	.sector {
		background-color: #999; 
		border: 2px solid black;
		border-radius: 10px;
		padding: 2px 2px;
		margin: 6px 5px;
	}
	.input {
		display: none;
	}
	.targetText {
		display: none;
	}
	.disslashed {
		animation: disslashing 2s forwards;
	}
	@keyframes disslashing {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

</style>
`
document.body.append(container);
var list = document.getElementById('list');
console.log(main);


var ex = Array.from(document.querySelectorAll('.example'));
ex.sort(function(){
	if(Math.random() < 0.5){
		return -1;
	} else {
		return 1;
	};
});
src = 0;
trg = 1;
var numberOfPhrases = ex.length;
for(var i = 0; i < numberOfPhrases; i++) {
	let sector = document.createElement('div'),
		srcText = document.createElement('div'),
		trgText = document.createElement('div'),
		input = document.createElement('div'),
		area = document.createElement('textarea'),
		line = document.createElement('hr');
	srcText.innerText = ex[i].children[src].innerText;
	trgText.innerText = ex[i].children[trg].innerText;
	sector.append(srcText);
	sector.append(trgText);
		trgText.classList.add('targetText');
	sector.append(input);
		input.classList.add('input');
	sector.append(area);
		area.classList.add('textarea');
		area.addEventListener('keypress', goNextArea);
	list.append(sector);
		sector.classList.add('sector');
}
function goNextArea(e) {
	if(e.key == 'Enter') {
		e.stopPropagation();
		e.preventDefault();
		let parent = this.parentElement;
		parent.children[1].style.display = 'block';
		parent.children[1].classList.add('disslashed');
		parent.children[2].innerText = this.value;
		parent.children[2].style.display = 'block';
		this.style.display = 'none';
		if(parent.nextSibling) {
			parent.nextSibling.children[3].focus()
		}
		if(parent.nextSibling.nextSibling) {
			scrollToNext(parent.nextSibling.nextSibling);
		}
	}
}
function scrollToNext(elem){

}
document.querySelector('.ripple').classList.add('fadein');

document.body.addEventListener('keydown', function(e){
	e.stopPropagation();
}, true);