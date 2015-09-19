var w,h;
var preloader;
var manifest;
var bg0, bg1, logo, cta, mask, sheen;
var f1copy1, f1copy2, f2copy1, f2copy2, f3copy1, f3copy2, f3copy3, f3copy4;



function init() {
	canvas = document.getElementById("myCanvas");
	stage = new createjs.Stage(canvas);
	stage.enableMouseOver();
	createjs.Ticker.addEventListener("tick", stage);
	console.log("stage created");
	
	w = stage.canvas.width;
	h = stage.canvas.height;
	
	manifest = [
            {src:"bg0.jpg", id:"bg0"},
			{src:"bg1.jpg", id:"bg1"},
			{src:"fr1_copy1.png", id:"f1copy1"},
			{src:"fr1_copy2.png", id:"f1copy2"},
			{src:"fr2_copy1.png", id:"f2copy1"},
			{src:"fr2_copy2.png", id:"f2copy2"},
			{src:"fr3_copy1.png", id:"f3copy1"},
			{src:"fr3_copy2.png", id:"f3copy2"},
			{src:"fr3_copy3.png", id:"f3copy3"},
			{src:"fr3_copy4.png", id:"f3copy4"},
			{src:"copyGlow.png", id:"copyGlow"},
			{src:"logo.png", id:"logo"},
			{src:"cta.png", id:"cta"},
			{src:"stamp.png", id:"stamp"},
			{src:"roundel1.png", id:"roundel1"},
			{src:"roundel2.png", id:"roundel2"},
			{src:"sheen.png", id:"sheen"}
        ];
		
	preloader = new createjs.LoadQueue(false);
	preloader.addEventListener("complete", assetsPrep);
	preloader.loadManifest(manifest, true, "images/");
}

function assetsPrep(event) {
	bg0 = new createjs.Bitmap(preloader.getResult("bg0"));
	bg1 = new createjs.Bitmap(preloader.getResult("bg1"));
	// -------------
	f1copy1 = new createjs.Bitmap(preloader.getResult("f1copy1"));
	f1copy1.setTransform(w/2 - f1copy1.image.width/2, 16);
	f1copy1.alpha = 0;
	f1copy2 = new createjs.Bitmap(preloader.getResult("f1copy2"));
	f1copy2.setTransform(w/2 - f1copy1.image.width/2, 40);
	f1copy2.alpha = 0;
	// -------------
	f2copy1 = new createjs.Bitmap(preloader.getResult("f2copy1"));
	f2copy1.setTransform(w/2 - f2copy1.image.width/2, 22);
	f2copy1.alpha = 0;
	f2copy2 = new createjs.Bitmap(preloader.getResult("f2copy2"));
	f2copy2.setTransform(120, 215);
	f2copy2.alpha = 0;
	// -------------
	f3copy1 = new createjs.Bitmap(preloader.getResult("f3copy1"));
	f3copy1.setTransform(w/2 - f3copy1.image.width/2, 25);
	f3copy1.alpha = 0;
	f3copy2 = new createjs.Bitmap(preloader.getResult("f3copy2"));
	f3copy2.setTransform(w/2 - f3copy2.image.width/2, 80);
	f3copy2.alpha = 0;
	f3copy3 = new createjs.Bitmap(preloader.getResult("f3copy3"));
	f3copy3.setTransform(w/2 - f3copy3.image.width/2, 135);
	f3copy3.alpha = 0;
	f3copy4 = new createjs.Bitmap(preloader.getResult("f3copy4"));
	f3copy4.setTransform(w/2 - f3copy4.image.width/2, 178);
	f3copy4.alpha = 0;
	// -------------
	roundel1 = new createjs.Bitmap(preloader.getResult("roundel1"));
	roundel1.setTransform(50, 110);
	roundel2 = new createjs.Bitmap(preloader.getResult("roundel2"));
	roundel2.setTransform(150, 110);
	logo = new createjs.Bitmap(preloader.getResult("logo"));
	logo.setTransform(12, 202);
	stamp = new createjs.Bitmap(preloader.getResult("stamp"));
	stamp.setTransform(w/2 - stamp.image.width/2, -150);
	cta = new createjs.Bitmap(preloader.getResult("cta"));
	cta.cursor = "pointer";
	cta.setTransform(142, 200);
	cta.alpha = 0;
	cta.addEventListener("click", ctaExit);
	
	mask = new createjs.Shape();
	mask.graphics.beginFill("#ff0000").drawRoundRect(0 , 0 , 134 , 32 , 6);
	mask.cache(0, 0, 134, 32);
	mask.setTransform(146, 203);

	sheen = new createjs.Bitmap(preloader.getResult("sheen"));
	sheen.setTransform(80, 200);
	sheen.mask = mask;
	
	stage.addChild(bg0, bg1, f1copy1, f1copy2, roundel1, roundel2, logo);
	stage.addChild(stamp, f2copy1, f2copy2);
	stage.addChild(f3copy1, f3copy2, f3copy3, f3copy4, cta, sheen);
	stage.update(event);
	frame1_in();
}


function frame1_in(){
	console.log("frame1_in");
	createjs.Tween.get(f1copy1).wait(500).to({alpha:1}, 750);
	createjs.Tween.get(f1copy2).wait(1250).to({alpha:1}, 750);
	setTimeout(frame1_out, 4000);
}

function frame1_out(){
	console.log("frame1_out");
	createjs.Tween.get(f1copy1).to({alpha:0}, 750);
	createjs.Tween.get(f1copy2).to({alpha:0}, 750);
	createjs.Tween.get(roundel1).to({alpha:0}, 750);
	createjs.Tween.get(roundel2).to({alpha:0}, 750).call(frame2_in);
}

function frame2_in(){
	createjs.Tween.get(f2copy1).to({alpha:1}, 750);
	createjs.Tween.get(f2copy2).wait(750).to({alpha:1}, 750);
	createjs.Tween.get(stamp).wait(750).to({y:60}, 1000, createjs.Ease.bounceOut);
	setTimeout(frame2_out, 4500);
}

function frame2_out(){
	createjs.Tween.get(f2copy1).to({alpha:0}, 750);
	createjs.Tween.get(f2copy2).to({alpha:0}, 750);
	createjs.Tween.get(bg1).to({alpha:0}, 750);
	createjs.Tween.get(stamp).to({alpha:0}, 750).call(frame3_in);
}

function frame3_in(){
	createjs.Tween.get(cta).to({alpha:1}, 0);
	createjs.Tween.get(f3copy1).wait(500).to({alpha:1}, 750);
	createjs.Tween.get(f3copy2).wait(1250).to({alpha:1}, 750);
	createjs.Tween.get(f3copy3).wait(2000).to({alpha:1}, 750);
	createjs.Tween.get(f3copy4).wait(2750).to({alpha:1}, 750);
	createjs.Tween.get(sheen).wait(3500).to({x:340}, 1200)
}

function ctaExit(event){
	Enabler.exit('CTA Exit');
}

window.onload = function() {
      init();
}

