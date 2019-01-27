const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade"
  },
  scene: [
    Menu,
    MainScene,
    TabletScene,
    ShelveScene,
    StoveScene,
  ],
});
