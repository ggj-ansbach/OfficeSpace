class ShelveScene extends Phaser.Scene {
  constructor () {
    super({key: game_data.scene_list.SHELVE});
    this.broccoli;
    this.bread;
    this.cheese;
    this.tomato;
    this.bell_pepper;
    this.meat;
    this.selected_recipes = [];
    this.RECIPE_ARRAY_ORIGIN_X = 340;
    this.RECIPE_ARRAY_ORIGIN_Y = 470;
    this.HORIZONTAL_SPACING = 117; // all are in pixels
    this.VERTICAL_SPACING = 81;
    this.RECIPE_COUNT = 8;
  }

  addItem(item, type) {
    this.selected_recipes.push(item);
    this.paint(type);
  }

  paint(recipe_type) {
    // Iterate and create sprites of specific type
    let start_x = this.RECIPE_ARRAY_ORIGIN_X;
    let start_y = this.RECIPE_ARRAY_ORIGIN_Y;
    
    // Iterate and generate co-ordinates for sprites
    for (let i = 0; i < this.RECIPE_COUNT; i++) {
      console.log(start_x, start_y);
      this.add.sprite(start_x, start_y, 'broccoli');
      if (i !== ((this.RECIPE_COUNT / 2) - 1)) { // At half, update co-ords
        start_x += this.HORIZONTAL_SPACING;
        start_y = this.VERTICAL_SPACING;
      } else {
        start_x = this.RECIPE_ARRAY_ORIGIN_X;
        start_y = this.RECIPE_ARRAY_ORIGIN_Y + this.VERTICAL_SPACING;
      }
    }
  }

  onDown () {
    console.log("Going back to MainScene");
    this.scene.stop();
    this.scene.start(game_data.scene_list.MAIN);
    game.sound.stopAll();
  }

  preload () {
    this.load.image('shelf', '/assets/images/backgrounds/shelf.png');
    this.load.image('close', '/assets/images/objects/close.png');
    this.load.image('broccoli', '/assets/images/icons/broccoli.png');
    this.load.image('mask', '/assets/images/objects/itablet.png');
  }

  create () {
    console.log("In the ShelveScene");
    this.add.sprite(400 , 300, 'shelf');

    //this.add.sprite(457,  551, 'arrow');
    /* 
      200, 180 -> Brocoli
      410, 180 -> Meat
      550, 180 -> Cheese
      200, 300 -> Bell Pepper
      330, 340 -> Bread
      540, 340 -> Tomato

      340, 470 -> 1st arrow cell
    */

    this.broccoli = this.add.sprite(210, 190, 'mask').setScale(1.5);
    this.meat = this.add.sprite(500, 190, 'mask').setScale(1.5);
    this.cheese = this.add.sprite(550, 200, 'mask').setScale(1.5);
    this.bell_pepper = this.add.sprite(210, 330, 'mask').setScale(1.5);
    this.bread = this.add.sprite(320, 350, 'mask').setScale(1.7);
    this.tomato = this.add.sprite(550, 340, 'mask').setScale(1.5);

    this.broccoli.setInteractive().on('pointerdown', () => {
      this.addItem(this, 'broccoli');
    });

    this.meat.setInteractive().on('pointerdown', () => {
      console.log('clicked  Brocoli');
    });

    this.cheese.setInteractive().on('pointerdown', () => {
      console.log('clicked  Brocoli');
    });

    this.bell_pepper.setInteractive().on('pointerdown', () => {
      console.log('clicked  Brocoli');
    });

    this.bread.setInteractive().on('pointerdown', () => {
      console.log('clicked  Brocoli');
    });

    this.tomato.setInteractive().on('pointerdown', () => {
      console.log('clicked  Brocoli');
    });
    
    // Add time text:
    timerHeader = this.add.bitmapText(105, 460, 'carrier_command', 'TIME', 20);
    timerValue = this.add.bitmapText(100, 510, 'carrier_command', timer, 40);
    timerText = this.add.bitmapText(190, 530, 'carrier_command', 's', 20);

    let close = this.add.sprite(755, 45, 'close');

    close.setInteractive();
    close.on('pointerdown', this.onDown.bind(this));

    this.input.keyboard.on("keyup_ESC", () => {
      this.onDown();
    }, this);

    console.log('ShelveScene created');
  }

  update() {
    timerValue.text = padLeft(timer);
  }
}
