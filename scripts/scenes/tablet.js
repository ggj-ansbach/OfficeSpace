
class TabletScene extends Phaser.Scene {
  constructor () {
    super({key: "TabletScene"});
  }

  preload () {
    this.load.image('tablet', '/assets/tablet.png');
  }

  create () {
    let tablet = this.add.sprite(300, 368, 'tablet');
    tablet.scaleX = 0.5
    tablet.scaleY = 0.5
    tablet.rotation = 1
    console.log('table scene created');
  }
}