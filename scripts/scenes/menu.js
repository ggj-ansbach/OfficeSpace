class Menu extends Phaser.Scene {

  constructor() {
    super({key: game_data.scene_list.MENU});
    game.sound.stopAll();
  }

  actionOnClick() {
    this.scene.switch(game_data.scene_list.MAIN);
  }

  preload() {
    this.load.image('menu', '/assets/images/objects/menu.png');
    this.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
  }

  create () {
    let bg = this.add.sprite(400, 300, 'menu');
    let bmpText = this.add.bitmapText(40, 350, 'carrier_command','Everyday Kitchen', 34);
    
    let button = this.add.bitmapText(500, 500, 'carrier_command', 'Start'). setTint('black');
    button.setInteractive();
    button.on('pointerdown', this.actionOnClick.bind(this));
    // bg.setScale(3);
    // bg.setOrigin(0, 0);
  }
}
