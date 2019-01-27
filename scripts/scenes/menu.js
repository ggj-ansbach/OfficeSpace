
class Menu extends Phaser.Scene {

  constructor() {
    super({key: game_data.scene_list.MENU});
    game.sound.stopAll();
  }

  preload() {
    this.load.image('menu', '/assets/images/objects/menu.png');
    this.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
  }
  
  create () {
    let bg = this.add.sprite(400, 300, 'menu');
    let bmpText = this.add.bitmapText(40, 350, 'carrier_command','Everyday Kitchen', 34);
    // bg.setScale(3);
    // bg.setOrigin(0, 0);
  }
}