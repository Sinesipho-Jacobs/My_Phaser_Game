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
      fill: '#FFF'
    });
    testText.setInteractive()
    testText.on('pointerdown',startGameplay)

  }
  update() {

  }
}
function startGameplay() {
    game.scene.stop('start');
    game.scene.start('scene1');
}
