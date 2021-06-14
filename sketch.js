const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup(){
    var canvas = createCanvas(900,750);

    engine = Engine.create();
    world = engine.world;

    wall1 = new Wall(5,375,10,750);
    wall2 = new Wall(895,375,10,750);
    wall3 = new Wall(450,5,900,10);
    wall4 = new Wall(450,745,900,10);

    box1 = new Box1(100,300,60,60);

    box2 = new Box2(250,300,60,60);

    box3 = new Box3(400,300,60,60);

    ball = new Ball(550,300,60,60);

    box4 = new Box5(750,300,20,150);


}

function draw(){
    background("gray");

    Engine.update(engine);

    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();

    box1.display();

    box2.display();

    box3.display();

    ball.display();

    box4.display();

    drawSprites();
}