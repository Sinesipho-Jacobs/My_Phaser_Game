
var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var gameOverText;
var myBomb;
var enemies;
var levelStopped = false;
var refreshText;
var value = Phaser.Math.Between(12,1000);
var button;
var previousScore;
var prevText;

class scene1 extends Phaser.Scene{
  constructor(){
    super({key:"scene1"});
  }

  preload(){
    this.load.image('button','assets/register.png');
    this.load.image('background','assets/images/background1.png');
    this.load.image('myBomb','assets/images/bomb.png');
    this.load.image('bottle', 'assets/bottle.png');
    this.load.image('bomb', 'assets/images/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('ground', 'assets/images/Tile/1.png');
    this.load.image('ground2', 'assets/images/Tile/2.png');
    this.load.image('ground3', 'assets/images/Tile/3.png');
    this.load.image('ground4', 'assets/images/Tile/4.png');
    this.load.image('ground5', 'assets/images/Tile/5.png');
    this.load.image('ground6', 'assets/images/Tile/6.png');
    this.load.image('ground9', 'assets/images/Tile/9.png')
    this.load.image('ground11', 'assets/images/Tile/11.png')
    this.load.image('ground12', 'assets/images/Tile/12.png');
    this.load.image('ground13', 'assets/images/Tile/13.png');
    this.load.image('ground14', 'assets/images/Tile/14.png');
    this.load.image('ground15', 'assets/images/Tile/15.png');
    this.load.image('ground16', 'assets/images/Tile/16.png');
    this.load.image('tree', 'assets/images/Objects/Tree.png');
    this.load.image('grass1', 'assets/images/Objects/Grass (1).png');
    this.load.image('skeleton', 'assets/images/Objects/Skeleton.png');
    this.load.image('cactus3', 'assets/images/Objects/Cactus (3).png');
    this.load.image('grass2', 'assets/images/Objects/Grass (2).png');
    this.load.image('crate', 'assets/images/Objects/Crate.png');
    this.load.image('stoneb', 'assets/images/Objects/StoneBlock.png');
    this.load.image('sign', 'assets/images/Objects/Sign.png');
    this.load.image('bush1', 'assets/images/Objects/Bush (1).png');
    this.load.image('stone', 'assets/images/Objects/Stone.png');
    this.load.image('bush2', 'assets/images/Objects/Bush (2).png');
    this.load.image('arrow', 'assets/images/Objects/SignArrow.png');
  }

  create(){
    //background image
    this.image = this.add.image(400,300,'background');

    //input events
    cursors = this.input.keyboard.createCursorKeys();

    //objects on ground
    this.image = this.add.image(137,480,'arrow').setScale(0.6);
    this.image = this.add.image(50,483,'stone').setScale(0.6);
    this.image = this.add.image(90,493,'skeleton').setScale(0.5);
    this.image = this.add.image(400,478,'bush1').setScale(0.6);
    this.image = this.add.image(460,482,'bush2').setScale(0.6);
    this.image = this.add.image(430,487,'bush1').setScale(0.4);
    this.image = this.add.image(750,482,'bush2').setScale(0.6);
    this.image = this.add.image(718,480,'cactus3').setScale(0.7);

    platforms = this.physics.add.staticGroup();

    //ground
    platforms.create(64, 568, 'ground2').setScale(1).refreshBody();
    platforms.create(190, 568, 'ground2').setScale(1).refreshBody();
    platforms.create(316, 568, 'ground2').setScale(1).refreshBody();
    platforms.create(442, 568, 'ground2').setScale(1).refreshBody();
    platforms.create(568, 568, 'ground2').setScale(1).refreshBody();
    platforms.create(694, 568, 'ground2').setScale(1).refreshBody();
    platforms.create(820, 568, 'ground2').setScale(1).refreshBody();

    //PLATFORMS FROM LEFT TO RIGHT
    //first platform
    this.image = this.add.image(190,327,'grass1').setScale(0.6);
    this.image = this.add.image(175,315,'cactus3').setScale(0.6);
    this.image = this.add.image(215,327,'grass2').setScale(0.6);
    this.image = this.add.image(38,243,'crate').setScale(0.4);
    this.image = this.add.image(82,243,'crate').setScale(0.4);
    this.image = this.add.image(60,203,'crate').setScale(0.4);

    platforms.create(30, 300, 'ground11').setScale(0.6).refreshBody();
    platforms.create(30, 375, 'ground9').setScale(0.6).refreshBody();
    platforms.create(242, 360, 'ground3').setScale(0.6,0.3).refreshBody();
    platforms.create(167, 390, 'ground9').setScale(0.6,0.3).refreshBody();
    platforms.create(242, 390, 'ground13').setScale(0.6,0.3).refreshBody();
    platforms.create(167, 360, 'ground11').setScale(0.6,0.3).refreshBody();
    platforms.create(105, 300, 'ground3').setScale(0.6).refreshBody();
    platforms.create(105, 375, 'ground13').setScale(0.6).refreshBody();

    //second platform
    this.image = this.add.image(338,83,'stone').setScale(0.6);
    this.image = this.add.image(265,81,'bush1').setScale(0.5);
    this.image = this.add.image(310,87,'grass2').setScale(0.6);
    this.image = this.add.image(328,89,'grass1').setScale(0.5);

    platforms.create(230, 130, 'ground14').setScale(0.6).refreshBody();
    platforms.create(305, 130, 'ground15').setScale(0.6).refreshBody();
    platforms.create(380, 130, 'ground16').setScale(0.6).refreshBody();

    //third platform
    this.image = this.add.image(510,250,'tree').setScale(0.5);
    this.image = this.add.image(540,300,'grass1').setScale(0.5);
    this.image = this.add.image(475,301,'skeleton').setScale(0.5);

    platforms.create(440, 340, 'ground14').setScale(0.6).refreshBody();
    platforms.create(515, 340, 'ground15').setScale(0.6).refreshBody();
    platforms.create(590, 340, 'ground16').setScale(0.6).refreshBody();

    //fourth platform
    this.image = this.add.image(750,29,'stoneb').setScale(0.5);
    this.image = this.add.image(750,78,'stoneb').setScale(0.5);
    this.image = this.add.image(750,127,'stoneb').setScale(0.5);
    this.image = this.add.image(668,130,'sign').setScale(0.5);

    platforms.create(670, 190, 'ground').setScale(0.6).refreshBody();
    platforms.create(740, 190, 'ground2').setScale(0.6).refreshBody();
    platforms.create(810, 190, 'ground2').setScale(0.6).refreshBody();

    //player settings
    player = this.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms);

    //player animation
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    //bottle settings

    stars = this.physics.add.group({
        key: 'bottle',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    enemies = this.physics.add.group({
        key: 'bomb',
        repeat: 1,
        setXY: { x: value, y: 0, stepX: 0 }
    });

    stars.children.iterate(function (child) {
    //different bounce for each bottle
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    enemies.children.iterate(function (child) {

    child.setBounce(1,1);
    child.setCollideWorldBounds(true);
    child.setVelocity(50,100);
    child.setScale(0.1,0.1);
    });

     this.physics.add.collider(stars, platforms);
     this.physics.add.collider(enemies, platforms);

     //Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
     this.physics.add.overlap(player, stars, collectStar, null, this);
     this.physics.add.collider(player, enemies, hitBomb, null, this);

     //score
     scoreText = this.add.text(16, 60, 'Score: 0', { fontSize: '32px', fill: '#000' });

     previousScore = localStorage.getItem('score');

   if(localStorage.getItem('score') == null){
        prevText = this.add.text(16, 16, 'Highest Score: 0', { fontSize: '32px', fill: '#ff0000' });
   }
   else{
        prevText = this.add.text(16, 16, 'Highest Score: ' + previousScore, { fontSize: '32px', fill: '#ff0000' });
   }
  }

  update(){
    if (gameOver)
    {
        return;
    }

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }

    if(levelStopped == true){
      nextLevel();
    }
  }
}
  function collectStar (player, star)
  {
    star.disableBody(true, true);

    //  Add and update the score
    score += 5;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0)
    {
      stars.children.iterate(function (child) {

        child.enableBody(true, child.x, 0, true, true);

        });
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        //add more bombs
        enemies = this.physics.add.group({
            key: 'bomb',
            repeat: 1 + 1,
            setXY: { x: value, y: 0, stepX: 0 }
        });

        enemies.children.iterate(function (child) {

        child.setBounce(1,1);
        child.setCollideWorldBounds(true);
        child.setVelocity(50,100);
        child.setScale(0.1,0.1);
        });

        this.physics.add.collider(enemies, platforms);
        this.physics.add.collider(player, enemies, hitBomb, null, this);
    }

  }

  function hitBomb (player, myBomb)
  {
    player.setTint(0xff0000);
    this.scene.pause('scene1');
    gameOverText = this.add.text(130, 200, 'GAME OVER', { fontSize: '100px', fill: '#ff0000', stroke:'#000' });
    refreshText = this.add.text(220, 310, 'refresh to play again', { fontSize: '25px', fill: '#000' });
    if(localStorage.getItem('score') == null || (score > previousScore)){
       localStorage.setItem('score',score);
     }
  }
