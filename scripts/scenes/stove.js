class StoveScene extends Phaser.Scene {
  constructor () {
    super({key: game_data.scene_list.STOVE});
  }

  onDown () {
    console.log("Going back to MainScene");
    this.scene.switch(game_data.scene_list.MAIN, {});
  }

  preload () {
    this.load.image('cook', '/assets/images/backgrounds/cook.png');
  }

  create () {
    console.log("In the StoveScene");
    this.add.sprite(400 , 300, 'cook');

    console.log('StoveScene created');
  }
}
