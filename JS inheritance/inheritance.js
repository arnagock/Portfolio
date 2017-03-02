var Person = function(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.isAlive = true;
}


var Writer = function(firstName,lastName){
  Person.call(this,firstName,lastName);
  var firstpseudo = this.firstName.split('').reverse().toString().replace(/,/g,"").toLowerCase();
  var lastpseudo = this.lastName.split('').reverse().toString().replace(/,/g,"").toLowerCase();
  this.pseudonym =  lastpseudo+ " "+firstpseudo;
}

var Developer = function(firstName,lastName,codeName){
  Person.call(this,firstName,lastName);
  this.codeName = codeName;
}

var JuniorDeveloper = function(firstName,lastName,codeName){
  Developer.call(this,firstName,lastName,codeName);
  this.isStruggling = true;
}

var Singer = function(firstName,lastName, melody){
  Person.call(this,firstName,lastName);
  this.artisticName = "Fancy "+firstName+" "+lastName;
  this.melody = melody;
}

Writer.prototype = Object.create(Person.prototype);
Developer.prototype = Object.create(Person.prototype);
JuniorDeveloper.prototype = Object.create(Developer.prototype);
Singer.prototype = Object.create(Person.prototype);

Person.prototype.greet = function() {
  console.log("Hello this is "+this.firstName+" "+this.lastName);
}

Writer.prototype.signBook = function(){
  console.log(this.pseudonym);
}

Singer.prototype.sing = function(){
  for (var i = 0; i < 3; i++) {
    console.log(this.melody);
  }

}

JuniorDeveloper.prototype.complain = function(){
      console.log(this.codeName.toUpperCase());
}

JuniorDeveloper.prototype.workHard = function(){
  for (var i = 0; i < 10; i++) {
      console.log(this.codeName +" is working hard!");
  }
}

Developer.prototype.impress = function(){
  for (var i = 0; i < 5; i++) {
    console.log("0 1");
  }
  console.log(this.codeName);
}

var writer1 = new Writer("Friedrich","Fridler");
var developer1 = new Developer("Adrian","Atlas","Arnagock");
var singer = new Singer("Adrian","Atlas","Hey Hoo let's go!!");
var junior = new JuniorDeveloper("Adrian","Atlas","Arnagock");
writer1.signBook();
writer1.greet();
developer1.impress();
singer.sing();
junior.complain();
junior.workHard();
junior.impress();
