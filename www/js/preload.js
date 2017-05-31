preload= {
    preload:function (){
		 img  = game.add.sprite(w/2+100,h/2+100,'imgb');
         img.anchor.setTo(0.65);
         game.load.setPreloadSprite(img);
         //bg
        game.load.image('btrd','img/buttonred.png');
        game.load.image('btbl','img/buttonblue.png');
        game.load.image('bgr','img/bgr.png');
        game.load.image('bgb','img/bgb.png');
        game.load.audio('bgmusic','audio/audio.mp3');
        game.load.audio('bgfx','audio/sao.mp3');
        game.load.image('go','img/btn res.png');
        game.load.spritesheet('ch1','img/char.png',182,200);
        game.load.spritesheet('ch2','img/char21.png',182,200);
        game.load.spritesheet('pause', 'img/paused.png',500,700);
        game.load.image('intro','img/bgin.png');
        game.load.image('play','img/bginp.png');
        game.load.image('restart','img/bginr.png');
        game.load.image('gameover','img/bging.png');
        game.load.image('title','img/title.png');
        game.load.image('about','img/babout.png');


       },
create:function(){
    console.log('preload');
    game.time.events.add(Phaser.Timer.SECOND * 2.0, function() {
          var tween = this.add.tween(img)
              .to({alpha: 0}, 750, Phaser.Easing.Linear.none);

        tween.onComplete.add(function() {
              img.destroy();
              this.startGame();
          }, this);

        tween.start();
      }, this);
    },
startGame:function(){ game.state.start('menu');
}
   
}
