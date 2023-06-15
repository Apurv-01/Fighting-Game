const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;
c.fillRect(0,0,canvas.width,canvas.height);

const gravity = 0.7;

class Sprite{
    constructor({position,velocity}){
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        // this.lastKey;
    }
    draw(){
        c.fillStyle='red';
        c.fillRect(this.position.x,this.position.y,50,this.height);
    }
    update(){
        this.draw();
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height >= canvas.height) {
            this.position.y = canvas.height - this.height;
            this.velocity.y = 0;
        }
        else if (this.position.x < 0) {
            this.position.x = 0;
        }
        else if (this.position.x + 50 > canvas.width) {
            this.position.x = canvas.width - 50;
        }
        else if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y = -this.velocity.y;
        }

        else this.velocity.y += gravity;

    }
}
const player = new Sprite({
    position:{
        x:0,
        y:0
    },
    velocity:{
        x:0,
        y:0
    }
})

const enemy= new Sprite({
    position:{
        x:400,
        y:100
    },
    velocity:{
        x:0,
        y:0
    }
})

const keys = {
    d:{
        pressed:false
    },
    a:{
        pressed:false
    },
    w:{
        pressed:false
    },
    ArrowRight:{
        pressed:false
    },
    ArrowLeft:{
        pressed:false
    },
    ArrowUp:{
        pressed:false
    },
    ArrowDown:{
        pressed:false
    }

}



function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle="black";
    c.fillRect(0,0,canvas.width,canvas.height);


    player.velocity.x = 0;
    enemy.velocity.x = 0;

    if(keys.d.pressed){
        console.log("UDUUSUD");
        player.velocity.x = 7;
    }else if(keys.a.pressed){
        player.velocity.x = -7;
    }else if(keys.w.pressed){
        player.velocity.y = -10;
    }
    if(keys.ArrowRight.pressed){
        console.log("UDUUSUD");
        enemy.velocity.x = 7;
    }else if(keys.ArrowLeft.pressed){
        enemy.velocity.x = -7;
    }else if(keys.ArrowUp.pressed){
        enemy.velocity.y = -10;
    }
    player.update();
    enemy.update();
}


animate();




window.addEventListener('keydown',(e)=>{
    console.log(e.key);
    switch(e.key){
        case 'd':
            keys.d.pressed = true
            break;
        case 'a':
            keys.a.pressed = true
            break;
        case'w':
            keys.w.pressed = true
            break;
        case'ArrowRight':
            keys.ArrowRight.pressed = true
            break;
        case'ArrowLeft':
            keys.ArrowLeft.pressed = true
            break;
        case'ArrowUp':
            keys.ArrowUp.pressed = true
            break;

    }
})
window.addEventListener('keyup',(e)=>{
    console.log(e.key);
    switch(e.key){
        case 'd':
            keys.d.pressed = false
            break;
        case 'a':
            keys.a.pressed = false
            break;
        case'w':
            keys.w.pressed = false
            break;
        case'ArrowRight':
            keys.ArrowRight.pressed = false
            break;
        case'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break;
        case'ArrowUp':
            keys.ArrowUp.pressed = false
            break;
    }
})
