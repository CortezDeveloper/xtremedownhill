class Player extends Component{
    constructor(gameScreen, left, top, width, height,imgSrc){
        super(gameScreen, left, top, width, height, imgSrc);
       
        this.directionX = 0
        this.directionY = 0
       
    }

    move() {
        this.left += this.directionX * 5
        this.top += this.directionY * 5
    
        if(this.left < 10) {
            this.left = 10
        }

        if(this.top < 10){
            this.top = 10
        }

        if(this.left > this.gameScreen.offsetWidth - this.width - 10){
            this.left = this.gameScreen.offsetWidth - this.width - 10
        }

        if(this.top > this.gameScreen.offsetHeight - this.height - 10){
            this.top = this.gameScreen.offsetHeight - this.height - 10
        }

        this.updatePosition()
    }


    didCollide(obstacle){
        const playerRect = this.element.getBoundingClientRect()
        const obstacleRect = obstacle.element.getBoundingClientRect()
        
        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top 
            ){
                console.log("Crash!")
                
                // const collisionSound = document.getElementById("collision-sound");
            const collisionSound = document.getElementById("collision-sound")
            // collisionSound.volume = 0.2
            collisionSound.play();
        //    function playCollisionSound(){
        //     const backgroundMusic = document.getElementById("background-music")
        //     backgroundMusic.onpause()

        //     collisionSound.play()

        //     playCollisionSound()
           

            return true;
        } else {
            return false;
        }
    }

}

