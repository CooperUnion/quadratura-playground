import { PythonShell }  from 'python-shell'
import Frame from 'canvas-to-buffer'

let display = new PythonShell('display-binary.py', {
  mode: 'binary',
  pythonOptions: ['-u']
})

display.on('message', function(message) {
  console.log("message", message)
})

display.on('pythonError', function(err) {
  console.log("pythonError", err1)
})

display.on('error', function(err) {
  console.log('error', err)
})

display.on('close', function(err){
  console.log('close', err)
})

class Screen {
  constructor(location = 'images/'){
    this.counter = 0
    this.limit = 10
    this.location = location
    this.render = this.binary
  }

  binary (p = this.p, canvas=this.canvas) {
    let frame = new Frame(canvas.canvas)
    let frameBuffer = frame.toBuffer()
    try {
      display.send(frameBuffer)
    } catch (e) {
      console.log(e)
    }
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
