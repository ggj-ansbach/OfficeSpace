
const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#4488AA",
  physics: {
    default: "arcade"
  },
  scene: [Main, TabletScene],
});
