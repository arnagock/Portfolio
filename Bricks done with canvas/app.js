/*===================================
        1. Create Classes
===================================*/

var Game = function (ball, paddle) {
  //create canvas
  this.canvas = document.getElementById("canvas");
  this.canvas.height = 600;
  this.canvas.width = 800;
  this.ctx = canvas.getContext("2d");

  //create sub-components of game class: ball, blocks, paddle (descending importance) - in html file, show the most important one first.
  this.ball = ball; //ball should be part of game.
  this.blocks = []; //blocks array should be part of the game
  this.numberOfBlocksUsed = 0;
  this.nrOfRows = 0;
  this.Colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque", "BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan"];
  this.paddle = paddle; //paddle should be part of game.
}

var ball1 = new Ball([300,500],10); //[initialPosArray], radius
var paddle = new Paddle([300,570],20,150,"#FFF"); //[x,y] position - BEWARE: position of rectangle refers to upper-left corner!
var game1 = new Game(ball1, paddle);


/*===================================
        2. Create Methods
===================================*/

Game.prototype.move = function (){
  if (this.ball.position[0]+this.ball.radius == this.canvas.width) {
    this.ball.horizontalMove = -1;
  } else if (this.ball.position[0] - this.ball.radius -10== 0) { //why -10? because we drew our black box +10 from the left
    this.ball.horizontalMove = 1;
  }

  if (this.ball.horizontalMove == 1) {
    this.ball.position[0]+=this.ball.speed;
  } else if (this.ball.horizontalMove == -1) {
    this.ball.position[0]-=this.ball.speed;
  }


if (this.ball.position[1]+this.ball.radius == this.canvas.height) {
    alert("You lost!");


  } else if (this.ball.position[1] - 10- this.ball.radius== 0) {
    this.ball.verticalMove = 1;
  }

  if (this.ball.verticalMove == 1) {
    this.ball.position[1]+=this.ball.speed;;
  } else if (this.ball.verticalMove == -1) {
    this.ball.position[1]-=this.ball.speed;
  }

}
Game.prototype.renderBall = function() { // context as parameter? Solutions
  //render the ball:
  this.ctx.beginPath(); // start drawing something (here arc)
  this.ctx.arc(this.ball.position[0], this.ball.position[1], this.ball.radius, 0, 2*Math.PI);

  /*
  x	The x-coordinate of the center of the circle
  y	The y-coordinate of the center of the circle
  r	The radius of the circle
  sAngle	The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)	Play it »
  eAngle	The ending angle, in radians	(for full circle, use Math.PI*2)
  counterclockwise	Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
  */
  this.ctx.closePath(); //finish drawing
  this.ctx.fillStyle = "#FFF";
  this.ctx.fill();
}

Game.prototype.resetCanvas = function() {
  this.ctx.fillStyle = '#000';
  //ctx.fillRect(x,y,width, height);
  this.ctx.fillRect(10,10,this.canvas.width, this.canvas.height);
}

Game.prototype.play = function() {
  var that = this;
  setInterval(function() {
    that.move();
    that.resetCanvas();
    that.renderBall();
    that.checkCollisions();
    that.paddleCollision();
    that.blocks.forEach(function(element){
      that.renderBlock(element);
    });
    that.renderPaddle();
  }, 10);
}

Game.prototype.setPlayingField = function(sizeArray) {
  this.canvas.width =sizeArray[0];
  this.canvas.height = sizeArray[1];
}

Game.prototype.renderBlock = function(blockToRender) {
  //this.ctx.beginPath();
  this.ctx.fillStyle = blockToRender.color;
  //ctx.fillRect(x,y,width, height); ..< use properties of each block ('element' of 'blocks' array) to fill the default properties of fillRect();
  this.ctx.fillRect(blockToRender.position[0],blockToRender.position[1],blockToRender.width,blockToRender.height);
  //this.ctx.closePath();

}

Game.prototype.createBlocks = function() {
  this.numberOfBlocksUsed = Math.floor(this.canvas.width / 60); //width of one block is 50, but leave space of 5 around each
  this.nrOfRows = Math.floor(this.canvas.height/ 30/2); //one block is 20 wide, but we want to fill only half the screen with blocks
  var position = [-40,-10]; //start at y = -40, because the first row will already places at +35 down
  for (var j = 0; j < this.nrOfRows; j++) {
      position[1] = position[1]+35;
      position[0] = -40;
    for (var i = 0; i < this.numberOfBlocksUsed; i++) {
      var blockToAdd = "block"+j+i; //that way, the first block will be "block00", then block01, block02, tthen in next row block11, block 12, etc.
      position[0] = position[0]+60;
      var clonedPos = position.slice(0); //'clones' whole position array [0,1] agaain in order to 'freeze' the current state - otherwise (if numbers other than 0 are input), slice would pick only part of array
      var randomColor = Math.floor(Math.random() * (this.Colors.length-1));
      //now, input the current position array [clonedPos] into block to add
      var blockToAdd = new Block(clonedPos,25,50,this.Colors[randomColor],blockToAdd);
      this.blocks.push(blockToAdd);
    };
  }
}


Game.prototype.renderPaddle = function() {
  this.ctx.beginPath();
  this.ctx.fillRect(this.paddle.position[0],this.paddle.position[1],this.paddle.width,this.paddle.height);
  this.ctx.closePath();
  this.ctx.fillStyle = this.paddle.color;
}

Game.prototype.movePaddle = function(direction){
  if (direction == "left" && this.paddle.position[0] > 20) {
    this.paddle.position[0]=this.paddle.position[0]-10; // -10 due to edge of box
  } else if (direction == "right" && this.paddle.position[0] < (this.canvas.width-10) - this.paddle.width) {
    this.paddle.position[0]=this.paddle.position[0]+10;
  }
}

Game.prototype.checkCollisions = function() {
  var that = this;
  var ballX = this.ball.position[0];
  var ballY = this.ball.position[1];
  this.blocks.forEach(function(element) {
    var blockX = element.position[0];
    var blockY = element.position[1];

      if ((ballX + that.ball.innerSquare || ballX - that.ball.innerSquare)>= blockX && (ballX + that.ball.innerSquare || ballX - that.ball.innerSquare)<= blockX + element.width) {
        if ((ballY + that.ball.innerSquare || ballY - that.ball.innerSquare) >= blockY && (ballY + that.ball.innerSquare || ballY - that.ball.innerSquare) <= blockY + element.height) {
          that.blocks.splice(that.blocks.indexOf(element),1);
          that.ball.verticalMove = that.ball.verticalMove * -1;
        }
  }});
}


    /*if(ballX === blockX) {
      for (var i = 0; i < element.height -1; i++) { // collision left
        if (ballY == blockY +i) {
          element.color = "black";
        }
      }
    } else if (ballX == blockX + element.width) {
      for (var i = 0; i < element.height -1; i++) {
        if (ballY == blockY + i) {
          element.color = "black";
        }
      }
    } else if (ballY == blockY) { //top collision
      for (var i = 0; i < element.width -1; i++) {
        if (ballX == blockX +i) {
        }
      }
    } else if (ballY == blockY + element.height) {
      for (var i = 0; i < element.width -1; i++) {
        if (ballX == blockX +i) {
          element.color = "black";
        }
      }
    }
  });
};*/


Game.prototype.paddleCollision = function() {
  var ballX = this.ball.position[0];
  var ballY = this.ball.position[1];
  var paddleX = this.paddle.position[0];
    var paddleY = this.paddle.position[1];

    if ((ballX + this.ball.innerSquare || ballX - this.ball.innerSquare)>= paddleX && (ballX + this.ball.innerSquare || ballX - this.ball.innerSquare)<= paddleX + this.paddle.width) {
      if ((ballY + this.ball.innerSquare || ballY - this.ball.innerSquare) >= paddleY && (ballY + this.ball.innerSquare || ballY - this.ball.innerSquare) <= paddleY + this.paddle.height) {

        this.ball.verticalMove = this.ball.verticalMove * -1;
      }
    }
}


/*===================================
        3. Call Methods
===================================*/

game1.setPlayingField([800,600]); //optional method, default height / width is provided in the 'game' class
game1.createBlocks(); //default method, must be run
game1.play();

document.addEventListener("keydown", function(event) {
  /// instead of this method, set global var to true on keydown and to false on keyup. now move as long as
  // variablke is ture. runs way more smothe
  if (event.keyCode == 37) {
    game1.movePaddle("left");
  } else if (event.keyCode == 39) {
    game1.movePaddle("right");
  }
});
