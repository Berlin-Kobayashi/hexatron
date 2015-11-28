import * as Boot from "./boot";
import * as Game from "./game";

var game;

init();

function init() {
  game = new Phaser.Game(800, 480, Phaser.AUTO, 'game');
  game.state.add("Boot", Boot.Boot);
  game.state.add("Game", Game.Game);
  
  game.state.start("Boot");
}