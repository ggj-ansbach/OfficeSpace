class StoveScene extends Phaser.Scene {
  constructor () {
    super({key: game_data.scene_list.STOVE});
  }

  onDown () {
    console.log("Going back to MainScene");
    this.scene.start(game_data.scene_list.MAIN, {});
  }

  preload () {
    this.load.image('cook', '/assets/images/backgrounds/cook.png');
    this.load.image('close', '/assets/images/objects/close.png');
  }

  create () {
    console.log("In the StoveScene");
    this.add.sprite(400 , 300, 'cook');

    // Create close after tablet, otherwise backgroudn may cover close
    let close = this.add.sprite(755, 45, 'close');
    close.setInteractive();
    close.on('pointerdown', this.onDown.bind(this));

    this.input.keyboard.on("keyup_ESC", () => {
      this.onDown();
    }, this);

    console.log('StoveScene created');
  }
}
