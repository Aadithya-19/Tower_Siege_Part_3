// class Box extends BaseClass {
//   constructor(x, y, width, height){
//     super(x,y,width,height);
//   }
//   display() {
//     super.display();
//   }
// };

class Box {
  constructor(x,y,width,height) {
    var options = {
        // isStatic: true
        // restituition : 0.4,
        // friction : 0.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity = 255;
  }
  display(){
    
    
    if(this.body.speed < 3){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
     }

     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       pop();
     }
  }
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -105){
      score++;
    }
  }
};
