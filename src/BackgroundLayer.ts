class BackgroundLayer {
    image: HTMLImageElement
    speedModifier: number
    x: number
    ctx: CanvasRenderingContext2D 
    gameSpeed: number
    constructor(image: HTMLImageElement, ctx: CanvasRenderingContext2D, gameSpeed: number, speedModifier: number = 1) {
        this.image = image
        this.speedModifier = speedModifier
        this.x = 0
        this.ctx = ctx
        this.gameSpeed = gameSpeed
    }
    draw() {
        this.ctx.drawImage(this.image, this.x, 0)
        this.ctx.drawImage(this.image, this.x + this.image.width, 0)
    }
    update() {
        this.x -= this.gameSpeed * this.speedModifier
        this.x %= this.image.width
    }
}

export default BackgroundLayer