var WINDOW_HEIGHT = 760;
var WINDOW_WIDTH = 1028;

window.onload = function () {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;

	render(ctx);
} 

function render(ctx) {
	var hours = 12;
	var minutes = 34;
	var seconds = 56;

	renderDigit(0,0,parseInt(hours/10),ctx)
}

function renderDigit(x,y,num,ctx){
	ctx.fillStyle = "blue";
	var radius = 9;
	for(var i=0;i<digit[num].length;i++){
		for(var j = 0 ; j < digit[num][i].length ; j++){
			if(digit[num][i][j] == 1){
				ctx.beginPath();
				ctx.moveTo(x,y);
				ctx.arc(x+j*2*(radius+1)+radius+1,y+i*2*(radius+1)+radius+1,radius,0,2*Math.PI);
				ctx.closePath();
				ctx.fill();
			}
		}
	}
}