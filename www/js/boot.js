boot={
preload:function (){
        //bg
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.scale.setScreenSize= true;
        game.load.image('imgb','img/imgboot.png');
        console.log('boot');
    },
create:function(){
    game.stage.backgroundColor = '#fff';
        game.state.start('preload');
       },
}