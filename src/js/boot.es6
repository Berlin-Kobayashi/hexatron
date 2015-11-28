export class Boot extends Phaser.State {
  init() {
    this.stage.smoothed = true;
    let style = { font: "24px Arial", fill: "#fff", align: "center" };
    this.add.text(this.world.centerX, this.world.centerY, "HEXATRON!!!!!", style);
    this.readyText = this.add.text(this.world.centerX, this.world.centerY + 100, "LOADING...", style);
  }
  
  preload() {
    console.log("loading assets...");
    this.load.image("head", "../images/head.png");
    this.load.image("background", "../images/background.png");
    this.load.image("body", "../images/body.png");
    this.load.audio("music", "../audio/Hexatron_mp3.mp3");
    this.load.audio("deadSound", "../audio/killed_a_muthafucker.wav");
    this.load.audio("turn1", "../audio/turn_01.wav");
    this.load.audio("turn2", "../audio/turn_02.wav");
    this.load.audio("turn3", "../audio/turn_03.wav");
    this.load.audio("turn4", "../audio/turn_04.wav");
    console.log("done loading assets.");
  }
  
  create() {
    this.add.audio("music").play();
    this.readyText.setText("PRESS SPACE TO START!");
  }
  
  update() {
    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
      this.state.start("Game"); 
    }
  }
  
}