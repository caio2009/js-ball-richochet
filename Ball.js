class Ball {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = colors.green

    this.direction = directions.RIGHT_DOWN
    this.angle = randomAngle()
  }

  setColor(color) {
    this.color = color
  }

  render() {
    const path = new Path2D()
    
    path.arc(
      this.x + this.radius, 
      this.y + this.radius, 
      this.radius, 
      0, 2 * Math.PI
    )
    
    return path
  }

  // nextDirection() {
  //   const functions = {
  //     [directions.RIGHT_DOWN]: () => {
  //       this.x > this.y ? (this.direction = directions.LEFT_DOWN) : (this.diretion = directions.RIGHT_UP)
  //     },
  //     [directions.RIGHT_UP]: () => {
  //       this.x > this.y && this.y > 0 ? (this.direction = directions.LEFT_UP) : (this.diretion = directions.RIGHT_DOWN)
  //     },
  //     [directions.LEFT_DOWN]: () => {
  //       this.x > this.y ? (this.direction = directions.LEFT_UP) : (this.diretion = directions.RIGHT_DOWN)
  //     },
  //     [directions.LEFT_UP]: () => {
  //       this.x < this.y ? (this.direction = directions.LEFT_DOWN) : (this.diretion = directions.RIGHT_UP)
  //     }
  //   }

  //   const func = functions[this.direction]
  //   func()
  // }

  nextAngle() {
    const funcs = {
      [directions.RIGHT_DOWN]: () => this.angle = randomAngle(),
      [directions.RIGHT_UP]: () => this.angle = 360 - randomAngle(),
      [directions.LEFT_DOWN]: () => this.angle = 180 - randomAngle(),
      [directions.LEFT_UP]: () => this.angle = 180 + randomAngle()
    }

    const func = funcs[this.direction]
    func()
  }
}