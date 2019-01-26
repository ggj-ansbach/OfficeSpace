
class TabletScene extends Phaser.Scene {
  constructor () {
    super({key: "TabletScene"});
  }

  load () {
    this.load.image('tablet', 'assets/tablet.png');
    console.log('table scene created');
  }

  create () {
    let tablet = this.add.sprite(1366, 768, 'tablet');
  }
}