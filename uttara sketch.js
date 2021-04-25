/*

  Self-Designed Game - 2 
  Maze Runner
  Developer: Priyesha

  GOALS:
      1. To create a form when game state is zero and display it instead of canvas.
      2. To make sure the the player's name is stored in the program as soon as he/she 
         enters his/her name in the form and game state is updated.
      3. To write the function so that the player can choose their character.

      * This is going to be a single player game, so database will not be needed.
*/

//Declare variables for game objects and behaviour indicators(FLAGS)
/*
    gameState:
      0: Maze creation, player fills the form.
      1: Player chooses their character.
      2: Player enters the maze.

 */
var gameState = 0;
var w = 30; //width and height of the cell
var cols, rows;
var mazeWalls = [];
var grid = [];
var player;
var charChosing;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {

}


//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(1200, 1200);

  cols = floor(width / 30);
  
  rows = floor(height / 30);
  
  
  playerObj = new Player();
  playerObj.shapeColor = "blue";
  
  form = new Form("play", "name");

  //uttara changes
  if (gameState === 0) { //player fills the form
    background("white");
    playerObj.sprite.visible = false;
    for (var i = 0; i < mazeWalls.length; i++) {
      mazeWalls[i].visible = false;
    }
    form.display("Enter your name.");
  } 
  //uttara changes
  //else if (gameState === 1) { //player chooses his/her character
  //    for (var i = 0; i < mazeWalls.length; i++) {
  //      mazeWalls[i].visible = false;
   //   }
//
   // } 
}

//All changes, conditions, manipulations, actions to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {

  //uttara changes
  
    
      if (gameState === 2) { //player plays the game
        clear();
        form.hide();

        playerObj.sprite.visible = true;

        maze = new Maze();//uttara changes
        for (var i = 0; i < mazeWalls.length; i++) {
          mazeWalls[i].visible = true;
          //player.collide(mazeWalls[i]);
        }     
        maze.display();
        
        if (keyDown("LEFT")) {
          player.x -= 5;
        } else
          if (keyDown("RIGHT")) {
            player.x += 5;
          } else
            if (keyDown("UP")) {
              player.y -= 5;
            } else
              if (keyDown("DOWN")) {
                player.y += 5;
              }
      } else if (gameState === 3) { //game ends

        }
  drawSprites();
}


function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}


function removeWalls(a, b) {
  var x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else
    if (x === -1) {
      a.walls[1] = false;
      b.walls[3] = false;
    }
  var y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else
    if (y === -1) {
      a.walls[2] = false;
      b.walls[0] = false;
    }
}
