const wHeight = window.innerHeight
const wWidth = window.innerWidth

const canvas = document.getElementById('canvas')
canvas.height = wHeight
canvas.width = wWidth
const ctx = canvas.getContext('2d')

const colors = ['#EF476F', '#ffd166', '#06d6a0', '#118ab2', '#073b4c']

let tileWidth = canvas.width / 5
let currentTileX = 0

let dots = []

canvas.addEventListener('click', (e) => {
    dots.push(new dot(e.clientX, e.clientY, 40))
    console.log(dots)
})

let action = () => {
    window.requestAnimationFrame(action);
    ctx.clearRect(0, 0, canvas.width, canvas.height - 100);

    for (i = 0; i < dots.length; i++) {
        dots[i].draw()
        dots[i].fall()
    }

    for (i = 0; i < 5; i++) {
        ctx.fillStyle = colors[i]
        ctx.fillRect(currentTileX, canvas.height - 100, tileWidth, 100)

        currentTileX = currentTileX + tileWidth
    }

}

action()