let juego = new Phaser.Game(370,550,Phaser.CANVAS,'bloque_juego');
let fondoJuego;
let flappy;

let teclaDerecha;
let teclaIzquierda;
let teclaArriba;
let teclaAbajo;

let botonArriba;
let botonAbajo;
let botonDerecha;
let botonIzquierda;

let estadoPrincipal = {
    preload: function(){
        // juego.stage.backgroundColor = "#000";
        juego.load.image('fondo','img/Fondo2.jpg')
        juego.load.spritesheet('pajaro','img/Nuri2.png',39.74,30)
        juego.load.image('btn','img/btnArriba.png')
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

       botonArriba = juego.add.button(juego.width-100,juego.height-100,'btn',this.clickArriba,this,0,1,0)
       botonArriba.anchor.setTo(0.5,0.5)
       botonAbajo = juego.add.button(juego.width-100,juego.height-50,'btn',this.clickAbajo,this,0,1,0)
       botonAbajo.anchor.setTo(0.5,0.5)
       botonDerecha = juego.add.button(juego.width-50,juego.height-75,'btn',this.clickDerecha,this,0,1,0)
       botonDerecha.anchor.setTo(0.5,0.5)
       botonIzquierda = juego.add.button(juego.width-150,juego.height-75,'btn',this.clickIzquierda,this,0,1,0)
       botonIzquierda.anchor.setTo(0.5,0.5)
    },

    clickArriba: function(){
        console.log("click arriba")
    },
    clickAbajo: function(){
        console.log("click abajo")
    },

    clickDerecha: function(){
        console.log("click recha")
        flappy.x++;
    },
    clickIzquierda: function(){
        console.log("click izquierda")
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