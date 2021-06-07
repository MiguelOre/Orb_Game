Ball.Preloader = function(game) {};
Ball.Preloader.prototype = {
	preload: function() {


		this.load.image('ball', "https://i.ibb.co/ysDLXnQ/ball.png");
		this.load.image('hole', "https://i.ibb.co/KhPZ5V1/hole.png");
		this.load.image('element-w', "https://i.ibb.co/vP2RVp3/element-w.png");
		this.load.image('element-h', "https://i.ibb.co/1r5TydL/element-h.png");
		this.load.image('panel', "https://i.ibb.co/7rTw4rS/panel.png");
        this.load.image('button-pause', "https://i.ibb.co/6NtmT3y/button-pause.png");
        this.load.image('screen-bg', "https://i.ibb.co/X4kRSYt/screen-bg.png");			    
		this.load.image('screen-mainmenu', "https://i.ibb.co/5KmrknM/screen-mainmenu.png");

		this.load.image('border-horizontal', "https://i.ibb.co/CMC2Vmk/border-horizontal.png");
		this.load.image('border-vertical', "https://i.ibb.co/gVmfvxW/border-vertical.png");


		this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);


	},
	create: function() {
		this.game.state.start('Game');
	}
};