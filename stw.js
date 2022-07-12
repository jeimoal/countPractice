let ct = {
btn : null,
timer : null,
setZero : 0,

	init : () => {
		btn = document.getElementById('btn');
		btnDec = document.getElementById('btnDec');
		btnStp = document.getElementById('btnStp');

		btn.onclick = ct.inc;
		btnDec.onclick = ct.decrs;
	},

	//increasing count
	inc : () => {
		ct.timer = setInterval(ct.tickInc, 1000);
		btnDec.hidden = true;
		btnStp.hidden = false;
		btnStp.onclick = ct.stop;
	},

	//decreasing count
	decrs : () => {
		ct.timer = setInterval(ct.tickDecrs, 1000);
		btn.hidden = true;
		btnStp.hidden = false;
		btnStp.onclick = ct.stop;
	},

	tickInc : () => {
		ct.setZero++;
		let show = document.getElementById('demo');
		let create = document.createElement('p');
		let pTxt = document.createTextNode(ct.setZero);
		create.appendChild(pTxt);
		show.appendChild(create);
	},

	tickDecrs : () => {
		ct.setZero--;
		let show = document.getElementById('demo');
		let create = document.createElement('p');
		let pTxt = document.createTextNode(ct.setZero);
		create.appendChild(pTxt);
		show.appendChild(create);
	},

	stop : () => {
		clearInterval(ct.timer);
	},

};

window.addEventListener('load', ct.init);