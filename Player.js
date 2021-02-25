class Player {
    constructor(){
      this.index = null;
      this.distanceX = 670;
      this.distanceY = 520;
      this.name = null;
      this.brawlerNum = 0;
      this.trophies = 0;

      
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distanceX:this.distanceX,
        distanceY:this.distanceY,
        brawlerNum:this.brawlerNum
       

      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  
    
  
    
}