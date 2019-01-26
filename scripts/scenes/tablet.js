
class TabletScene extends Phaser.Scene {
  constructor () {
    super({key: "TabletScene"});
  }

  preload () {
    this.load.image('tablet', '/assets/images/objects/tablet.png');
    this.load.image('close', '/assets/images/objects/X.png');
  }

  create () {
    let tablet = this.add.sprite(400 , 300, 'tablet');
    let close = this.add.sprite(700, 80, 'close');

    // tablet.scaleX = 0.5
    // tablet.scaleY = 0.5
    // tablet.rotation = 1
    console.log('table scene created');
  }
}