function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background(200, 200, 255);

  if (mouseIsPressed) {

    background(random(255), random(255), random(255), random(255))

     fill(60)
    rect(0, 800, 2000, 550)

     fill(225, 64, 50);
    ellipse(203, 520, 60, 115)

     fill(280, 200, 165);
    ellipse(200, 460, 65, 60)

    fill(140, 75, 40);
    ellipse(125, 550, 300, 100)

    fill(85, 70, 100);
    ellipse(214, 600, 70, 100)

    fill(35, 45, 10);
    ellipse(41, 600, 60, 115)

    fill(110, 55, 25);
    ellipse(43, 540, 65, 60)

    fill(50, 25, 15);
    ellipse(211, 542, 65, 60)


    //linda
    fill("purple");
    ellipse(697, 792, 325, 300);

    fill(160, 100, 65);
    ellipse(700, 595, 350, 300);

    fill(255);
    ellipse(572, 570, 55, 45);

    fill(255);
    ellipse(830, 570, 55, 45);

    fill(0);
    ellipse(560, 570, 15, 15);

    fill(0);
    ellipse(840, 570, 15, 15);

     fill(200, 55 , 30 , 50);
    ellipse(819, 615, 35, 15);

    fill(200, 55 , 30 , 50);
    ellipse(572, 615, 35, 15);

     fill(0)
    arc (736, 640, 30, 40, TWO_PI, PI)


    fill(200, 200, 255);
    ellipse(539, 624, 10, 30);


    //text

    fill(0)
    text("This coffee sucks.",186,454)

    fill(0)
    text("I wonder how the boys are doing.", 204,580)

    fill(0)
    text("WHEN DO I JUMP INTO THIS CONVERSATION", 36, 594)

    fill(0)
    text("I cannot keep working here.", 818, 300)

    fill(0)
    text("This person really does stare alot.", 402, 758)


  } else {

   // resterant


      fill(230, 220, 255)
    rect(600, 300, 800, 600)

     fill(205)
    quad (-20,0 ,200,180,1000,27, 1000, 0 )

     fill(60)
    rect(0, 800, 2000, 550)

  //text
    fill(0)
    text("This is Linda. She is absolutely normal.",160,300)

    fill(0)
    text("No super human abilities or anything.", 700,400)

    fill(0)
    text("She's just enjoying her date.", 360, 500)


  //table

    fill(225, 64, 50);
    ellipse(203, 520, 60, 115)

     fill(280, 200, 165);
    ellipse(200, 460, 65, 60)

    fill(140, 75, 40);
    ellipse(125, 550, 300, 100)

    fill(85, 70, 100);
    ellipse(214, 600, 70, 100)

    fill(35, 45, 10);
    ellipse(41, 600, 60, 115)

    fill(110, 55, 25);
    ellipse(43, 540, 65, 60)

    fill(50, 25, 15);
    ellipse(211, 542, 65, 60)

    //linda
    fill(155, 110, 200);
    ellipse(697, 792, 325, 300);

    fill(160, 100, 65);
    ellipse(700, 595, 350, 300);

    fill(255);
    ellipse(606, 570, 45, 45);

    fill(255);
    ellipse(801, 570, 45, 45);

    fill(0);
    ellipse(606, 570, 15, 15);

    fill(0);
    ellipse(801, 570, 15, 15);

     fill(200, 55 , 30 , 50);
    ellipse(819, 615, 35, 15);

    fill(200, 55 , 30 , 50);
    ellipse(572, 615, 35, 15);

    fill(0)
    arc (736, 640, 30, 40, TWO_PI, PI)

  }
