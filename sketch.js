function setup() {
	createCanvas(640, 640);
	
}

function draw() {
	background('pink');
	noStroke();
	
	let eyeRad = 50; //*something for real rad
	let pupilRad = 70;
	let acEyeRad = 2*eyeRad+pupilRad;
	
	let mx = mouseX - 320;
	let my = mouseY - 320;
	
	let r = constrain(Math.sqrt(Math.pow(mx,2) + Math.pow(my,2)), 0,eyeRad);
	let a = atan2(my, mx);
	
	for(let i = 5; i > 0; i--){
		fill('#AFBD82');
		circle(320,320, acEyeRad+160*i);
		fill('#F9E4AF');
		circle(320,320, acEyeRad+120*i);
		fill('#D3B446');
		circle(320,320, acEyeRad+80*i);
		fill('#E17467');
		circle(320,320, acEyeRad+40*i);
	}
	fill('white');
	circle(320,320, acEyeRad);
	fill('brown');
	circle(r*cos(a)+320, r*sin(a)+320, pupilRad);
	fill('black');
	circle(r*cos(a)+320, r*sin(a)+320, pupilRad-30);
	fill('white');
	circle(r*cos(a)+320-10, r*sin(a)+320-10, pupilRad-50);
	
}
