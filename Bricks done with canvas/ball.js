var Ball = function(initialPosArray, radius) {
  this.position = initialPosArray; //init position.
  this.radius = radius;
  this.horizontalMove = 1;
  this.verticalMove = 1;
  this.innerSquare = Math.floor(radius*Math.cos(Math.PI/4));
  this.speed = 2; 
}
