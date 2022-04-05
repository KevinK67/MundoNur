let juego = new Phaser.Game(370,550,Phaser.CANVAS,'bloque_juego');
let fondoJuego;
let flappy;

let teclaDerecha;
let teclaIzquierda;
let teclaArriba;
let teclaAbajo;


let estadoPrincipal = {
    preload: function(){
        // juego.stage.backgroundColor = "#000";
        juego.load.image('fondo','img/Fondo2.jpg')
        juego.load.spritesheet('pajaro','img/Personaje2.png',39.74,30)
    },

    create: function(){
       fondoJuego = juego.add.tileSprite(0,0,370,550,'fondo');
       flappy = juego.add.sprite(juego.width/2,juego.height/2,'pajaro')
       flappy.frame = 1
       flappy.animations.add('vuelo',[0,1,2],10,true);
       teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
       teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT)
       teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP)
       teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN)
    },

    update: function(){
        fondoJuego.tilePosition.x -= 1; 

        //Animacion el juego
        flappy.animations.play('vuelo');
        if(teclaDerecha.isDown){
            flappy.x++;
        }else if(teclaIzquierda.isDown){
            flappy.x--;
        }else if(teclaArriba.isDown){
            flappy.y--;
        }else if(teclaAbajo.isDown){
            flappy.y++;
        }
    }
};

juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');