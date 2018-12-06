class start extends Phaser.Scene {
  constructor() {
    super({
      key: 'start'
    });
  }
  preload() {
    console.log("Start screen");

  }
  create() {
    var testText = this.add.text(120,270,'Click here to start the game.',{
      fontSize: '32px',
      fill: '#000'
    });
    
     var instructionText = this.add.text(90,320,'(use the keyboard arrow keys to move the character)',{
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
