
class Obstacle extends Component{
    constructor(gameScreen){
        super(
            gameScreen,
            Math.floor(Math.random() * 500 + 20),
            0,
            80,
            120,
            "./imagenes/car1.png"
        )
        
       
    }

    move(){
        this.top += 6
        this.updatePosition()
    }
}

