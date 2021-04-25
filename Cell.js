class Cell {
    constructor(iInput, jInput) {
        // each cell will consist of four walls
        this.i = iInput;
        this.j = jInput;
        this.walls = [true, true, true, true];
        this.visited = false;
        var x = (this.i + 1/2)* w;
        var y = (this.j + 1/2) * w;
        var sprT = createSprite(x,y-w/2-2,w-8,4),
            sprR = createSprite(x+w/2+2,y,4,w-8),
            sprB = createSprite(x,y+w/2+2,w-8,4),
            sprL = createSprite(x-w/2-2,y,4,w-8);
            sprT.shapeColor = "black";
            sprR.shapeColor = "black";
            sprB.shapeColor = "black";
            sprL.shapeColor = "black";


        this.wallSprites = [sprT,sprR,sprB,sprL];
        mazeWalls.push(sprT,sprB);
        mazeWalls.push(sprL,sprR);
    }
    /**
     * Function definition to check if the surrounding cells
     * of a particular cell have been visited.
     * @returns a random unvisited neighbour cell
     */
    checkNeighbors() {
        var neighbors = [];
  
        var top = grid[index(this.i, this.j - 1)];
        var right = grid[index(this.i + 1, this.j)];
        var bottom = grid[index(this.i, this.j + 1)];
        var left = grid[index(this.i - 1, this.j)];
  
        if (top && !top.visited) {
          neighbors.push(top);
        }
        if (right && !right.visited) {
          neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
          neighbors.push(bottom);
        }
        if (left && !left.visited) {
          neighbors.push(left);
        }
        if (neighbors.length > 0) {
          var r = floor(random(0, neighbors.length));
          return neighbors[r];
        } else {
          return undefined;
        }
      }
    
    show() {
        stroke(255);
        if (!this.walls[0]) {
            this.wallSprites[0].remove();
        }
        if (!this.walls[1]) {
            this.wallSprites[1].remove();
        }
        if (!this.walls[2]) {
            this.wallSprites[2].remove();
        }
        if (!this.walls[3]) {
            this.wallSprites[3].remove();
        }
        if (this.visited) {
        //   noStroke();
        //   //noFill();
        //   fill(255, 0, 255, 100);
        //   rect(x, y, w, w);
        }
    }
}