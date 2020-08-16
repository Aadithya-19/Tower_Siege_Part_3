class hitter {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;

        this.body = Bodies.rectangle(x,y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon_img.jpg");
        World.add(world, this.body);
      }
      display(){
        push();      
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
    }
    };
    
