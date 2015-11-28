// import player logic

export class Game extends Phaser.State {
  create() {
    this.scale = 0.5;
    this.drawBackground();
    this.player1 = {}; // TODO: define as player
    this.player1.sprite = this.add.sprite(50, 50, "head");
    this.player1.sprite.scale.setTo(this.scale, this.scale);
    this.player1.sprite.tint = 0xff0000;
    this.player2 = {};
    this.player2.sprite = this.add.sprite(100, 100, "head");
    this.player2.sprite.scale.setTo(this.scale, this.scale);
    this.player2.sprite.tint = 0x0000ff;
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
    
    this.renderGrid();
  }
  
  drawBackground() {
    this.grid = [];
    for (let x = 0; x < 32; ++x) { // TODO: get gridsize from logic
      this.grid[x] = [];
      for (let y = 0; y < 60; ++y) {
        let offset = y % 2 == 0 ? 0 : 24;
        this.grid[x][y] = this.add.sprite((x * 48 + offset)*this.scale, (y * 16)*this.scale, "background");
        this.grid[x][y].scale.setTo(this.scale, this.scale);
      }
    }
  }
  
  renderGrid() {

  }
}