class ShelveScene extends Phaser.Scene {
  constructor () {
    super({key: game_data.scene_list.SHELVE});
  }

  onDown () {
    console.log("Going back to MainScene");
    this.scene.start(game_data.scene_list.MAIN, {});
    game.sound.stopAll();
  }

  preload () {
    this.load.image('shelf', '/assets/images/backgrounds/shelf.png');
    this.load.image('close', '/assets/images/objects/close.png');
  }

  create () {
    console.log("In the ShelveScene");
    this.add.sprite(400 , 300, 'shelf');

    let close = this.add.sprite(755, 45, 'close');

    close.setInteractive();
    close.on('pointerdown', this.onDown.bind(this));

    this.input.keyboard.on("keyup_ESC", () => {
      this.onDown();
    }, this);

    console.log('ShelveScene created');
  }
}
