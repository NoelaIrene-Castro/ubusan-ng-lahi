var w = 600;
var h = 450;
var bgr,bgblue,btred,btblue,btblue1;
var flipB = true;
var flipR = true;
var scorer=6,scoreb=6;
var sctext,timetxt;
var tr,tb;
var bg,bgmusic,bgfx;
var restart,intro;
var ch1,ch2;
var spacekey,key;
var btns,btnsr,imgb,img;


var game = new Phaser.Game(w,h,Phaser.CANVAS,'game');

game.state.add('boot',boot);
game.state.add('preload',preload);
game.state.add('menu',menu);
game.state.add('play',play);
game.state.add('win',win);
game.state.add('about',about);
game.state.add('again',again);
game.state.start('boot');







