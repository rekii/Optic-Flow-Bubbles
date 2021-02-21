class Particle {
    constructor(x,y,u,v,m,gu,gv,minX,maxX,minY,maxY) {
        this.x = x;
        this.y = y;
        this.u = u;
        this.v = v;
        this.m = m;
        this.gu = gu;
        this.gv = gv;
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
    }

    update() {
        this.x += this.u;
        this.y += this.v;

        this.u -= this.m*this.gu;
        this.v -= this.m*this.gv;

        // this.y < minY
        if (this.x < this.minX || this.x > this.maxX || this.y > this.maxY)
            return false;
        return true;
    }

    draw(ctx) {
      // var grad= ctx.createLinearGradient(this.x,this.y, this.x+this.u,this.y+this.v);
      // grad.addColorStop(0, "rgba(255,255,255,0)");
      // grad.addColorStop(1, "rgba(25, 129, 226, 0.6)");
      // ctx.strokeStyle= grad;
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x+this.u,this.y+this.v);
    }
}
