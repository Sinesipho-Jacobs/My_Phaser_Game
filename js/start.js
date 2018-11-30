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
