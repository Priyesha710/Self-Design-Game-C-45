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
    if ((buttonName, inputbox)) {
      this.inputbox = createInput(inputbox);
      this.playButton = createButton(buttonName);
    }
    this.greeting = createElement("h2");

    this.button1 = createButton("c1");//uttara changes
    this.button2 = createButton("c2");//uttara changes
    this.button3 = createButton("c3");//uttara changes
    this.button4 = createButton("c4");//uttara changes
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
    if ((this.playButton, this.inputbox)) {
      this.inputbox.position(130, 160);

      this.playButton.position(250, 200);

      this.playButton.mousePressed(() => {
        this.inputbox.hide();
        this.playButton.hide();
        playerObj.name = this.inputbox.value();
        gameState = 1;

        this.button1.position(250, 300);//uttara changes
        this.button2.position(300, 300);//uttara changes
        this.button3.position(350, 300);//uttara changes
        this.button4.position(400, 300);//uttara changes

        this.button1.mousePressed(() => {//uttara changes
          this.button1.hide();//uttara changes
          this.button2.hide();//uttara changes
          this.button3.hide();//uttara changes
          this.button4.hide();//uttara changes
          gameState = 2;//uttara changes
          playerObj.character = "ch1";//uttara changes

          this.greeting.html("Welcome " + playerObj.name);//uttara changes
          this.greeting.position(200, 250);//uttara changes
        });

        this.button2.mousePressed(() => {
            this.button1.hide();//uttara changes
            this.button2.hide();//uttara changes
            this.button3.hide();//uttara changes
            this.button4.hide();//uttara changes
            gameState = 2;//uttara changes
            playerObj.character = "ch2";//uttara changes
  
            this.greeting.html("Welcome " + playerObj.name);//uttara changes
            this.greeting.position(200, 250);//uttara changes
        });

        this.button3.mousePressed(() => {
            this.button1.hide();//uttara changes
            this.button2.hide();//uttara changes
            this.button3.hide();//uttara changes
            this.button4.hide();//uttara changes
            gameState = 2;//uttara changes
            playerObj.character = "ch3";//uttara changes
  
            this.greeting.html("Welcome " + playerObj.name);//uttara changes
            this.greeting.position(200, 250);//uttara changes
        });

        this.button4.mousePressed(() => {
            this.button1.hide();//uttara changes
            this.button2.hide();//uttara changes
            this.button3.hide();//uttara changes
            this.button4.hide();//uttara changes
            gameState = 2;//uttara changes
            playerObj.character = "ch4";//uttara changes
  
            this.greeting.html("Welcome " + playerObj.name);//uttara changes
            this.greeting.position(200, 250);//uttara changes
        });
      });
    }
  }
  hide() {
    this.title.hide();
    if ((this.playButton, this.inputbox)) {
      this.inputbox.hide();
      this.playButton.hide();
    }
    this.greeting.hide();
  }
}
