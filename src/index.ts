import BackgroundLayer from "./BackgroundLayer"
const canvas =  document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D 

const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 700

canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT

let gameSpeed = 5

const BACKGROUND_IMAGES = 5
const loadBackgroundImages = () => {
    const images = []
    for(let i = 0; i < BACKGROUND_IMAGES; i++) {
        const backgroundImage = new Image()
        backgroundImage.src = `/public/assets/background/layer-${i + 1}.png`
        images.push(backgroundImage)
    }
    return images
}

const backgroundImages = loadBackgroundImages();
const backgroundLayers = backgroundImages.map(backgroundImage => (new BackgroundLayer(backgroundImage, ctx, gameSpeed, 1)))

let x = 0;
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    backgroundLayers.forEach(layer => {
        layer.draw()
        layer.update()
    })
    requestAnimationFrame(animate)
}

animate()


