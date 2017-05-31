// again={
// 	preload:function(){
// 		var load =  game.add.text(w/2-100,h/2, 'Loading...',{ fontSize: '40px', fill: '#000' });
// 	},
// 	create:function(){
//  		game.stage.backgroundColor = '#fff';
//  		game.time.events.add(Phaser.Timer.SECOND * 5.0, function() {
//           var tween = this.add.tween(load)
//               .to({alpha: 0}, 2000, Phaser.Easing.Linear.none);

//         tween.onComplete.add(function() {
//               load.destroy();
//              window.location.href=window.location.href;
//           }, this);

//         tween.start();
//       }, this);
//     }
// }