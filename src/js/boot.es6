export class Boot extends Phaser.State {
  init() {
    this.stage.smoothed = true;
    var text = "HEXATRON!!!";
    var style = { font: "24px Arial", fill: "#fff", align: "center" };
    this.add.text(this.world.centerX, this.world.centerY, text, style);
  }
  
  preload() {
    // load font
  }
  
  create() {
    // wait for input
  }
}