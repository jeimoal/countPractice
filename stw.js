let ct = {
timer : null,
setZero : 0,

	init : () => {
		btn = document.getElementById('btn');
		btnDec = document.getElementById('btnDec');
		btnStp = document.getElementById('btnStp');
		btnRst = document.getElementById('btnRst');
		myCt = document.getElementById('myCt');

		btn.onclick = ct.inc;
		btnDec.onclick = ct.decrs;
	},
	
	inc : () => {
		ct.timer = setInterval(ct.tickInc, 1000);
		btn.hidden = true;
		btnDec.hidden = true;
		btnStp.hidden = false;
		btnRst.hidden = false;
		btnStp.onclick = ct.stop;
		btnRst.onclick = ct.reset;
	},

	decrs : () => {
		ct.timer = setInterval(ct.tickDecrs, 1000);
		btnDec.hidden = true;
		btn.hidden = true;
		btnStp.hidden = false;
		btnRst.hidden = false;
		btnStp.onclick = ct.stop;
		btnRst.onclick = ct.reset;
	},
	
	//increasing count
	tickInc : () => {
		ctnue = ct.setZero;
		ct.setZero++;
		show = myCt;
		create = document.createElement('p');
		pTxt = document.createTextNode(ct.setZero);
		create.appendChild(pTxt);
		show.appendChild(create);
	},

	//decreasing count
	tickDecrs : () => {
		ctnue = ct.setZero;
		ct.setZero--;
		show = myCt;
		create = document.createElement('p');
		pTxt = document.createTextNode(ct.setZero);
		create.appendChild(pTxt);
		show.appendChild(create);
	},

	stop : () => {
		clearInterval(ct.timer);
		btn.hidden = false;
		btnDec.hidden = false;
		btnStp.hidden = true;
	},

	reset : () => {
		clearInterval(ct.timer);
		clear = myCt;
		clear.textContent = "";
		ct.setZero = 0;
		btn.hidden = false;
		btnDec.hidden = false;
		btnStp.hidden = true;
		btnRst.hidden = true;
	},

};

window.addEventListener('load', ct.init);
