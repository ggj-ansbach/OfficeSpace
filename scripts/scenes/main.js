let controls;
let items;
let tablet_open;
let shelve_open;
let stove_open;
let timerHeader;
let timerInitValue;
let timerValue;
let timerText;
let timer;

class MainScene extends Phaser.Scene {
  constructor() {
    super({key: game_data.scene_list.MAIN});
    let blocks;
    let player;
    let tablet_direction;
    let stove_direction;
    let shelve_direction;
  }

  checkOverlap(spriteA, spriteB) {
    let boundsA = spriteA.getBounds();
    let boundsB = spriteB.getBounds();
    return Phaser.Geom.Rectangle.ContainsPoint(boundsA, boundsB);
  }

  openTablet(sound) {
    game.sound.stopAll();
    sound.play();
    this.scene.switch(game_data.scene_list.TABLET, {});
  }

  openShelve(sound) {
    game.sound.stopAll();
    sound.play();
    this.scene.switch(game_data.scene_list.SHELVE, {});
  }

  openStove(sound) {
    game.sound.stopAll();
    sound.play();
    this.scene.switch(game_data.scene_list.STOVE, {});
  }

  preload() {
    this.load.image('floor', '/assets/images/backgrounds/floor.png');
    this.load.image('wall-right', '/assets/images/backgrounds/wall-right.png');
    this.load.image('wall-top', '/assets/images/backgrounds/wall-top.png');
    this.load.image('shelve', '/assets/images/objects/shelve.png');
    this.load.image('stove', '/assets/images/objects/stove.png');
    this.load.image('table', '/assets/images/objects/table.png');
    this.load.image('hud', '/assets/images/objects/hud.png');
    this.load.image('arrow', '/assets/images/objects/arrow.png');
    this.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
    this.load.spritesheet('chef', '/assets/images/sprites/chef.png', {frameWidth: 54, frameHeight: 78});
    this.load.audio('shelve_open', 'assets/sounds/cabinet_open.mp3');
    this.load.audio('tablet_open', 'assets/sounds/tablet_unlock.mp3');
    this.load.audio('stove_open', 'assets/sounds/stove_start.mp3');
  }

  create() {
    // Create a group of kitchen objects:
    this.blocks = this.physics.add.staticGroup();
    this.blocks.create(400, 300, 'floor');
    this.blocks.create(786, 192, 'wall-right');
    this.blocks.create(400, 21, 'wall-top');
    this.blocks.create(120, 38, 'shelve');
    this.blocks.create(737, 230, 'stove');
    this.blocks.create(380, 348, 'table');
    this.blocks.create(400, 508, 'hud');

    this.tablet_direction = this.add.sprite(370, 270, 'arrow').setAngle(90).setScale(0.8);
    this.shelve_direction = this.add.sprite(120, 100, 'arrow').setAngle(-90).setScale(0.8);
    this.stove_direction = this.add.sprite(650, 230, 'arrow').setAngle(0).setScale(0.8);

    // Add time text
    timerHeader = this.add.bitmapText(105, 460, 'carrier_command', 'TIME', 20);
    timerInitValue = 15;
    timerValue = this.add.bitmapText(100, 510, 'carrier_command', timerInitValue, 40);
    timerText = this.add.bitmapText(190, 530, 'carrier_command', 's', 20);

    // this.player settings:
    this.player = this.physics.add.sprite(game_data.coordinatesX, game_data.coordinatesY, 'chef').setScale(1.25);
    // items = this.add.sprite(100, 220, 'items');
    this.player.body.allowGravity = false;
    this.player.setCollideWorldBounds(true);

    shelve_open = this.sound.add('shelve_open');
    tablet_open = this.sound.add('tablet_open');
    stove_open = this.sound.add('stove_open');

    // Character Frame Set:
    // 0   1  2  3 [Base, Down]
    // 4   5  6  7 [Left]
    // 8   9 10 11 [Right]
    // 12 13 14 15 [Up

    // Animate this.player:
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


    // Group this.player and this.blocks for collision:
    this.physics.add.collider(this.player, this.blocks);

    this.input.keyboard.on("keyup_SPACE", () => {
      if (this.checkOverlap(this.player, this.shelve_direction))  { // player & shelve
        this.openShelve(shelve_open);
      } else if(this.checkOverlap(this.player, this.tablet_direction)) { // player & tablet
        this.openTablet(tablet_open);
      } else if (this.checkOverlap(this.player, this.stove_direction)) { // player & stove
        this.openStove(stove_open);
      }

    });
    // Define controls:
    controls = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (controls.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.setVelocityX(0);
      this.player.anims.play('up', true);
    } else if (controls.down.isDown) {
      this.player.setVelocityY(160);
      this.player.setVelocityX(0);
      this.player.anims.play('down', true);
    } else if (controls.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.setVelocityY(0);
      this.player.anims.play('left', true);
    } else if (controls.right.isDown) {
      this.player.setVelocityX(160);
      this.player.setVelocityY(0);
      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
      this.player.anims.play('turn', true);
    }

    game_data.coordinatesX = this.player.x;
    game_data.coordinatesY = this.player.y;
  }
}
