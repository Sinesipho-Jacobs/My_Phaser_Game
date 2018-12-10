class start extends Phaser.Scene {
  constructor() {
    super({
      key: 'start'
    });
  }
  preload() {
    this.load.image('background','assets/images/background1.png');

  }
  create() {
    this.image = this.add.image(400,300,'background');
    var testText = this.add.text(120,230,'Click here to start the game.',{
      fontSize: '32px',
      fill: '#000'
    });
    
     var instructionText = this.add.text(90,280,'(use the keyboard arrow keys to move the character)',{
     fontSize: '20px',
     fill: '#000'
    });
    
    this.input.on('pointerdown',function(event){
      startGameplay();
    },this);

  }
  update() {

  }
}
function startGameplay() {
    game.scene.stop('start');
    game.scene.start('scene1');
}
