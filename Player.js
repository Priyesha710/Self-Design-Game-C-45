class Player {
    constructor(xInput, yInput) {
        this.name = null;
        this.character = null;
        this.sprite = createSprite(xInput, yInput, 20, 20);
    }
    display() {
        switch (this.character) {
            case "ch1":
                this.sprite.shapeColor = "red";
                break;
            case "ch2":
                this.sprite.shapeColor = "blue";
                break;
            case "ch3":
                this.sprite.shapeColor = "green";
            case "ch2":
                this.sprite.shapeColor = "yellow";
                break;
        }

    }
    move() {

    }
    kill() {

    }
}