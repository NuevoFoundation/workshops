---
title: "Жооптор Бейлиги - Phaser Космос Баскынчылар Оюну"
date: 2020-03-28T10:24:17-07:00
draft: false
hidden: true
weight: 18
---

# Иш-аракет 1

Scene1.js
```javascript
preload(){

    this.load.image("background", "assets/space.png");
    this.load.spritesheet('player', 'assets/player.png', {
        frameWidth: 32,
        frameHeight: 48
    });
}
```

Scene2.js
```javascript
create(){
    this.background = this.add.image(config.width/2, config.height/2, "background");

    this.player = this.physics.add.sprite(config.width / 2, config.height - 75, "player");
}
```

# Иш-аракет 2

Scene1.js
```javascript
create(){
    this.anims.create({
        key: "player_anim",
        frames: this.anims.generateFrameNumbers("player"),
        frameRate: 20,
        repeat: -1
    });
}
```

Scene2.js
```javascript
create(){

    // мурдагы фонд кодуңузду өчүрүп, аны плитка спрайты катары кайра түзүңүз
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);

    this.player.anims.play("player_anim");
}

update(){

    this.background.tilePositionY -= 0.5;
}
```

# Иш-аракет 3

Scene2.js
```javascript
create(){
    this.player.body.setCollideWorldBounds(true); // оюнчу экрандан чыкпай коё албайт
    this.cursors = this.input.keyboard.createCursorKeys();
}

update(){

    this.movePlayer();
}

movePlayer(){

    //солго жана оңго жылуу
    if(this.cursors.left.isDown){
    	this.player.body.setVelocityX(-gameSettings.playerSpeed);
    }
    else if(this.cursors.right.isDown){
    	this.player.body.setVelocityX(gameSettings.playerSpeed);
    }
    else {
    	this.player.body.setVelocityX(0)
   	}

   	//жогоруга жана ылдыйга жылуу
   	if(this.cursors.up.isDown){
    	this.player.body.setVelocityY(-gameSettings.playerSpeed);
    }
    else if(this.cursors.down.isDown){
    	this.player.body.setVelocityY(gameSettings.playerSpeed);
   	}
   	else {
   		this.player.body.setVelocityY(0)
   	}
}
```

# Иш-аракет 4

Scene1.js
```javascript
preload(){

    this.load.spritesheet('enemies', 'assets/enemies.png', {
    	frameWidth: 32,
    	frameHeight: 32
    });
}
```

Scene2.js
```javascript
create(){
    this.enemies = this.physics.add.group();
    this.createEnemies();
}

createEnemies(){

        for(var y = 0; y < 3; y++) {
			for(var x = 0; x < 6; x++) {

				var enemy = this.enemies.create((x + 1) * (config.width / 7), (y + 1) * 50, 'enemies');
            }
        }
}
```

# Иш-аракет 5

Scene1.js
```javascript
create(){
    this.anims.create({
        key: "enemies_anim",
        frames: this.anims.generateFrameNumbers("enemies"),
        frameRate: 20,
        repeat: -1
    });
}
```

Scene2.js
```javascript
createEnemies(){
	for(var y = 0; y < 3; y++) {
		for(var x = 0; x < 6; x++) {

			var enemy = this.enemies.create((x + 2) * (config.width / 7) - 10, (y + 1) * 50, 'enemies');

			enemy.body.velocity.x = -90;

			enemy.anims.play("enemies_anim");
		}
	}

	this.enemyTimer = this.time.addEvent({
		delay: 1500,
		callback: this.changeEnemyDirection,
		callbackScope: this,
		loop: true
	});
}

changeEnemyDirection() {

    for(var i = 0; i < this.enemies.getChildren().length; i++) {
		var enemy = this.enemies.getChildren()[i];
		enemy.body.velocity.x *= -1;
	}
}
```

# Иш-аракет 6

Scene1.js
```javascript
create(){
    this.load.spritesheet('explosion', 'assets/explosion.png', {
    	frameWidth: 32,
    	frameHeight: 32
    });

    this.anims.create({
		key: "explode",
		frames: this.anims.generateFrameNumbers("explosion"),
		frameRate: 20,
		repeat: 0,
		hideOnComplete: true
	});
}
```

Scene2.js
```javascript
create(){
    this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);
}

hurtPlayer(){

    var explosionPlayer = new Explosion(this, player.x, player.y);
    var explosionEnemy = new Explosion(this, enemy.x, enemy.y);

    enemy.destroy();
    player.disableBody(true, true);

    this.time.addEvent({
        delay: 1000,
    	callback: this.resetPlayer,
    	callbackScope: this,
    	loop: false
    })
}
```

Explosion.js
```javascript
constructor(scene,x,y){
    super(scene, x, y, "explosion");
    scene.add.existing(this);
    this.play("explode");
}
```


# Иш-аракет 7

Scene1.js
```javascript
create(){

	this.load.spritesheet('laser', 'assets/laser.png', {
		frameWidth: 16,
		frameHeight: 16
	});

	this.anims.create({
        key: "laser_anim",
        frames: this.anims.generateFrameNumbers("laser"),
        frameRate: 20,
        repeat: -1
    });
}
```

Scene2.js
```javascript
create(){
    this.projectiles = this.add.group();
	this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this);

    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}

update(){
    this.playerShoot();

    for(var i = 0; i < this.projectiles.getChildren().length; i++) {
    	var laser = this.projectiles.getChildren()[i];
        laser.update();
    }
}

playerShoot(){

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
        if(this.player.active) {

    	    var playerBullet = new PlayerBullet(this);
    		this.projectiles.add(playerBullet); // топко кошуу
    	}
    }
}

hitEnemy(projectile, enemy) {

	var explosion = new Explosion(this, enemy.x, enemy.y