// This class stores data for locating sprites on scenes
class GameData {
  constructor () {
    this.TABLE_X = 630;
    this.TABLE_Y = 690;
    this.scene_list = {
      MAIN: 'Main',
      TABLET: 'Tablet',
      SHELVE: 'Shelve'
    };
  }
}

// eslint-disable-next-line no-unused-vars
let game_data = new GameData();
