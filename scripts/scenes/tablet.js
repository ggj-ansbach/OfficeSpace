class TabletScene extends Phaser.Scene {
  constructor () {
    super({key: game_data.scene_list.TABLET});
  }

  onDown () {
    console.log("Going back to Main Scene");
    this.scene.start(game_data.scene_list.MAIN, 'hello from table');
  }

  preload () {
    this.load.image('tabletBG', '/assets/images/backgrounds/tablet.png');
    this.load.image('close', '/assets/images/objects/close.png');
  }

  create () {
    console.log("In the Tablet scene");
    this.add.sprite(400 , 300, 'tabletBG');
    let close = this.add.sprite(700, 80, 'close');
    close.setInteractive();
    close.on('pointerdown', this.onDown.bind(this));
    // close.events.onInputDown.add(this.onDown, this);
    console.log('TableScene created');
  }
}
