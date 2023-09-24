---
title: "Answer Key - Phaser Space Invaders Game"
date: 2020-03-28T10:24:17-07:00
draft: false
hidden: true
weight: 18
---

# Activity 1

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

# Activity 2

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

    // delete your previous background code and create it again as a tile sprite
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);

    this.player.anims.play("player_anim");
}

update(){

    this.background.tilePositionY -= 0.5;
}
```

# Activity 3

Scene2.js
```javascript
create(){
    this.player.body.setCollideWorldBounds(true); // player cannot go out of screen
    this.cursors = this.input.keyboard.createCursorKeys();
}

update(){

    this.movePlyaer();
}

movePlayer(){

    //move left and right
    if(this.cursors.left.isDown){
    	this.player.body.setVelocityX(-gameSettings.playerSpeed);
    }
    else if(this.cursors.right.isDown){
    	this.player.body.setVelocityX(gameSettings.playerSpeed);
    }
    else {
    	this.player.body.setVelocityX(0)
   	}

   	//move up and down
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

# Activity 4

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

# Activity 5

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

# Activity 6

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


# Activity 7

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
    		this.projectiles.add(playerBullet); //add to group
    	}
    }
}

hitEnemy(projectile, enemy) {

	var explosion = new Explosion(this, enemy.x, enemy.y);

	projectile.destroy();
	enemy.destroy();

	this.score += 15;
	this.scoreText.text = "Score " + this.score;
}
```

PlayerLaser.js
```javascript
constructor(scene) {
    var x = scene.player.x;
    var y = scene.player.y;

    super(scene, x, y, "playerLaser");
    scene.add.existing(this);

    this.play("laser_anim");
    scene.physics.world.enableBody(this);
    this.body.velocity.y = -250;
}


update(){
    if (this.y < 10) {
        this.destroy();
    }
}
```

# Activity 8

Scene2.js
```javascript
create(){

    this.enemyProjectiles = this.add.group();
    this.physics.add.overlap(this.player, this.enemyProjectiles, this.hurtPlayer, null, this);
}

update(){
    this.enemyShoot();

    for(var i = 0; i < this.enemyProjectiles.getChildren().length; i++) {
    	var beam = this.enemyProjectiles.getChildren()[i];
    	beam.update();
    }
}

enemyShoot() {

	for(var i = 0; i < this.enemies.getChildren().length; i++) { //goes through every single enemy
		var randomEnemyShoot = Phaser.Math.Between(1, 1000);
		if (randomEnemyShoot == 1) { //10% chance to shoot
			var laser = new EnemyLaser(this, this.enemies.getChildren()[i]);
			this.enemyProjectiles.add(laser);
		}
	}
}
```

EnemyLaser.js
```javascript
constructor(scene, enemy) {
    var x = enemy.x;
    var y = enemy.y;

    super(scene, x, y, "laser");
    scene.add.existing(this);

    this.play("laser_anim");
    scene.physics.world.enableBody(this);
    this.body.velocity.y = 250;
}


update(){
    if (this.y > 600) {
        this.destroy();
    }
}
```

# Activity 9

Scene2.js
```javascript
create(){
    ///// Score /////
	this.score = 0;
	this.scoreText = this.add.text(20, 10, "Score " + this.score, {
		font: "25px Arial",
		fill: "white"
	});

	///// Lives /////
	this.lives = 3;
	this.livesText = this.add.text(410, 10, "Lives: " + this.lives, {
		font: "25px Arial",
		fill: "white"
	});

	///// GameOver /////

	this.gameOverText = this.add.text(120, 200, "", {
		font: "40px Arial",
		fill: "white",
	});
	this.gameOverText.text = "Game Over! \nClick to restart!";
	this.gameOverText.setVisible(false);
	this.gameOverText.setDepth(0);

	///// Levels /////

	this.level = 1;
	this.levelText = this.add.text(210, 10, "Level: " + this.level, {
		font: "25px Arial",
		fill: "white"
	});

	this.difficulty = 1000;
}

update(){
    this.levelClear();
}

hurtPlayer(player, enemy) {

	// delete the previous timer put it within this if-else statement
	if (this.lives >= 1) {

		this.time.addEvent({
			delay: 1000,
			callback: this.resetPlayer,
			callbackScope: this,
			loop: false
		})

	}
	else if (this.lives < 1) {
		this.gameOverText.setVisible(true);
		this.gameOverText.setDepth(1);
		this.input.once("pointerdown", this.restart, this);
	}
}

restart() {

	this.lives = 3;
	this.livesText.text = "Lives: " + this.lives;

	this.score = 0;
	this.scoreText.text = "Score: " + this.score;

	this.level = 1;
	this.difficulty = 1000;
	this.levelText.text = "Level: " + this.level;

	this.enemyProjectiles.clear(true, true);

	this.enemies.clear(true, true);
	this.enemyTimer.remove();
	this.createEnemies();
	this.resetPlayer();
	this.gameOverText.setVisible(false);
}

levelClear() {

	if(this.enemies.getChildren().length == 0) {
	    this.level += 1;
	    this.levelText.text = "Level: " + this.level;

	    this.enemyTimer.remove();
	    this.createEnemies();

	    if(this.difficulty > 200) {
	    	this.difficulty -= 100
	    }

	    else if(this.difficulty <= 200) {
	    	this.difficulty -= 10
	    }
    }
}
```

# Activity 10

Scene1.js
```javascript
create(){
	this.back = this.add.image(config.width/2, config.height/2, "background");
	this.titleText = this.add.text(130, 230, "Space Invader", {
		font: "40px Arial",
		fill: "white",
	});
	this.startText = this.add.text(190, 270, "Click to Start", {
		font: "20px Arial",
		fill: "yellow",
	});

	// replace the start game statement you had before with this one
	this.input.on("pointerdown", this.startGame, this);
}
 ```
