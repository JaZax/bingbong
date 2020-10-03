class dot {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.opacity = 255;
        this.fallSpeed = 5;
        this.fallAcceleration = 1;
        this.color = colors[Math.floor(Math.random() * colors.length)] + this.opacity.toString(16).toUpperCase()
    }

    draw() {
        let colorTile = Math.floor(this.x / tileWidth)

        ctx.fillStyle = colors[colorTile]
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();

        console.log(Math.floor(this.x / tileWidth))
    }

    fall() {
        if (this.y <= canvas.height) {
            this.fallSpeed += this.fallAcceleration
            this.y += this.fallSpeed
            this.opacity -= 20
        } else {
            dots.shift()
        }

    }
}