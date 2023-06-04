import BackgroundLayer from "./BackgroundLayer"

const canvas =  document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D 
const slider = document.getElementById("slider") as HTMLInputElement
const speedElement = document.querySelector("p") as HTMLParagraphElement


export let gameSpeed = 5

slider.addEventListener("input", (e: Event) => {
    if(e === null || e.target === null) return
    gameSpeed = parseInt((e.target as HTMLInputElement).value)
    speedElement.innerHTML = `Game Speed: ${gameSpeed}`
})

const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 700

canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT

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
const backgroundLayers = backgroundImages.map((backgroundImage, idx) => 
(new BackgroundLayer(backgroundImage, ctx, idx === backgroundImages.length - 1 ? 1 : 0.5)))

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    backgroundLayers.forEach(layer => {
        layer.draw()
        layer.update()
    })
    requestAnimationFrame(animate)
}

animate()


