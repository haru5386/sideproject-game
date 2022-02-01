import platform from '../image/platform.png'
import background from '../image/background.png'
import bgitems from '../image/bgitems.png'
import platformSmallTall from '../image/platformSmallTall.png'
import playerRightRun from '../image/playerRightRun.png'
import playerStand from '../image/playerStand.png'
import playerLeftRun from '../image/playerLeftRun.png'
import playerSuperRightRun from '../image/playerSuperRightRun.png'
import playerSuperStand from '../image/playerSuperStand.png'
import playerSuperLeftRun from '../image/playerSuperLeftRun.png'
import candy from '../image/candy.png'
import mouseImgR from '../image/mouseRight.png'
import mouseImgL from '../image/mouseLeft.png'
import mouseImgDied from '../image/mouseDied.png'
import box from '../image/box.png'
import backgroundAudio from '../audio/background.wav'
import coinAudio from '../audio/coin.mp3'
import lifeMinusAudio from '../audio/lifeminus.mp3'
import mouseDieAudio from '../audio/mouseDie.mp3'
import dieAudio from '../audio/die.mp3'
import jumpAudio from '../audio/jump.mp3'
import winAudio from '../audio/win.mp3'






const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.height = 576
canvas.width = 1024

const gravity = 0.3


// 建立玩家建構子
class Player {
  constructor() {
    this.speed = 6
    this.position = {
      x: 100,
      y: 200
    }
    this.velocity = {
      x: 0,
      y: 0

    }
    this.width = 91
    this.height = 100

    this.image = createImage(playerStand)
    this.frames = 0
    this.sprites = {
      normal: {
        stand: createImage(playerStand),
        run: {
          right: createImage(playerRightRun),
          left: createImage(playerLeftRun),
        }
      },
      super: {
        stand: createImage(playerSuperStand),
        run: {
          right: createImage(playerSuperRightRun),
          left: createImage(playerSuperLeftRun),
        }
      }
    }
    this.currentSprite = this.sprites.normal.stand
    this.state = 'normal'
  }

  statement() {
    setTimeout(() => {
      if (this.currentSprite === this.sprites.super.stand) {
        this.currentSprite = this.sprites.normal.stand
      } else if (this.currentSprite === this.sprites.super.run.right) {
        this.currentSprite = this.sprites.normal.run.right
      } else if (this.currentSprite === this.sprites.super.run.left) {
        this.currentSprite = this.sprites.normal.run.left
      }
      this.state = 'normal'
    }, 3000)
  }

  draw() {
    c.drawImage(
      this.currentSprite,
      457 * this.frames,
      0,
      457,
      503,
      this.position.x,
      this.position.y,
      this.width,
      this.height)

  }

  update() {
    this.frames++
    if (this.frames > 8) { this.frames = 0 }

    if (keys.right.pressed && this.state === 'normal') {
      this.currentSprite = this.sprites.normal.run.right
    } else if (keys.left.pressed && this.state === 'normal') {
      this.currentSprite = this.sprites.normal.run.left
    } else if (keys.right.pressed && this.state === 'super') {
      this.currentSprite = this.sprites.super.run.right
    } else if (keys.left.pressed && this.state === 'super') {
      this.currentSprite = this.sprites.super.run.left
    }
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    // console.log(this.state)

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity
    }
  }
}

// 建立老鼠建構子
class Mouse {
  constructor({ x, y, d }) {
    this.speed = 3
    this.startPosition = { x, y }
    this.position = { x, y }
    this.width = 61
    this.height = 30
    this.distance = d - this.width
    this.frame = 0
    this.allFrames = this.distance / this.speed
    this.sprites = {
      right: createImage(mouseImgR),
      left: createImage(mouseImgL),
      died: createImage(mouseImgDied)
    }
    this.currentSprite = this.sprites.right
    this.alive = true

  }

  draw() {
    c.drawImage(
      this.currentSprite,
      this.position.x,
      this.position.y,
      this.width,
      this.height)
  }

  update() {
    this.draw()
    this.position.x += this.speed
    this.frame++
    if (!this.alive) {
      this.currentSprite = this.sprites.died
      this.speed = 0
    }
    if (this.frame > this.allFrames) {
      this.speed = -this.speed
      this.currentSprite = (this.currentSprite === this.sprites.left) ? this.sprites.right : this.sprites.left
      this.frame = 0
    }

  }
}

// 建立平台建構子
class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }
    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

//建立背景建構子
class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }
    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

// 建立錢幣建構子

class Coin {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }
    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }

  clear() {
    c.clearRect(this.x, this.y, this.width, this.height)
  }
}

// 建立終點箱子
class Goal {
  constructor() {
    this.position = {
      x: 9400,
      y: 370
    }
    this.width = 180
    this.height = 99

    this.image = createImage(box)
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}

function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc
  image.addEventListener('load', () => {
    image.width
    console.log('imageWidth', image.width)
  })
  return image
}

function createAudio(audioSrc, isLoop) {
  const audio = new Audio()
  audio.src = audioSrc
  audio.loop = isLoop;
  console.log('audio', audio)
  return audio
}

function playAudio(audio) {
  audio.pause()
  audio.currentTime = 0;
  audio.play()
}

let playBackgroundAudio = createAudio(backgroundAudio, true)
let playCoinAudio = createAudio(coinAudio, false)
let playLifeMinusAudio = createAudio(lifeMinusAudio, false)
let playMouseDieAudio = createAudio(mouseDieAudio, false)
let playDieAudio = createAudio(dieAudio, false)
let playJumpAudio = createAudio(jumpAudio, false)
let playWinAudio = createAudio(winAudio, false)




let platformImage = createImage(platform)
let platformSmallTallImage = createImage(platformSmallTall)

let playerState = 'start'
let player = ''
let platforms = []
let genericObjects = []
let coins = []
let mice = [
]
let goal = ''
let win = document.querySelector(".win")
let finalScore = document.querySelector(".score")
let result = document.querySelector(".result")
let start = document.querySelector(".start")

const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}

let scrollOffSet = 0
let score = 0
let life = 3
let doubleJump = 0
let isLoading = true

// 建立元件
function init() {
  player = new Player()
  goal = new Goal()
  platformImage.width = 580
  platformSmallTallImage.width = 292

  platforms = [
    new Platform({
      image: platformSmallTallImage,
      x: platformImage.width * 4 + 300 + platformSmallTallImage.width,
      y: 350
    }),
    new Platform({
      x: platformImage.width * 4 + 300 + platformSmallTallImage.width * 2,
      y: 230,
      image: platformSmallTallImage
    }),
    new Platform({
      x: platformImage.width * 4 + 300 + platformSmallTallImage.width * 2,
      y: 350,
      image: platformSmallTallImage
    }),
    new Platform({
      x: platformImage.width * 9 + 300 - 5 + platformSmallTallImage.width * 2,
      y: 350,
      image: platformSmallTallImage
    }),
    new Platform({
      x: platformImage.width * 12,
      y: 350,
      image: platformSmallTallImage
    }),
    new Platform({
      x: platformImage.width * 14 + 9,
      y: 230,
      image: platformSmallTallImage
    }),
    new Platform({
      x: platformImage.width * 14 + 9,
      y: 350,
      image: platformSmallTallImage
    }),
    new Platform({
      x: platformImage.width * 14 + 9 - platformSmallTallImage.width,
      y: 350,
      image: platformSmallTallImage
    }),
    new Platform({
      x: 0,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width - 1,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 2 + 80,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 3 + 300,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 4 + 300,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 7,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 8,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 9 + 300,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 11,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 12,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 12 + 300,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 13 + 300,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 14 + 700,
      y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 15 + 700,
      y: 470,
      image: platformImage
    })]

  genericObjects = [
    new GenericObject({
      x: 0,
      y: 0,
      image: createImage(background)
    }
    ),
    new GenericObject({
      x: 0,
      y: 0,
      image: createImage(bgitems)
    }
    ),]

  coins = [
    new Coin({
      x: 1000,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 100,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 250,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 350,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 450,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 550,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 950,
      y: 250,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 1050,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 1150,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 1250,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 1350,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 1550,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 1650,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 1950,
      y: 260,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 2050,
      y: 260,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 2250,
      y: 150,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 2350,
      y: 150,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 3050,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 3150,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 3250,
      y: 250,
      image: createImage(candy)
    }),
    new Coin({
      x: 1000 + 3350,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 9 + 300,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 9 + 400,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 9 + 500,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 9 + 600,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 11 + 100,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 11 + 200,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 11 + 300,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 11 + 400,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 11 + 500,
      y: 380,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 11 + 650,
      y: 260,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 11 + 750,
      y: 260,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 13 + 320,
      y: 260,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 13 + 420,
      y: 260,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 13 + 520,
      y: 260,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 13 + 620,
      y: 260,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 13 + 720,
      y: 260,
      image: createImage(candy)
    }),
    new Coin({
      x: platformImage.width * 13 + 820,
      y: 260,
      image: createImage(candy)
    }),
  ]
  mice = [
    new Mouse({
      x: platformImage.width,
      y: 440,
      d: platformImage.width
    }),
    new Mouse({
      x: platformImage.width * 7,
      y: 440,
      d: platformImage.width * 2
    }),
    new Mouse({
      x: platformImage.width * 9 + 300 - 5 + platformSmallTallImage.width * 2,
      y: 322,
      d: platformSmallTallImage.width
    }),
  ]
  scrollOffSet = 0
}

// 繪製分數
function drawScore() {
  c.font = "40px Arial"
  c.fillStyle = "#FFFFFF"
  c.fillText("Score: " + score, 50, 100)
}

function drawLife() {
  c.font = "40px Arial"
  c.fillStyle = "#e1597c"
  for (let i = 0; i < life; i++) {
    c.fillText("❤", 950 - (i * 50), 100)
  }
}

// 判斷畫面是否跑完
function loadingRemove() {
  if (!isLoading) {
    let app = document.getElementById("app");
    let loader = document.querySelector(".loading");
    app.removeChild(loader);
    start.style.display = 'inline'
    console.log('app', app)
  }
}

// 建立掉落動畫
function animate() {

  console.log('playerState', playerState)
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)
  genericObjects.forEach(genericObject => { genericObject.draw() })
  platforms.forEach(platform => {
    platform.draw()
  })
  coins.forEach(coin => { coin.draw() })
  mice.forEach(mouse => { mouse.update() })
  if (playerState !== 'start') {
    platforms.forEach(platform => { platform.draw() })
    coins.forEach(coin => { coin.draw() })
    mice.forEach(mouse => { mouse.update() })
    player.update()
  }
  goal.draw()
  drawScore()
  drawLife()
  requestAnimationFrame(animate)

  // 設定撞到終點
  if (keys.right.pressed && player.position.x + player.width - 10 > goal.position.x && player.position.x < goal.position.x + goal.width - 20 && player.position.y + player.height > goal.position.y) {
    player.velocity.x = 0

  } else if (keys.left.pressed && player.position.x <= goal.position.x + goal.width - 10 && player.position.x >= goal.position.x && player.position.y + player.height > goal.position.y) {
    player.velocity.x = 0
  }
  // 設定 x軸控制
  else if ((keys.right.pressed && player.position.x < canvas.width / 2) || keys.right.pressed && scrollOffSet >= 8835 && player.position.x < 930) {
    player.velocity.x = player.speed

  } else if ((keys.left.pressed && player.position.x > 100) || keys.left.pressed && scrollOffSet === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed
  } else {

    player.velocity.x = 0

    // 背景移動
    if (keys.right.pressed && scrollOffSet < 8835) {

      scrollOffSet += player.speed
      genericObjects.forEach(genericObjects => {
        genericObjects.position.x -= player.speed * 0.66
      })
      platforms.forEach(platform => {
        platform.position.x -= player.speed
      })
      coins.forEach(coin => {
        coin.position.x -= player.speed
      })
      mice.forEach(mouse => {
        mouse.position.x -= player.speed
      })
      goal.position.x -= player.speed
    } else if (keys.left.pressed && scrollOffSet > 0) {
      scrollOffSet -= player.speed
      genericObjects.forEach(genericObjects => {
        genericObjects.position.x += player.speed * 0.66
      })
      platforms.forEach(platform => {
        platform.position.x += player.speed
      })
      mice.forEach(mouse => {
        mouse.position.x += player.speed
      })
      coins.forEach(coin => {
        coin.position.x += player.speed
      })
      goal.position.x += player.speed

    }
  }

  // 吃金幣
  coins.forEach((coin, index, coins) => {
    if (player.position.x + player.width - 10 > coin.position.x && player.position.x < coin.position.x + coin.width && player.position.y + player.height > coin.position.y && player.position.y < coin.position.y + coin.height) {
      coins.splice(index, 1);
      score += 10
      playAudio(playCoinAudio)
    }
  })

  // 老鼠碰撞
  mice.forEach((mouse, index, mice) => {
    if (mouse.alive && player.position.x + player.width > mouse.position.x && player.position.x < mouse.position.x + mouse.width && player.height + player.position.y <= mouse.position.y && player.height + player.position.y + player.velocity.y >= mouse.position.y) {
      score += 50
      mouse.alive = false
      playAudio(playMouseDieAudio)
      setTimeout(() => { mice.splice(index, 1) }, 1000)
    } else if (mouse.alive && player.position.x + player.width > mouse.position.x && player.position.x < mouse.position.x + mouse.width && player.height + player.position.y > mouse.position.y && player.position.y + player.velocity.y < mouse.position.y + mouse.height && player.state === 'normal' && playerState === 'gaming') {
      life -= 1
      player.state = 'super'
      player.statement()
      if (life > 0) {
        playAudio(playLifeMinusAudio)
      }
    }
  })


  // 平台碰撞
  platforms.forEach(platform => {
    if (player.height + player.position.y <= platform.position.y && player.height + player.position.y + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0
    }

  })

  // 終點箱子進出
  if ((player.position.x + player.width <= goal.position.x + player.width && player.position.x + player.width >= goal.position.x && player.height + player.position.y <= goal.position.y && player.height + player.position.y + player.velocity.y > goal.position.y) ||
    (player.position.x >= goal.position.x + goal.width - player.width && player.position.x <= goal.position.x + goal.width && player.height + player.position.y <= goal.position.y && player.height + player.position.y + player.velocity.y > goal.position.y) ||
    (player.position.x >= goal.position.x && player.position.x <= goal.position.x + goal.width && player.height + player.position.y <= goal.position.y + 60 && player.height + player.position.y + player.velocity.y >= goal.position.y + 60)) {
    player.velocity.y = 0
  }
  // 兩段跳躍
  if (player.velocity.y === 0) {
    doubleJump = 0
  }

  // 貓咪撞到頂
  if (player.position.y + player.velocity.y <= 0) {
    player.velocity.y = gravity
  }

  // 贏的狀況
  if (player.position.x > goal.position.x && player.position.x < goal.position.x + goal.width - 12 && player.position.y + player.height > goal.position.y) {
    playerState = 'win'
    win.style.display = 'inline'
    finalScore.innerHTML = `<p>Your score is</p>${score}`
    result.innerHTML = 'YOU WIN!'
    win.style.animation = 'Opacity 1s linear 0.2s forwards'
    keys.left.pressed = false
    keys.right.pressed = false
    playWinAudio.play()

    console.log('win')
  }

  //跌到谷底
  if (player.position.y > canvas.height) {
    life -= 1
    if (life > 0) {
      init()
    }
    if (life > 0) {
      playAudio(playLifeMinusAudio)
    }
    console.log('you die')
  }

  //輸的狀況

  if (life <= 0) {
    playerState = 'lose'
    win.style.display = 'inline'
    finalScore.innerHTML = ''
    result.innerHTML = 'GAME OVER!'
    win.style.animation = 'Opacity 1s linear 0.2s forwards'
    keys.left.pressed = false
    keys.right.pressed = false
  }

  isLoading = false
}


init()
animate()


addEventListener("load", function (event) {
  // All resources finished loading!
  console.log('finish')
  loadingRemove()

});



// 設定鍵盤
addEventListener('keydown', ({ keyCode }) => {
  if (playerState === 'gaming') {
    switch (keyCode) {
      case 65:
        console.log('left')
        keys.left.pressed = true
        if (player.state === 'super') {
          player.currentSprite = player.sprites.super.run.left
        } else {
          player.currentSprite = player.sprites.normal.run.left
        }

        break

      case 83:
        console.log('down')
        break

      case 68:
        console.log('right')
        keys.right.pressed = true
        if (player.state === 'super') {
          player.currentSprite = player.sprites.super.run.right
        } else {
          player.currentSprite = player.sprites.normal.run.right
        }
        break

      case 87:
        console.log('up')
        doubleJump += 1
        if (doubleJump <= 1) {
          playAudio(playJumpAudio)
          player.velocity.y -= 9
        } else if (doubleJump === 2) {
          playAudio(playJumpAudio)
          player.velocity.y -= 8
        }
        break
    }
  }

})

addEventListener('keyup', ({ keyCode }) => {
  if (playerState === 'gaming') {
    switch (keyCode) {
      case 65:
        console.log('left')
        keys.left.pressed = false
        if (player.state === 'super') {
          player.currentSprite = player.sprites.super.stand
        } else {
          player.currentSprite = player.sprites.normal.stand
        }
        break

      case 83:
        console.log('down')
        break

      case 68:
        console.log('right')
        keys.right.pressed = false
        if (player.state === 'super') {
          player.currentSprite = player.sprites.super.stand
        } else {
          player.currentSprite = player.sprites.normal.stand
        }
        break

      case 87:
        console.log('up')
        break
    }
  }
})

window.addEventListener('click', (e) => {
  console.log(e.target)
  console.log(e.target.classList.contains('restartbtn'))

  if (e.target.classList.contains('restartbtn')) {
    playerState = 'gaming'
    win.style.opacity = 0
    win.style.animation = ''
    score = 0
    life = 3
    playAudio(playBackgroundAudio)
    init()
  }
  if (e.target.classList.contains('startbtn')) {
    playerState = 'gaming'
    start.style.display = 'none'
    playAudio(playBackgroundAudio)

  }

})