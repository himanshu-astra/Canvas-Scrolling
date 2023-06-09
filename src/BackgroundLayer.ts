import { gameSpeed } from "."

class BackgroundLayer {
    image: HTMLImageElement
    speedModifier: number
    x: number
    ctx: CanvasRenderingContext2D 

    constructor(image: HTMLImageElement, ctx: CanvasRenderingContext2D, speedModifier: number = 1) {
        this.image = image
        this.speedModifier = speedModifier
        this.x = 0
        this.ctx = ctx
    }
    draw() {
        this.ctx.drawImage(this.image, this.x, 0)
        this.ctx.drawImage(this.image, this.x + this.image.width, 0)
    }
    update() {
        this.x -= gameSpeed * this.speedModifier
        this.x %= this.image.width
    }
}

export default BackgroundLayer


// This works by keeping same images stacked, ---Image---|---Image---
// X captures a slice of this image, and as x moves and reaches end, the second image gets shown,
// as soon as the block of second image is shown, we move back to the first image