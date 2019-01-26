class TabletScene extends Phaser.Scene {
  constructor () {
    super({key: game_data.scene_list.TABLET});
  }

  preload () {
    this.load.image('tabletBG', '/assets/images/backgrounds/tablet.png');
    this.load.image('close', '/assets/images/objects/close.png');
  }

  create () {
    this.add.sprite(400 , 300, 'tabletBG');
    this.add.sprite(700, 80, 'close');
    console.log('TableScene created');
  }
}
