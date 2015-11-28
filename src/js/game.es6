import * as Grid from "./game/logic"

export class Game extends Phaser.State {
  create() {
    this.gridSize = 32;
    this.data = new Grid.Grid(this.gridSize);
    this.scale = 1;
    this.time.desiredFps = 10;
    this.drawBackground();
    
    this.player1 = this.createPlayer(0xff0000);
    this.player2 = this.createPlayer(0x0000ff);
  }
  
  createPlayer(colour) {
    let player = {};
    player.x = 0;
    player.y = 0;
    player.sprite = this.add.sprite(100, 100, "head");
    player.sprite.scale.setTo(this.scale, this.scale);
    player.sprite.tint = colour;
    return player;
  }
  
  update() {
    let gameOver = this.data.nextTurn();
    if (gameOver != 0) {
      this.state.start("GameOver", gameOver);
    }
    
    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.data.player1Left();
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.data.player1Right();
    }
    if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
      this.data.player2Left();
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.D)) {
      this.data.player2Right();
    }
    
    for (let x = 0; x < this.gridSize; ++x) {
      for (let y = 0; y < this.gridSize; ++y) {
        if (this.data.grid[x][y] == 1) {
          this.drawPlayerPart(this.player1.sprite, x, y);
        } else if (this.data.grid[x][y] == 2) {
          this.drawPlayerPart(this.player2.sprite, x, y);
        }
        if (this.data.grid[x][y] == 3) {
          this.grid[x][y].body.tint = 0xff0000;
        } else if (this.data.grid[x][y] == 4) {
          this.grid[x][y].body.tint = 0x0000ff;
        }
      }
    }
  }
  
  drawPlayerPart(sprite, x, y) {
    sprite.position.x = this.grid[x][y].x + 4 * this.scale;
    sprite.position.y = this.grid[x][y].y + 4 * this.scale;
  }
  
  drawBackground() {
    this.grid = [];
    for (let x = 0; x < this.gridSize; ++x) {
      this.grid[x] = [];
      for (let y = 0; y < this.gridSize; ++y) {
        let offset = x % 2 == 0 ? 0 : 16;
        let canvasX = (x * 26)*this.scale;
        let canvasY = (y * 32 + offset)*this.scale;
        this.grid[x][y] = this.add.sprite(canvasX, canvasY, "background");
        this.grid[x][y].scale.setTo(this.scale, this.scale);
        this.grid[x][y].body = this.add.sprite(canvasX + 9 * this.scale, canvasY + 8 * this.scale, "body");
        this.grid[x][y].body.tint = 0x000000;
      }
    }
  }
}