class TabletScene extends Phaser.Scene {
  constructor () {
    super({key: game_data.scene_list.TABLET});
    this.recipes_level1 = ['Bell Pepper', 'Tomato', 'Tomato', 'Bread', 'Cheese'];
  }

  onDown () {
    console.log("Going back to MainScene");
    this.scene.stop();
    this.scene.start(game_data.scene_list.MAIN);
    game.sound.stopAll();
  }

  preload () {
    this.load.image('tablet', '/assets/images/backgrounds/tablet.png');
    this.load.image('close', '/assets/images/objects/close.png');
    this.load.image('note', '/assets/images/objects/note.png');
  }

  create () {
    let blocks = this.physics.add.staticGroup();
    blocks.create(400 , 300, 'tablet');
    let note = blocks.create(270, 294, 'note');

    // Add time text:
    timerHeader = this.add.bitmapText(600, 360, 'carrier_command', 'TIME', 20);
    timerValue = this.add.bitmapText(595, 410, 'carrier_command', timer, 40);
    timerText = this.add.bitmapText(685, 430, 'carrier_command', 's', 20);

    let noteX = note.x - 100;
    let noteY = note.y - 150;
    let temp;

    // Create close after tablet, otherwise backgroudn may cover close
    let close = this.add.sprite(755, 45, 'close');
    close.setInteractive();
    close.on('pointerdown', this.onDown.bind(this));

    this.input.keyboard.on("keyup_ESC", () => {
      this.onDown();
    }, this);

    console.log('TabletScene created');
  }

  update() {
    timerValue.text = timer;
  }
}
