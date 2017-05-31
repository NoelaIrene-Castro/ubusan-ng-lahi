play={
    create:function (){
         bg = game.add.sprite(0, 0, 'bgr');
         bg.scale.x= 2;
         bg.scale.y= 2;
           
        ch1 = game.add.sprite(0,h-200,'ch1');
         ch1.animations.add('ply1',[0,1],2,true);
         ch1.scale.setTo(.65);

          ch2 = game.add.sprite(w-120,h-400,'ch2');
          ch2.animations.add('ply2',[1,0],2,true);
           ch2.scale.setTo(.65);
     
         key= game.input.keyboard.createCursorKeys();
    spaceKey = game.add.button(20,0, 'pause',func.togglePause);
    spaceKey.scale.setTo(.10);

         bgfx = game.add.audio('bgfx');
       
     timetxt= game.add.text(w-500,h-450 , 'Time: 0.00',{ fontSize: '40px', fill: '#fff' });
     tr= game.add.text(w-270,0 , 'TR: 6' ,{ fontSize: '40px', fill: '#fff' });
     tb = game.add.text(w-150,0 , 'TB: 6' ,{ fontSize: '40px', fill: '#fff' });
     

        func.createcb();
        func.createcr();
        func.timer(3,700);
         console.log('play');
    },
    update:function(){
     ch1.animations.play('ply1');
     ch2.animations.play('ply2');
    },
    togglePause:function() {
},
 //     timer:function(initTime,microsec) {
 //               setInterval(function(){
 //                initTime--;
 //                if(initTime>=0){
 //                    timetxt.text="Time: 0." + initTime;
 //                }
 //               else
 //                {
 //                game.state.start('win');
 //                bgmusic.stop();
 //                }

 //               },microsec);


 //    },
 //    audio:function (time){
 //        setInterval(function(){
 //          bgmusic.play();
 //        },time)
 //       },
 //      createcb:function() {
 //        for (var x = 0; x <= 5 ; x++) {
 //        btblue = game.add.button(x*85,100, 'btbl', function(btblue) {
          
 //            if(flipB) { 
 //            btblue.loadTexture('btrd');
 //            flipR =true;
 //              bgfx.play();
 //             console.log('flip to red');
 //              scorer++;
 //              tr.text='TR: '+scorer;
 //              scoreb--;
 //                bgfx.play();
 //             tb.text='TB: '+scoreb;
 //            }
 //            else if(flipR){ 
 //            btblue.loadTexture('btbl');
 //            flipB = false;
 //            console.log('flip to blue');
 //            scorer--;
 //            tr.text='TR: '+scorer;
 //            scoreb++;
 //            tb.text='TB: '+scoreb; 
 //             }

 //        });
 //        btblue.scale.setTo(0.75);
 //        }
 //      },
 //      createcr:function () {
 //        for (var y = 1; y <= 6 ; y++) {
 //        btred = game.add.button(y*85,300, 'btrd', function(btred) {
 //         //game.add.tween(btblue).to( { x:-50 }, 2000, Phaser.Easing.Linear.None, true, 2,1000, true).loop(true); 
 //            if(flipR) { 
 //            btred.loadTexture('btbl');
 //            flipB =true;
 //              bgfx.play();
 //             console.log('flip to blue');
 //              scorer--;
 //              tr.text='TR: '+scorer;
 //              scoreb++;
 //             tb.text='TB: '+scoreb;
 //           }
 //            else if (flipB){ 
 //            btred.loadTexture('btrd');
 //            flipR= false;
 //              bgfx.play();
 //            console.log('flip to red');
 //            scorer++;
 //            tr.text='TR: '+scorer;
 //            scoreb--;
 //            tb.text='TB: '+scoreb; 
 //            }
 //        });
 //         // bgfx.play();
 //        btred.scale.setTo(0.75);
 //        }
 // }
}