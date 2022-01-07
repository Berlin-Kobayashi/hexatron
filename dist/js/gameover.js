export class Gameover extends Phaser.State {
  init() {
    console.log(this.state.states['Gameover'].gameOverStatus);
    let text = "WTF??";
    if (this.gameOverStatus == 1) {
      this.stage.backgroundColor = 0xff0000;
      text = "PLAYER 1 YOU ARE AMAZING! EVERYONE LOVES YOU!!!";
      this.sound.play("deadSound");
    } else if (this.gameOverStatus == 2) {
      this.stage.backgroundColor = 0x0000ff;
      text = "PLAYER 2 IS THE THE BEST, BY FAR!";
      this.sound.play("deadSound");
    } else if (this.gameOverStatus == 3) {
      this.stage.backgroundColor = 0x00ff00;
      text = "HOLY COW! A TIE! WHOOOOOA!!!!";
    }
    let style = { font: "24px Arial", fill: "#fff", align: "center" };
    this.add.text(this.world.centerX, this.world.centerY, text, style).anchor.setTo(0.5);
    this.readyText = this.add.text(this.world.centerX, this.world.centerY + 100, "PRESS SPACE TO PLAY AGAIN", style).anchor.setTo(0.5);
  }
  
  update() {
    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
      this.state.start("Boot", true, false); 
    }
  }
}