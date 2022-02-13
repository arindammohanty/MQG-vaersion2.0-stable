class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here");
    this.input2 = createInput(" ");
    this.input3 = createInput(" ");
    this.button = createButton('Submit');
    this.button2 = createButton('submit answer');
    this.button3 = createButton('submit answer');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.button3.hide();
    this.input2.hide();
    this.input3.hide();
    this.button2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

   
    this.input1.position(375, 150);
    
    this.button.position(415, 300);
    this.button2.hide();
    this.button3.hide();
    this.input2.hide();
    this.input3.hide();
    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.show();
      this.input3.hide();
      this.button2.show();
      this.button3.hide();
      this.button.hide();
      this.question.html("Question:- The Strongest muscle in the human body is- " );
      this.question.position(150, 80);
      this.option1.html("1: wrist muscle  " );
      this.option1.position(150, 100);
      this.option2.html("2: thigh muscles " );
      this.option2.position(150, 120);
      this.option3.html("3: tongue " );
      this.option3.position(150, 140);
      this.option4.html("4: neck " );
      this.option4.position(150, 160);
      this.input2.position(350, 230);
      this.button2.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.input3.show();
        this.button2.hide();
        this.button.hide();
        this.button3.show();
        this.question.html("Question:- How much rest does an ant need in a 12 hour time period " );
        this.question.position(150, 80);
        this.option1.html("1: 11-12hours " );
        this.option1.position(150, 100);
        this.option2.html("2: 3-4 hours " );
        this.option2.position(150, 120);
        this.option3.html("3: 30-40 mins " );
        this.option3.position(150, 140);
        this.option4.html("4: 5-10 mins " );
        this.option4.position(150, 160);
        this.input3.position(350, 230);

      })
      this.button3.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.button2.hide();
        this.button.hide();
        quiz.update(1);
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestant.answer1 = this.input3.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
      })
    });
  }
}
