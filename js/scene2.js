class scene2 extends Phaser.Scene{

  constructor(){
    super({key:"scene2"});
    }

    preload(){
    this.load.image('myBomb','assets/images/bomb.png');
    this.load.image('star1', 'assets/Webp.net-resizeimage (12).png');
    this.load.image('bomb', 'assets/Webp.net-resizeimage (15).png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
      this.load.image('background1','assets/wintertileset/png/BG/background.png');
      this.load.image('ground_2','assets/wintertileset/png/Tiles/5.png');
      this.load.image('ground2_2','assets/wintertileset/png/Tiles/2.png');
      this.load.image('ground3_2','assets/wintertileset/png/Tiles/3.png');
      this.load.image('ground6_2','assets/wintertileset/png/Tiles/6.png');
      this.load.image('ground17_2','assets/wintertileset/png/Tiles/17.png');
      this.load.image('ground1_2','assets/wintertileset/png/Tiles/1.png');
      this.load.image('ice_2','assets/wintertileset/png/Object/IceBox.png');
      this.load.image('tree2_2','assets/wintertileset/png/Object/Tree_2.png');
      this.load.image('stone_2','assets/wintertileset/png/Object/Stone.png');
      this.load.image('crate_2','assets/wintertileset/png/Object/Crate.png');
      this.load.image('ground16_2','assets/wintertileset/png/Tiles/16.png');
      this.load.image('ground15_2','assets/wintertileset/png/Tiles/15.png');
      this.load.image('ground14_2','assets/wintertileset/png/Tiles/14.png');
      this.load.image('snowman_2','assets/wintertileset/png/Object/SnowMan.png');
      this.load.image('sign1_2','assets/wintertileset/png/Object/Sign_1.png');
      this.load.image('crystal_2','assets/wintertileset/png/Object/Crystal.png');
      this.load.image('loo_2','assets/wintertileset/png/Object/Igloo.png');
      this.load.image('sign2_2','assets/wintertileset/png/Object/Sign_2.png');
    }

    create(){
       //input events
    cursors = this.input.keyboard.createCursorKeys();

      this.image = this.add.image(400,300,'background1');

      //score
      scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

      platforms = this.physics.add.staticGroup();

      this.image = this.add.image(230,415,'sign1_2').setScale(0.5);
      platforms.create(45,480, 'ground2_2').setScale(0.7).refreshBody();
      platforms.create(134, 480, 'ground2_2').setScale(0.7).refreshBody();
      platforms.create(223, 480, 'ground3_2').setScale(0.7).refreshBody();

      this.image = this.add.image(408,595,'ground17_2').setScale(1);

      //objects
      this.image = this.add.image(600,413,'crate_2').setScale(0.4);
      this.image = this.add.image(560,413,'crate_2').setScale(0.4);
      this.image = this.add.image(580,373,'crate_2').setScale(0.4);
      this.image = this.add.image(650,364,'tree2_2').setScale(0.5);

      this.image = this.add.image(110,395,'loo_2').setScale(0.7 * -0.5,0.4);
      this.image = this.add.image(315,500,'sign2_2').setScale(0.5);


      platforms.create(670, 478, 'ground2_2').setScale(0.7).refreshBody();
      platforms.create(648, 478, 'ground2_2').setScale(0.7).refreshBody();
      platforms.create(560, 478, 'ground1_2').setScale(0.7).refreshBody();

      //objects
      this.image = this.add.image(535,504,'stone_2').setScale(0.5);
      this.image = this.add.image(725,455,'tree2_2').setScale(0.5);

      this.image = this.add.image(773,500,'ice_2').setScale(0.5);
      this.image = this.add.image(763,455,'ice_2').setScale(0.5);

      platforms.create(305, 568, 'ground3_2').setScale(0.7).refreshBody();
      platforms.create(45, 568, 'ground_2').setScale(0.7).refreshBody();
      platforms.create(134, 568, 'ground_2').setScale(0.7).refreshBody();
      platforms.create(223, 568, 'ground6_2').setScale(0.7).refreshBody();

      platforms.create(754, 568, 'ground2_2').setScale(0.7).refreshBody();
      platforms.create(665, 568, 'ground2_2').setScale(0.7).refreshBody();
      platforms.create(576, 568, 'ground2_2').setScale(0.7).refreshBody();
      platforms.create(510, 568, 'ground1_2').setScale(0.7).refreshBody();

      //next
      this.image = this.add.image(390,283,'ice_2').setScale(0.5);
      platforms.create(455, 330, 'ground16_2').setScale(0.5).refreshBody();
      platforms.create(391, 330, 'ground15_2').setScale(0.5).refreshBody();
      platforms.create(327, 330, 'ground14_2').setScale(0.5).refreshBody();

      //next

      this.image = this.add.image(460,135,'sign1_2').setScale(0.5);

      platforms.create(607, 107, 'snowman_2').setScale(1 * -0.5,0.5).refreshBody();
      this.image = this.add.image(556,138,'crystal_2').setScale(0.5);
      platforms.create(640, 180, 'ground16_2').setScale(0.5).refreshBody();
      platforms.create(512, 180, 'ground15_2').setScale(0.5).refreshBody();
      platforms.create(576, 180, 'ground15_2').setScale(0.5).refreshBody();
      platforms.create(448, 180, 'ground14_2').setScale(0.5).refreshBody();

      //next
      platforms.create(110, 260, 'ground14_2').setScale(0.5).refreshBody();
      platforms.create(173, 260, 'ground16_2').setScale(0.5).refreshBody();

      this.image = this.add.image(175,168,'tree2_2').setScale(0.5);
      this.image = this.add.image(115,168,'tree2_2').setScale(0.5);
      this.image = this.add.image(145,168,'tree2_2').setScale(0.5);

      //player settings
    player = this.physics.add.sprite(30, 400, 'dude');
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

    stars = this.physics.add.group({
        key: 'star1',
        repeat: 11,
        setXY: { x: 20, y: 0, stepX: 70 }
    });

    this.physics.add.collider(stars, platforms);
    stars.children.iterate(function (child) {
    child.setBounce(1,1);
    child.setCollideWorldBounds(true);
    child.setVelocity(15,30);
    // child.setScale(0.1,0.1);
    });

    enemies = this.physics.add.group({
        key: 'bomb',
        repeat: 3,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    enemies.children.iterate(function (child) {

    child.setBounce(1,1);
    child.setCollideWorldBounds(true);
    child.setVelocity(25,50);
    });
this.physics.add.collider(enemies, platforms);
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
    }
}
