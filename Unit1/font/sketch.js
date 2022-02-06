let font1, font2;

function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/NextCustom.ttf")
  font2 = loadFont("assets/ShadowsIntoLight-Regular.ttf")
}

function draw() {
  background(100) ;
  textFont(font1) ;
  textSize(48) ;
  text("Oh I didn't see you there.", 100, 100) ;

}

function draw() {
  background(100) ;
  textFont(font2) ;
  textSize(48) ;
  text("how's it goin?", 100, 100) ;

}
