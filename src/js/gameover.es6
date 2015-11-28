export class GameOver extends Phaser.State {
  init(gameOverStatus) {
    console.log(gameOverStatus);
    let text = "WTF??";
    if (gameOverStatus == 1) {
      text = "PLAYER 1 YOU ARE AMAZING! EVERYONE LOVES YOU!!!";
    } else if (gameOverStatus == 2) {
      text = "PLAYER 2 IS THE THE BEST, BY FAR!";
    } else if (gameOverStatus == 3) {
      text = "HOLY COW! A TIE! WHOOOOOA!!!!";
    }
    let style = { font: "24px Arial", fill: "#fff", align: "center" };
    this.add.text(this.world.centerX, this.world.centerY, text, style);
    this.readyText = this.add.text(this.world.centerX, this.world.centerY + 100, "PRESS SPACE TO PLAY AGAIN", style);
  }
  
  update() {
    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
      this.state.start("Game", true, false); 
    }
  }
}