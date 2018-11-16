var config = {
  type:Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#a4d3ee",
  physics: {
    default: 'arcade',
    arcade: {
      gravity:{y: 200}
    }
  },
  scene:[scene1]
};

var game = new Phaser.Game(config);
