class Form {

  constructor() {
    this.input = createInput("Name");
    this.input2 = createInput("Choose Character");
    this.button = createButton('Sign-Up');
    this.title = createElement('h1');
  }
  hide(){
    this.button.hide();
    this.input.hide();
    this.input2
    this.title.hide();
  }

  display(){
    this.title.html("Destruction Ball");
    this.title.position(displayWidth/2 - 50 - 50, 0);

    this.input.position(displayWidth/2 - 70 , displayHeight/2 - 80);
    this.input2.position(displayWidth/2 - 70 , displayHeight/2 - 30);
    this.button.position(displayWidth/2 - 10, displayHeight/2+ 30);
    

    this.button.mousePressed(()=>{
      this.input.hide();
      this.input2.hide();
      this.button.hide();
      this.title.hide();
      player.name = this.input.value();
      player.brawlerNum = this.input2.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      
    });

    

  }
}
