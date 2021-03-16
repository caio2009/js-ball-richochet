class Board {
  constructor() {
    this.canvas = document.getElementById('board')
    this.context = this.canvas.getContext('2d')

    this.width = this.canvas.width
    this.height = this.canvas.height
  }

  clear() {
    this.context.fillStyle = '#000'
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

const angles = [30, 45, 60]

const randomAngle = () => {
  return angles[Math.floor(Math.random() * 3)]
}

class Square {
  constructor(size, x, y) {
    this.size = size
    this.x = x
    this.y = y
    this.direction = 'RightDown'
    this.movementAngle = randomAngle()
  }

  setColor(color) {
    this.color = color
  }

  nextDirection() {
    if (this.direction === 'RightDown') {
      if (this.x > this.y) {
        this.direction = 'LeftDown'
      } else {
        this.direction = 'RightUp'
      }
      return
    }

    if (this.direction === 'RightUp') {
      if (256 - this.x < this.y) {
        this.direction = 'LeftUp'
      } else {
        this.direction = 'RightDown'
      }
      return
    }

    if (this.direction === 'LeftDown') {
      if (256 - this.y < this.x) {
        this.direction = 'LeftUp'
      } else {
        this.direction = 'RightDown'
      }
      return
    }

    if (this.direction === 'LeftUp') {
      if (this.x > this.y) {
        this.direction = 'LeftDown'
      } else {
        this.direction = 'RightUp'
      }
    }
  }

  nextAngle() {
    if (this.direction === 'RightDown') {
      this.movementAngle = randomAngle()
      return
    }

    if (this.direction === 'RightUp') {
      this.movementAngle = 360 - randomAngle()
      return
    }

    if (this.direction === 'LeftDown') {
      this.movementAngle = 180 - randomAngle()
      return
    }

    this.movementAngle = 180 + randomAngle()
  }
}

const cosine = (deg) => {
  return Math.cos(deg * Math.PI / 180)
}

const sine = (deg) => {
  return Math.sin(deg * Math.PI / 180)
}

const draw = (board, square) => {
  board.clear()
  board.context.font = '16px helvetica'
  board.context.fillStyle = square.color
  board.context.fillText('DVD', square.x, square.y)
}

const handleSquareMovement = (square, board) => {
  if (
    square.x + cosine(square.movementAngle) > 0 &&
    square.x + cosine(square.movementAngle) < board.width - 32 &&
    square.y + sine(square.movementAngle) > 12 &&
    square.y + sine(square.movementAngle) < board.height /*- square.size*/
  ) {
    square.x += cosine(square.movementAngle)
    square.y += sine(square.movementAngle)
    return
  }

  square.nextDirection()
  square.nextAngle()
}

const main = () => {
  const board = new Board()
  board.clear()

  const square = new Square(16, 0, 12)
  square.setColor('white')

  setInterval(() => {
    draw(board, square)

    handleSquareMovement(square, board)
  }, 1000 / 60)
}

document.addEventListener('DOMContentLoaded', main)