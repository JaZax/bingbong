class dot {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colorTile = Math.floor(this.x / tileWidth)

        this.opacity = 255;
        this.fallSpeed = 5;
        this.fallAcceleration = 1;
    }

    draw() {

        ctx.fillStyle = colors[this.colorTile]
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();

    }

    fall() {

        if (this.y <= canvas.height) {
            this.fallSpeed += this.fallAcceleration
            this.y += this.fallSpeed
            this.opacity -= 20
            if (this.y > canvas.height - this.radius) {
                this.playAudio()
            }
        }
        else {
            dots.shift()
        }

    }

    playAudio() {
        var sound = new Pizzicato.Sound();
        sound.play();
        sound.release = 0.9;
        sound.frequency = 880; 
        
        
        setTimeout(() => sound.stop(), 500);
    }
}