class Quiz {
  constructor(){}

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("lime");
    fill(0);
    textSize(30);
    text("And the results of the following 1 question quick quiz is ",100, 50);
    text("-------------------------------------------------------------------------",100, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      //debugger;
      var tAOTFQ = 230;
      fill("blue");
      textSize(20);
      text("*ThankYou for the participation your name will be highlighted in blue if you answered ",50,210);
      text("the following questions correctly ;) Stay Safe",50,230);

      for(var plr in allContestants){
       // debugger;
        var correctAns1 = "3";
        if (correctAns1 === allContestants[plr].answer){
          fill("blue")
          tAOTFQ+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 270,tAOTFQ);}
        else{
          fill("red");
        tAOTFQ+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 270,tAOTFQ);}
      }
      for(var plr1 in allContestants){
       // debugger;
        var correctAns2 = "4";
        if (correctAns2 ===allContestants[plr1].answer1)
            fill("blue")
           
        else
          fill("red");
        tAOTFQ+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr1].answer1, 270,tAOTFQ+30);
      }
    }
  }
}
