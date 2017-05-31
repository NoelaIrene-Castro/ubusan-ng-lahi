var func = function(){
  'use strict';
  return {
          timer:function(initTime,microsec) {
               setInterval(function(){
                initTime--;
                if(initTime>=0){
                    timetxt.text="Time: 0." + initTime;
                }
               else
                {
                game.state.start('win');
                bgmusic.stop();
                }

               },microsec);


    },
    audio:function (time){
        setInterval(function(){
          bgmusic.play();
        },time)
       },
      createcb:function() {
        for (var x = 0; x <= 5 ; x++) {
        btblue = game.add.button(x*85,100, 'btbl', function(btblue) {
          
            if(flipB) { 
            btblue.loadTexture('btrd');
            flipR =true;
              bgfx.play();
             console.log('flip to red');
              scorer++;
              tr.text='TR: '+scorer;
              scoreb--;
                bgfx.play();
             tb.text='TB: '+scoreb;
            }
            else if(flipR){ 
            btblue.loadTexture('btbl');
            flipB = false;
            console.log('flip to blue');
            scorer--;
            tr.text='TR: '+scorer;
            scoreb++;
            tb.text='TB: '+scoreb; 
             }

        });
        btblue.scale.setTo(0.75);
        }
      },
      createcr:function () {
        for (var y = 1; y <= 6 ; y++) {
        btred = game.add.button(y*85,300, 'btrd', function(btred) {
         //game.add.tween(btblue).to( { x:-50 }, 2000, Phaser.Easing.Linear.None, true, 2,1000, true).loop(true); 
            if(flipR) { 
            btred.loadTexture('btbl');
            flipB =true;
              bgfx.play();
             console.log('flip to blue');
              scorer--;
              tr.text='TR: '+scorer;
              scoreb++;
             tb.text='TB: '+scoreb;
           }
            else if (flipB){ 
            btred.loadTexture('btrd');
            flipR= false;
              bgfx.play();
            console.log('flip to red');
            scorer++;
            tr.text='TR: '+scorer;
            scoreb--;
            tb.text='TB: '+scoreb; 
            }
        });
         // bgfx.play();
        btred.scale.setTo(0.75);
        }
 }


}
}();