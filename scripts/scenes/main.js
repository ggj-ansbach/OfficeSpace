let player;
let controls;
let blocks;

class Main extends Phaser.Scene {
  constructor() {
    super({key: "Main"});
  }

  preload () {
    this.load.image('placeholder', '/assets/placeholder.jpg');
    this.load.image('pane', '/assets/pane.jpg');
    this.load.image('shelve', '/assets/shelve.jpg');
    this.load.image('table', '/assets/table.jpg');
    this.load.image('stove', '/assets/stove.jpg');
    this.load.spritesheet('dude', '/assets/dude.png', {frameWidth: 32, frameHeight: 48});
  }

  create () {
    player = this.physics.add.sprite(150, 392, 'dude');

    player.body.allowGravity = false;
    player.body.collideWorldBounds = true;

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{key: 'dude', frame: 4}],
      frameRate: 10
    });

    blocks = this.physics.add.staticGroup();

    blocks.create(400, 508, 'pane');
    blocks.create(118, 38, 'shelve');
    blocks.create(420, 348, 'table');
    blocks.create(732, 178, 'stove');

    this.physics.add.collider(player, blocks);

    controls = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (controls.left.isDown) {
      player.setVelocityX(-180);
      player.anims.play('left', true);
    } else if (controls.right.isDown) {
      player.setVelocityX(180);
      player.anims.play('right', true);
    } else if (controls.up.isDown) {
      player.setVelocityY(-180);
      player.anims.play('up', true);
    } else if (controls.down.isDown) {
      player.setVelocityY(180);
      player.anims.play('down', true);
    } else {
      player.setVelocityX(0);
      player.setVelocityY(0);
      player.anims.play('turn', true);
    }
  }
}
