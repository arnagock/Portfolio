/*===================================
        1. Create Classes
===================================*/

var Game = function (ball, paddle, players) {
  //create canvas
  this.canvas = document.getElementById("canvas");
  this.canvas.height = 600;
  this.canvas.width = 800;
  this.ctx = canvas.getContext("2d");
  this.players = (players);
  this.ball = ball; //ball should be part of game.
  this.paddle = paddle; //paddle should be part of game.
  this.gameInterval;
}



/*===================================
        2. Create Methods
===================================*/

/// canvas

Game.prototype.resetCanvas = function() {
  this.ctx.fillStyle = '#000';
  this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
  this.ctx.beginPath();
  //this.ctx.setLineDash([5, 15]);
  this.ctx.moveTo(this.canvas.width/2 ,10);
  this.ctx.lineTo(this.canvas.width/2 ,this.canvas.height-10);
  this.ctx.stroke();
  this.ctx.strokeStyle="red"; // red path
  this.ctx.moveTo(10 ,10);
  this.ctx.lineTo(this.canvas.width-10,10);
  this.ctx.lineTo(this.canvas.width-10,this.canvas.height-10);
  this.ctx.lineTo(10,this.canvas.height-10);
  this.ctx.lineTo(10,10);
  this.ctx.stroke();
}

Game.prototype.play = function() {
  document.addEventListener("keydown", function(event) {
    if (event.keyCode == 87) {
      game1.paddle[0].moveUp = true;
    } else if (event.keyCode == 83) {
      game1.paddle[0].moveDown= true;
    }else if (event.keyCode == 38) {
      game1.paddle[1].moveUp = true;
    }else if (event.keyCode == 40) {
      game1.paddle[1].moveDown = true;
    }
  });

  document.addEventListener("keyup", function(event) {
    if (event.keyCode == 87) {
      game1.paddle[0].moveUp = false;
    } else if (event.keyCode == 83) {
      game1.paddle[0].moveDown = false;
    }else if (event.keyCode == 38) {
      game1.paddle[1].moveUp = false;
    }else if (event.keyCode == 40) {
      game1.paddle[1].moveDown = false;
    }
  });
  var that = this;
  this.gameInterval = setInterval(function() {
    that.moveAndScore();
    that.flashByScore();
    that.ball.additionalCorners = [];
    that.ball.calculateAddCorners();
    that.resetCanvas();
    that.renderBall();
    that.movePaddle();
    that.renderPaddle();
    that.paddleCollision();
    that.showScore();
    that.showName();

    // counter checks every cycle without a score. after 7secs he increases speed by 1
    that.ball.noScoreCounter +=1;
    if (that.ball.noScoreCounter === 438) {
      that.ball.speed +=1;
      that.ball.noScoreCounter = 0;
    }
    that.finishRound();
    that.endGame();
    that.declareWinner();



  }, 16);//60 fps
}

Game.prototype.showScore = function(){
  this.ctx.font="bold 24px verdana, sans-serif ";
  this.ctx.fillStyle = "white";
  this.ctx.fillText(this.players[0].score,350,50);
  this.ctx.font="bold 24px verdana, sans-serif ";
  this.ctx.fillStyle = "white";
  this.ctx.fillText(this.players[1].score,432,50);

  this.ctx.font="bold 12px verdana, sans-serif ";
  this.ctx.fillStyle = "white";
  this.ctx.fillText(this.players[0].gamesWon,15,25);
  this.ctx.font="bold 12px verdana, sans-serif ";
  this.ctx.fillStyle = "white";
  this.ctx.fillText(this.players[1].gamesWon,777,25);

}
  Game.prototype.showName = function (){
    var name = this.players[0].name
    this.ctx.font="bold 24px verdana, sans-serif ";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.players[0].name,Math.floor(this.ctx.measureText(this.players[0].score).width) +350 - Math.floor(this.ctx.measureText(name).width),100);
    this.ctx.font="bold 24px verdana, sans-serif ";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.players[1].name,432,100);

  }
///BALL
Game.prototype.renderBall = function() { // context as parameter? Solutions
  //render the ball:
  this.ctx.beginPath(); // start drawing something (here arc)
  this.ctx.arc(this.ball.position[0], this.ball.position[1], this.ball.radius, 0, 2*Math.PI);
  this.ctx.closePath(); //finish drawing
  this.ctx.fillStyle = "red";
  this.ctx.fill();
}

Game.prototype.flashByScore =function(){
  var that = this;
  var redCounter = 0;
  //first if prohibits red intervall to go on at the end of the game
  if (this.ball.position[0]+this.ball.radius >= this.canvas.width-10) {
      var myInterval = setInterval(function() {
        if (redCounter=== 5 || that.endGame()) {
          clearInterval(myInterval);
          redCounter=0;
          return;
        }
        that.ctx.fillStyle = 'red';
        that.ctx.fillRect(400,10,this.canvas.width/2, this.canvas.height);
        redCounter+=1;
      },16);
} else if (this.ball.position[0] - this.ball.radius <= 10) { //why -10? because we drew our black box +10 from the left
    var myInterval = setInterval(function() {
      if (redCounter=== 5 || that.endGame()) {
        clearInterval(myInterval);
        redCounter=0;
        return;
      }
      that.ctx.fillStyle = 'red';
      that.ctx.fillRect(10,10,this.canvas.width/2 -10, this.canvas.height);
      redCounter+=1;
    },16);
  }


};
Game.prototype.moveAndScore = function (){
  var that = this;
  var redCounter = 0;
  //first if prohibits red intervall to go on at the end of the game
  if (this.ball.position[0]+this.ball.radius >= this.canvas.width-10) {
      this.ball.horizontalMove = -1;
      this.players[0].score +=1;
      this.ball.speed = 5;

} else if (this.ball.position[0] - this.ball.radius <= 10) { //why -10? because we drew our black box +10 from the left
    this.ball.horizontalMove = 1;
    this.players[1].score +=1;
    this.ball.speed = 5;

  }

  if (this.ball.horizontalMove == 1) {
    that.ball.position[0]+=this.ball.speed;
  } else if (this.ball.horizontalMove == -1) {
    that.ball.position[0]-=this.ball.speed;
  }


  if (this.ball.position[1]+this.ball.radius >= this.canvas.height-10) {
    this.ball.verticalMove = -1;

  } else if (this.ball.position[1] - this.ball.radius<= 10) {
    this.ball.verticalMove = 1;

  }

  if (this.ball.verticalMove == 1) {
    this.ball.position[1]+=this.ball.speed;;
  } else if (this.ball.verticalMove == -1) {
    this.ball.position[1]-=this.ball.speed;
  }

}
//PADLE
Game.prototype.renderPaddle = function() {
  this.ctx.fillStyle = "white"//this.paddle.color;
  this.ctx.fillRect(this.paddle[0].position[0],this.paddle[0].position[1],this.paddle[0].width,this.paddle[0].height);

  this.ctx.fillStyle = "white"//this.paddle.color;
  this.ctx.fillRect(this.paddle[1].position[0],this.paddle[1].position[1],this.paddle[1].width,this.paddle[1].height);
}

Game.prototype.paddleCollision = function() {
  var that = this;
  var ballX = this.ball.position[0];
  var ballY = this.ball.position[1];
  this.paddle.forEach(function(element){
    var paddleX = element.position[0];
    var paddleY = element.position[1];
    var paddleHeight = element.height;
    var paddleWidth = element.width;
    that.ball.additionalCorners.forEach(function(allTheCorners) {
        if (allTheCorners[0] >= paddleX && allTheCorners[0] <= (paddleX + paddleWidth)) {
          if (allTheCorners[1] >= paddleY && allTheCorners[1] <= (paddleY + paddleHeight)) {
          that.ball.horizontalMove = that.ball.horizontalMove * -1;
          snd.play();
          }
        }
      });
  });
}

Game.prototype.movePaddle = function(){
  //left Paddle
  if (this.paddle[0].moveUp === true && this.paddle[0].position[1] > 15) {
    this.paddle[0].position[1]=this.paddle[0].position[1]-this.paddle[0].speed; // -10 due to edge of box
  } else if (this.paddle[0].moveDown === true && this.paddle[0].position[1] < (this.canvas.height - this.paddle[0].height -15)) {
    this.paddle[0].position[1]=this.paddle[0].position[1]+this.paddle[0].speed;
  }
//right paddle
  if (this.paddle[1].moveUp === true && this.paddle[1].position[1] > 15) {
    this.paddle[1].position[1]=this.paddle[1].position[1]-this.paddle[1].speed; // -10 due to edge of box
  } else if (this.paddle[1].moveDown === true && this.paddle[1].position[1] < (this.canvas.height - this.paddle[1].height - 15)) {
    this.paddle[1].position[1]=this.paddle[1].position[1]+this.paddle[1].speed;
  }
}
Game.prototype.endGame = function(){
  if (this.players[0].gamesWon === 2) {
    clearInterval(this.gameInterval);
    return true;
  }else if (this.players[1].gamesWon ===2) {
    clearInterval(this.gameInterval);
    return true;
  }
}
Game.prototype.declareWinner = function (){
  if (this.players[0].gamesWon === 2) {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
    this.ctx.font="bold 35px verdana, sans-serif ";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(this.players[0].name + " Won!!!",300 - (Math.floor(this.ctx.measureText(this.players[0].name).width) -7)/2,300);
    this.ctx.font="bold 24px verdana, sans-serif ";
    this.ctx.fillText("Games: " + this.players[0].gamesWon + " / " + this.players[1].gamesWon,300,350);


}else if (this.players[1].gamesWon === 2) {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
    this.ctx.font="bold 35px verdana, sans-serif ";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(this.players[1].name + " Won!!!",300 - (Math.floor(this.ctx.measureText(this.players[0].name).width) -7)/2,300);
    this.ctx.font="bold 24px verdana, sans-serif ";
    this.ctx.fillText("Games: "+ this.players[1].gamesWon + " / " + this.players[0].gamesWon,300,350);
  }

}
Game.prototype.finishRound = function(){
  if (this.players[0].score > this.players[1].score + 2 && this.players[0].score > 2) {
    this.players[0].gamesWon +=1;
    this.players[0].score = 0;
    this.players[1].score = 0;
    this.ball.position = [405,305];
}else if (this.players[1].score > this.players[0].score +2 && this.players[1].score > 2) {
    this.players[1].gamesWon +=1;
    this.ball.position = [405,305];
    this.players[0].score = 0;
    this.players[1].score = 0;
  }

}


/*===================================
        3. Call Methods
===================================*/
var snd = new Audio("bang.wav"); // buffers automatically when created
var player1Name = prompt("Please enter first player Name")
var player2Name = prompt("Please enter secound player Name")
var ball1 = new Ball([405,305],5,5); //[initialPosArray], radius
var paddle1 = new Paddle([13,225],130,20,"#FFF");
var paddle2 = new Paddle([767,225],130,20,"#FFF"); //[x,y] position - BEWARE: position of rectangle refers to upper-left corner!
var player1 = new Player(player1Name, "left");
var player2 = new Player(player2Name, "right");
var game1 = new Game(ball1, [paddle1, paddle2], [player1,player2]);
game1.play();
