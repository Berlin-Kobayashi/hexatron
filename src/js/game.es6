// import player logic

export class Game extends Phaser.State {
  create() {
    this.scale = 0.5;
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
    player.body = [];
    for (let i = 0; i < 8; ++i) {
      player.body[i] = this.add.sprite(100, 100, "body");
      player.body[i].tint = colour;
    }
    return player;
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
    
    this.updatePlayer(this.player1);
    this.drawPlayer(this.player1);
    this.updatePlayer(this.player2);
    this.drawPlayer(this.player2);
  }
  
  updatePlayer(player) {
    // update head from logic
    // update body from logic
    
    // for now:
    player.y += 1;
    if (player.y > 30) player.y = 0;
  }
  
  drawPlayer(player) {
    let x = player.x;
    let y = player.y;
    player.sprite.position.x = this.grid[x][y].x;
    player.sprite.position.y = this.grid[x][y].y;
    for (let i = 0; i < player.body.length; ++i) {
      player.body[i].position.x = this.grid[x][y].x;
      player.body[i].position.y = this.grid[x][y].y;
    }
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