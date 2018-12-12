var config ={
  type:Phaser.Auto,
  width:800,
  height:600,
  physics: {
    default: 'arcade',
    arcade: {
      //Gravity is 200 DOWN
      gravity: {y : 200}
    }
  },
  scene: [Example1, Example2, Example3]
}

var game = new Phaser.Game(config);
