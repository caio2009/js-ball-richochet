class Board {
  constructor(width, height) {
    this.width = width
    this.height = height

    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')

    this.initSettings()
    
    document.querySelector('#container').append(this.canvas)
  }

  initSettings() {
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  clear() {
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  append(ball) {
    this.ctx.fillStyle = ball.color
    this.ctx.fill(ball.render())
  }

  collisionWith(ball) {
    if (
      ball.x + 2 * ball.radius > this.width ||
      ball.y + 2 * ball.radius > this.height ||
      ball.x < 0 ||
      ball.y < 0 
    ) {
      return true
    }

    return false
  }

  nextDirectionTo(ball) {
    const funcs = {
      [directions.RIGHT_DOWN]: () => {
        ball.direction = ball.x > ball.y ? directions.LEFT_DOWN : directions.RIGHT_UP
      },
      [directions.RIGHT_UP]: () => {
        ball.direction = this.width - ball.x - 2 * ball.radius > ball.y ? directions.LEFT_UP : directions.RIGHT_DOWN
      },
      [directions.LEFT_DOWN]: () => {
        ball.direction = this.height - ball.y - 2 * ball.radius < ball.x ? directions.LEFT_UP : directions.RIGHT_DOWN
      },
      [directions.LEFT_UP]: () => {
        ball.direction = ball.x > ball.y ? directions.LEFT_DOWN : directions.RIGHT_UP
      }
    }

    const func = funcs[ball.direction]
    func()
  }
}