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
    this.load.image('note', '/assets/images/objects/note.png');
  }

  create () {
    let blocks = this.physics.add.staticGroup();
    blocks.create(400 , 300, 'tablet');
    let note = blocks.create(270, 294, 'note').setScale(0.17, 0.15); // sprite is so big

    // Add time text:
    timerHeader = this.add.bitmapText(600, 360, 'carrier_command', 'TIME', 20);
    timerValue = this.add.bitmapText(595, 410, 'carrier_command', timerInitValue, 40);
    timerText = this.add.bitmapText(685, 430, 'carrier_command', 's', 20);
    
    // Create close after tablet, otherwise backgroudn may cover close
    let close = this.add.sprite(755, 45, 'close');
    close.setInteractive();
    close.on('pointerdown', this.onDown.bind(this));

    this.input.keyboard.on("keyup_ESC", () => {
      this.onDown();
    }, this);

    console.log('TabletScene created');
  }
}
