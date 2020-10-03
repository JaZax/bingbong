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
                console.log('elo')
                this.playAudio()
            }
        }
        else {
            dots.shift()
        }

    }

    playAudio() {
        console.log(this.colorTile + 1)

        var snd1 = new Audio();
        var src1 = document.createElement("source");
        src1.type = "audio/mpeg";
        src1.src = "sounds/" + this.colorTile + ".wav";
        snd1.appendChild(src1);

        snd1.play()
    }
}