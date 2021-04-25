/*
    ● Form should contain the input box and a button to log in.

    ● When the button is pressed, the player's name should be registered in the database and a new 
    player should be created.

*/

/*

    The body of an HTML page can contain several different types of elements-
    - h1, h2, h3, h4, h5, h6: display headings of different scales.

    - input: to collect input from the user. INPUT BOX
    - button: to display a button. and perform update on click

    This model of an HTML page is called Document object Model (or DOM).
    We will be using the p5 Dom library to create the form.

*/
class Form {
    /*   
         writing code to create objects even though the blueprint/CONSTRUCTOR isn't
         defined yet. This is called writing code using abstraction 
   */
    constructor(buttonName, inputbox) {
        this.title = createElement("h2");
        if (buttonName, inputbox) {
            this.inputbox = createInput(inputbox);
            this.playButton = createButton(buttonName);
        };
        this.greeting = createElement("h2");
    }
    /*
function call to receive all the input to all parameters on FORM

---For 'this' to continue to refer to the form object, we use arrow functions
Arrow functions bind the function to the original object which calls it.

---Here mousePressed is called inside the display function which is called by
the form object. ()=> Arrow function ensures that 'this' remains bound to
the form object.
*/
    display(title) {
        this.title.html(title);
        this.title.position(130, 0);
        if (this.playButton, this.inputbox) {
            this.inputbox.position(130, 160);

            this.playButton.position(250, 200);

            this.playButton.mousePressed(() => {
                this.inputbox.hide();
                this.playButton.hide();
                playerObj.name = this.inputbox.value();
                gameState = 1;
                this.greeting.html("Welcome " + playerObj.name);
                this.greeting.position(200, 250);
            });
        }
    }
    hide() {
        this.title.hide();
        if (this.playButton, this.inputbox) {
            this.inputbox.hide();
            this.playButton.hide();
        }
        this.greeting.hide();

    }
}