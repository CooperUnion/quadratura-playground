import { PythonShell }  from 'python-shell'

let display = new PythonShell('display.py', {
  pythonOptions: ['-u']
})

class Screen {
  constructor(location = 'images/'){
    this.counter = 0
    this.limit = 10
    this.location = location
    this.render = this.shell
  }

  shell (p = this.p, canvas=this.canvas) {
    display.send(canvas.canvas.toDataURL())
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
