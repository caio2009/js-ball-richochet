const FPS = 120

const draw = (board, ball) => {
  board.clear()
  board.append(ball)
}

const loop = (board, ball) => {
  if (!board.collisionWith(ball)) {
    ball.x += cosByDeg(ball.angle)
    ball.y += sinByDeg(ball.angle)
  } else {
    board.nextDirectionTo(ball)
    ball.nextAngle()

    ball.x += cosByDeg(ball.angle)
    ball.y += sinByDeg(ball.angle)
  }

  draw(board, ball)

  setTimeout(() => loop(board, ball), 1000 / FPS)
}

const app = () => {
  const board = new Board(256, 256)
  const ball = new Ball(0, 0, 8)

  // initial draw
  draw(board, ball)

  loop(board, ball)
}

document.addEventListener('DOMContentLoaded', app)