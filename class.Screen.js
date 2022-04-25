class Screen {
  constructor(location = 'images/'){
    this.counter = 0
    this.limit = 10
    this.location = location
    this.render = this.display
  }

  display (p = this.p, canvas=this.canvas) {
    console.log(canvas.canvas.toDataURL())
  }

  save(p = this.p, canvas=this.canvas) {
    this.counter++
    const fileName = `mySketch-${this.counter % this.limit}.png`;
    p.saveCanvas(canvas, "public/images/" + fileName, "png").then(
      (filename) => {
        console.log(`saved the canvas as ${filename}`)
        lastFile = fileName;
      }
    )
  }
}

export default Screen
