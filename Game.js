class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      

      
    }
  
    play(){
      form.hide();
      player1 = createSprite(displayWidth/2, (displayHeight-150)/2, 50, 50);
      player1.visible = false
      player2 = createSprite(displayWidth/2, (displayHeight-150)/2, 50, 50);
      player2.visble=false;
      player3 = createSprite(displayWidth/2, (displayHeight-150)/2, 50, 50);
      player3.visble=false;
      player4 = createSprite(displayWidth/2, (displayHeight-150)/2, 50, 50);
      player4.visble=false;
      player5 = createSprite(displayWidth/2, (displayHeight-150)/2, 50, 50);
      player5.visble=false;
      player6 = createSprite(displayWidth/2, (displayHeight-150)/2, 50, 50);
      player6.visble=false;
      ballSprite = createSprite(displayWidth/2, 10, 30,30);
      ballSprite.addImage(soccerBall);
      ballSprite.scale = 0.1;
      ballSprite.visible = false;

      players = [player1,player2,player3,player4,player5,player6];
      

      Player.getPlayerInfo();
      
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(soccerImg, 0, (-displayHeight-1000)/2, displayWidth, displayHeight+1000);
        
        player1.visible = true;
        player2.visible = true;
        player3.visible = true;
        player4.visible = true;
        player5.visible = true;
        player6.visible = true;
        ballSprite.visible = true;
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 660 ;
        var y = 520;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = displayWidth - allPlayers[plr].distanceX;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distanceY;
          players[index-1].x = x;
          players[index-1].y = y;
         // console.log(index, player.index)
  
         
          if (index === player.index){
            
            camera.position.x = players[index-1].x;
            camera.position.y = players[index-1].y;
            if(index < 3){
              allPlayers[plr].distanceX = index * 220;
              allPlayers[plr].distanceY = 520;
            }
            else{
              
            }
          }

         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distanceY +=10
        player.update();
        
      }
      if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.distanceY -=10
        player.update();
      }
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distanceX -=10
        player.update();
      }
      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.distanceX +=10
        player.update();
      }
      if(player1.isTouching(ballSprite)){
        
      }
      /*if(player2.isTouching()){
        
      }
      if(player3.isTouching()){
        
      }
      if(player4.isTouching()){

      }
      if(player5.isTouching()){
        
      }
      if(player6.isTouching()){
        
      }*/
      switch(player.brawlerNum){
        case 1:
      }
      
      
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      
    }
  }