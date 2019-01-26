let player;
let controls;
let blocks;

class MainScene extends Phaser.Scene {
  constructor() {
    super({key: game_data.scene_list.MAIN});
  }

  openITablet() {
    this.scene.start(game_data.scene_list.TABLET, {});
  }

  openIShelve() {
    this.scene.start(game_data.scene_list.SHELVE, {});
  }

  preload() {
    this.load.image('floor', '/assets/images/backgrounds/floor.png');
    this.load.image('wall-right', '/assets/images/backgrounds/wall-right.png');
    this.load.image('wall-top', '/assets/images/backgrounds/wall-top.png');
    this.load.image('shelve', '/assets/images/objects/shelve.png');
    this.load.image('stove', '/assets/images/objects/stove.png');
    this.load.image('table', '/assets/images/objects/table.png');
    this.load.image('itablet', '/assets/images/objects/itablet.png');
    this.load.image('ishelve', '/assets/images/objects/ishelve.png');
    this.load.image('hud', '/assets/images/objects/hud.png');
    this.load.spritesheet('chef', '/assets/images/sprites/chef.png', {frameWidth: 54, frameHeight: 78});
  }

  create() {
    // Create a group of kitchen objects:
    blocks = this.physics.add.staticGroup();
    blocks.create(400, 300, 'floor');
    blocks.create(786, 192, 'wall-right');
    blocks.create(400, 21, 'wall-top');
    blocks.create(115, 38, 'shelve');
    blocks.create(737, 230, 'stove');
    blocks.create(400, 348, 'table');
    blocks.create(400, 508, 'hud');

    // Player settings:
    player = this.physics.add.sprite(150, 325, 'chef').setScale(1.25);
    player.body.allowGravity = false;
    player.setCollideWorldBounds(true);

    // Character Frame Set:
    // 0   1  2  3 [Base, Down]
    // 4   5  6  7 [Left]
    // 8   9 10 11 [Right]
    // 12 13 14 15 [Up

    // Animate player:
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('chef', {start: 12, end: 15}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('chef', {start: 0,  end: 3}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('chef', {start: 4, end: 7}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('chef', {start: 8, end: 11}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{key: 'chef', frame: 0}],
      frameRate: 10
    });


    // Group player and blocks for collision:
    this.physics.add.collider(player, blocks);

    let itablet = this.physics.add.group({
      key: 'itablet',
      setXY: {
        x: 382,
        y: 325,
      }
    });

    let ishelve = this.physics.add.group({
      key: 'ishelve',
      setXY: {
        x: 100,
        y: 86,
      }
    });

    // Callback for player and invisible objects:
    this.physics.add.collider(player, itablet, this.openITablet.bind(this));
    this.physics.add.collider(player, ishelve, this.openIShelve.bind(this));

    // Define controls:
    controls = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (controls.up.isDown) {
      player.setVelocityY(-360);
      player.setVelocityX(0);
      player.anims.play('up', true);
    } else if (controls.down.isDown) {
      player.setVelocityY(360);
      player.setVelocityX(0);
      player.anims.play('down', true);
    } else if (controls.left.isDown) {
      player.setVelocityX(-360);
      player.setVelocityY(0);
      player.anims.play('left', true);
    } else if (controls.right.isDown) {
      player.setVelocityX(360);
      player.setVelocityY(0);
      player.anims.play('right', true);
    } else {
      player.setVelocityX(0);
      player.setVelocityY(0);
      player.anims.play('turn', true);
    }
  }
}
