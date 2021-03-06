const wHeight = window.innerHeight
const wWidth = window.innerWidth

const canvas = document.getElementById('canvas')
canvas.height = wHeight - 100
canvas.width = wWidth
const ctx = canvas.getContext('2d')

const canvas2 = document.getElementById('canvas2')
canvas2.height = 100
canvas2.width = wWidth
const ctx2 = canvas2.getContext('2d')

const colors = ['#EF476F', '#ffd166', '#06d6a0', '#118ab2', '#073b4c']

let tileWidth = canvas.width / 5
let currentTileX = 0

for (i = 0; i < 5; i++) {
    ctx2.fillStyle = colors[i]
    ctx2.fillRect(currentTileX, canvas2.height - 100, tileWidth, 200)

    currentTileX = currentTileX + tileWidth
}

const notesPaths = ['/1.wav', '/2.wav', '/3.wav', '/4.wav', '/5.wav']
const notes = []

let dots = []

canvas.addEventListener('click', (e) => {

    if (e.clientY < canvas.height - 150) {
        dots.push(new dot(e.clientX, e.clientY, 50))

    }

    console.log(dots)
})




let action = () => {
    window.requestAnimationFrame(action);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < dots.length; i++) {
        dots[i].draw()
        dots[i].fall()
    }

    /*
    for (i = 0; i < 5; i++) {
        ctx.fillStyle = colors[i]
        ctx.fillRect(currentTileX, canvas.height - 100, tileWidth, 200)

        currentTileX = currentTileX + tileWidth
    }
    */
}

action()