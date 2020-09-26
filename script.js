const wHeight = window.innerHeight
const wWidth = window.innerWidth

const canvas = document.getElementById('canvas')
canvas.height = wHeight
canvas.width = wWidth
const ctx = canvas.getContext('2d')

const colors = ['#EF476F', '#ffd166', '#06d6a0', '#118ab2', '#073b4c']

let tileWidth = canvas.width / 5
let currentTileX = 0

let action = () => {
    window.requestAnimationFrame(action);
    console.log(tileWidth)

    for (i = 0; i < 5; i++) {
        ctx.fillStyle = colors[i]
        ctx.fillRect(currentTileX, canvas.height - 100, tileWidth, 100)

        currentTileX = currentTileX + tileWidth
    }
}

action()