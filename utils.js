const angles = [30, 45, 60]

const randomAngle = () => {
  return angles[Math.floor(Math.random() * 3)]
}

const directions = {
  RIGHT_DOWN: 0,
  RIGHT_UP: 1,
  LEFT_DOWN: 2,
  LEFT_UP: 3
}

const cosByDeg = (deg) => {
  return Math.cos(deg * Math.PI / 180)
}

const sinByDeg = (deg) => {
  return Math.sin(deg * Math.PI / 180)
}