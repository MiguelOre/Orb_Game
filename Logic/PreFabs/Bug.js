Bug=function(t,e,a){Phaser.Sprite.call(this,t.game,e,a,"bug"),this.state=t,this.game=t.game,this.game.physics.arcade.enable(this),this.animations.add("walk",[0,1,2,4,5],5,!0),this.health=130,this.enableBody=!0,this.body.setSize(64,30,0,90),this.body.velocity.x=150,this.body.allowGravity=!0,this.play("walk")},Bug.prototype=Object.create(Phaser.Sprite.prototype),Bug.prototype.constructor=Bug;