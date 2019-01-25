class MainGame {
    constructor () {
        this.config = {
            type: Phaser.AUTO,
            width: 1366,
            height: 768,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 }
                }
            },
            scene: {
                preload: this.preload,
                create: this.create
            }
        };
    }

    preload () {
        this.load.image('logo', 'sprites/table.gif');
    }

    create () {
        var logo = this.physics.add.image(game_data.TABLE_X, game_data.TABLE_Y, 'logo');
    }
}


let game = new MainGame();
let start_game = new Phaser.Game(game.config);
