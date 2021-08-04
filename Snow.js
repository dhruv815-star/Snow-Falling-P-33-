class Snow 
{
    constructor(x,y)
    {
        var options =
        {
            restitution: 0.8,
            friction: 0.3,
            density: 1
        }
        this.body = Bodies.circle(x,y,40,options);
        this.r = 40;
        this.image = loadImage("snow5.webp");
        World.add(world,this.body);
    }

    display()
    {
       var pos = this.body.position;
       var angle = this.body.angle;

       push ();
       translate (pos.x,pos.y);
       rotate (angle);
       imageMode (CENTER);
       image(this.image,0,0,40,40);
       pop ();
    }
}