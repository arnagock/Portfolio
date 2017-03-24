var Ball = function(initialPosArray, radius, speed) {
  this.position = initialPosArray; //init position.
  this.radius = radius;
  this.horizontalMove = 1;
  this.verticalMove = 1;// approximation for ball size
  this.speed = speed;
  this.additionalCorners = [];
  this.innerSquare = Math.floor(radius*Math.cos(Math.PI/4));
  this.noScoreCounter = 0;
}

Ball.prototype.calculateAddCorners = function(){
  this.additionalCorners.push([Math.floor(this.position[0]+this.radius*Math.cos(Math.PI/4)),Math.floor(this.position[1]+this.radius*Math.cos(Math.PI/4))]);

  this.additionalCorners.push([Math.floor(this.position[0]-this.radius*Math.cos(Math.PI/4)),Math.floor(this.position[1]-this.radius*Math.cos(Math.PI/4))]);

  this.additionalCorners.push([Math.floor(this.position[0]+this.radius*Math.cos(Math.PI/4)),Math.floor(this.position[1]-this.radius*Math.cos(Math.PI/4))]);

  this.additionalCorners.push([Math.floor(this.position[0]-this.radius*Math.cos(Math.PI/4)),Math.floor(this.position[1]+this.radius*Math.cos(Math.PI/4))]);

  this.additionalCorners.push([this.position[0]+this.radius,this.position[1]]);

  this.additionalCorners.push([this.position[0]-this.radius,this.position[1]]);

  this.additionalCorners.push([this.position[0],this.position[1]+this.radius]);

  this.additionalCorners.push([this.position[0],this.position[1]-this.radius]);
  }

/*})();*/
