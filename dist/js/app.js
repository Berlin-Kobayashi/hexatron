import {Boot} from "./boot.js";

import {Game} from "./game.js";

import {Gameover} from "./gameover.js";


var game;

init();

function init() {
  game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game');
  game.state.add("Boot", Boot);
  game.state.add("Game", Game);
  game.state.add("Gameover", Gameover);

  game.state.start("Boot");
}