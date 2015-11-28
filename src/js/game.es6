export class Game extends Phaser.State {
  create() {
    this.player1 = this.add.sprite(50, 50, "head");
    this.player1.tint = 0xff0000;
    this.player2 = this.add.sprite(100, 100, "head");
    this.player2.tint = 0x0000ff;
  }
  
  update() {
    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      // player 1 turn left 
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      // player 1 turn right
    }
    if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
      // player 2 turn left
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.D)) {
      // player 2 turn right
    }
  }
}