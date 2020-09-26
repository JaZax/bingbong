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
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    fall() {
        if (this.y <= canvas.height - 185) {
            this.fallSpeed += this.fallAcceleration
            this.y += this.fallSpeed
            this.opacity -= 20
        } else {
            dots.shift()
        }

    }
}