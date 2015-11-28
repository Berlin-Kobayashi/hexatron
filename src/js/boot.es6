export class Boot extends Phaser.State {
  init() {
    this.stage.smoothed = true;
    let style = { font: "24px Arial", fill: "#fff", align: "center" };
    this.add.text(this.world.centerX, this.world.centerY, "HEXATRON!!!!!", style);

  }
  
  preload() {
    console.log("loading assets...");
    this.load.image("head", "../images/head.png");
    this.load.image("background", "../images/background.png");
    this.load.image("body", "../images/body.png");
    console.log("done loading assets.");
  }
  
  create() {
      let style = { font: "18px Arial", fill: "#fff", align: "center" };
      this.add.text(this.world.centerX, this.world.centerY + 100, "PRESS SPACE TO START!", style);
  }
  
  update() {
    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
      this.state.start("Game"); 
    }
  }
  
}