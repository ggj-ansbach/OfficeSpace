class TabletScene extends Phaser.Scene {
  constructor () {
    super({key: game_data.scene_list.TABLET});
  }

  onDown () {
    console.log("Going back to MainScene");
    this.scene.start(game_data.scene_list.MAIN, {});
  }

  preload () {
    this.load.image('tablet', '/assets/images/backgrounds/tablet.png');
    this.load.image('close', '/assets/images/objects/close.png');
  }

  create () {
    console.log("In the TabletScene");
    this.add.sprite(400 , 300, 'tablet');

    let close = this.add.sprite(755, 45, 'close');
    close.setInteractive();
    close.on('pointerdown', this.onDown.bind(this));

    this.input.keyboard.on("keyup_ESC", () => {
      this.onDown();
    }, this);

    console.log('TabletScene created');
  }
}
