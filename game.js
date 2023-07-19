class Game {
    // code to be added
    constructor(){
        this.startScreen = document.getElementById("game-intro")
        this.gameScreen = document.getElementById("game-screen")
        this.gameEndScreen = document.getElementById("game-end")
        this.player = new Player(
            this.gameScreen,250,400,120,120,
            "./imagenes/felipe.png")
        this.height = 600
        this.width = 700
        this.obstacles = []
        this.score = 0
        this.lives = 3
        this.gameIsOver = false
        this.scoreDisplay = document.getElementById("score")
        this.livesDisplay = document.getElementById("lives")
        this.timeStamp = Date.now()
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
    

        this.startScreen.style.display = "none"
        this.gameScreen.style.display = "block"
        this.gameLoop()
    }


      

    gameLoop(){
        // console.log("in the game loop")
        if(this.gameIsOver) {
            return
        }
        this.update()

        window.requestAnimationFrame(() => this.gameLoop())
    }

    //loop that does everything (engine)

    update(){
        debugger
        const newTime = Date.now()
        const delta = newTime - this.timeStamp
        this.player.move()

        for(let i=0; i<this.obstacles.length; i++){
            const obstacle = this.obstacles[i]
            obstacle.move()

            if(this.player.didCollide(obstacle)) {
                obstacle.element.remove()
                this.obstacles.splice(i, 1)
                this.lives--
                i--
            }
            else if(obstacle.top > this.height) {
                this.score++
                obstacle.element.remove()
                this.obstacles.splice(i,1)
                i--
            }
            this.scoreDisplay.textContent = `${this.score}`;
            this.livesDisplay.textContent = `${this.lives}`;
        }

        if(this.lives === 0) {
            this.endGame()
        }

        if(Math.random() > 0.90 && this.obstacles.length < 10 && delta > 650) {
            this.obstacles.push(new Obstacle(this.gameScreen))
            this.timeStamp = Date.now()
        }
    }

    endGame(){
        this.player.element.remove()
        this.obstacles.forEach(obstacle => obstacle.element.remove())

        this.gameIsOver = true
        this.gameScreen.style.display = "none"
        this.gameEndScreen.style.display = "block"
    }
}

