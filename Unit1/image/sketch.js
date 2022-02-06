let cat;
let art;
let otbon;
let snow;


function setup() {
  createCanvas(500, 500);

  cat = loadimage("assets/cat.jpg");
  art = loadimage("assets/ART.jpg");
  otbon = loadimage("assets/OTBON.jpg");
  snow = loadimage("assets/winter.jpg");
}

function draw() {
  background(100) ;
  image(cat, width / 2, 100, 100, 100);
  image(art, width / 2, 100, 100, 100);
  image(otbon, width / 2, 100, 100, 100);
  image(snow, width / 2, 100, 100, 100);
}
