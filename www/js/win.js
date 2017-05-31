win={
	 create:function(){
	 	restart=game.add.sprite(0,0,'intro');
            restart.scale.x=1.5;
           restart.scale.y =1.2;

           btns =game.add.button(w-200,h-200,'restart',this.play2);
          
             btns.scale.setTo(0.65);

          game.add.text(w/2-250,h/2-100,'TeamB: ' + scoreb + '\t\tVS.\t\tTeamR: ' + scorer,{ fontSize: '40px', fill: '#fff' });

            if(scoreb==scorer){
              game.add.text(w/2-230,h/2-30 ,'No Winner!!!',{ fontSize: '60px', fill: '#fff' });
           
              }
              else if(scorer>=scoreb){
               game.add.text(w/2-230,h/2-30,'TeamR WINS!!!',{ fontSize: '60px', fill: '#fff' });
            
        
              }
              else if (scoreb>=scorer)
              {
                game.add.text(w/2-230,h/2-30,'TeamB WINS!!',{ fontSize: '60px', fill: '#fff' });
            
              }
 },
 play2:function(){
location.reload();
 }
}
again={
 preload:function(){
   var load =  game.add.text(w/2-100,h/2, 'Loading...',{ fontSize: '40px', fill: '#000' });
 },
 create:function(){
     game.stage.backgroundColor = '#fff';
     game.time.events.add(Phaser.Timer.SECOND * 5.0, function() {
          var tween = this.add.tween(load)
              .to({alpha: 0}, 2000, Phaser.Easing.Linear.none);

        tween.onComplete.add(function() {
              load.destroy();
              this.playagain();
          }, this);

        tween.start();
      }, this);
    },
  playagain:function(){
    game.state.start('play');
  }
}