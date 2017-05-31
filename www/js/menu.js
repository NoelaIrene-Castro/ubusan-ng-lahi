menu = {
	create:function (){
     intro=game.add.sprite(0,0,'intro');
     intro.scale.x=1.5;
     intro.scale.y =1.2;

     var title=game.add.sprite(w-550,h-450,'title');
     title.scale.x=1.2;
     title.scale.y =1.2;

     btns=game.add.button(w/2+100,h/2-120,'play',this.play);
     btns.scale.x=0.65;
     btns.scale.y =0.65;

     btna=game.add.button(w/2-150,h/2+30,'about',this.about);
     btna.scale.x=0.65;
     btna.scale.y =0.65;

     bgmusic = game.add.audio('bgmusic',1,true);
     bgmusic.loop =true;
     bgmusic.play();

     console.log('menu');

	},
	play:function(){
		game.state.start('play');
	},
	about:function(){
		game.state.start('about');
	}
}
about={
	create:function(){
		 intro=game.add.sprite(0,0,'intro');
	     intro.scale.x=1.5;
	     intro.scale.y =1.2;
	     
		game.add.text(w/2-280,h/2-100,'HOW TO PLAY:\n\n\t *This game is a multiplayer, \n each player must race to \nclick buttons to gain points\n'+
			'*The team with the most points wins..',{fontSize: '30px', fill: '#fff',align:'center'}
			);

	 	var back = game.add.text(0,0,'BACK',{fontSize: '40px', fill: '#fff'});
	 	back.inputEnabled = true;
	 	back.events.onInputDown.add(function(){game.state.start('menu');});
	}

}
