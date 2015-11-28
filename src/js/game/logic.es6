export class Grid {

// Player 1 starts at the bottom Player 2 at the top

    constructor(gridSize) {

        //this.state = gameState.PAUSED;

        this.turnCounter = 0;

        this.gridSize = gridSize;
        this.trailLength = parseInt(gridSize / 2);

        this.player1 = new Player("Player 1", {}, playerDirection.UP);
        this.player2 = new Player("Player 2", {}, playerDirection.DOWN);

        this.grid = null;

        this.initializeGrid();

    }

    initializeGrid() {

        let gridSize = this.gridSize;
        let grid = new Array(gridSize);

        // create an cellState.EMPTY, gridSize x gridSize array
        for (let i = 0; i < gridSize; i++) {
            grid[i] = new Array(gridSize);
            for (let j = 0; j < gridSize; j++) {
                grid[i][j] = cellState.EMPTY;
            }
        }

        let middleColumnPos = parseInt((gridSize - 1) / 2);

        grid[middleColumnPos][0] = cellState.HEAD1;
        grid[middleColumnPos][gridSize - 1] = cellState.HEAD2;

        this.player1.xPos = middleColumnPos;
        this.player1.yPos = 0;

        this.player2.xPos = middleColumnPos;
        this.player2.yPos = gridSize - 1;

        this.grid = grid;

    }

    nextTurn() {

        this.player1Forward();
        this.player2Forward();
        this.turnCounter++;

    }

    player1Forward() {

        let initialXPos = this.player1.xPos;
        let initialYPos = this.player1.yPos;

        this.player1.forward();

        this.grid[initialXPos][initialYPos] = cellState.BODY1;

        this.grid[this.player1.xPos][this.player1.yPos] = cellState.HEAD1;

        //TODO unset the end of the trail if max trail length reached

    }

    player2Forward() {

        let initialXPos = this.player2.xPos;
        let initialYPos = this.player2.yPos;

        this.player2.forward();

        this.grid[initialXPos][initialYPos] = cellState.BODY2;

        this.grid[this.player2.xPos][this.player2.yPos] = cellState.HEAD2;

        //TODO unset the end of the trail if max trail length reached

    }

    player1Left() {
        this.player1.left();
    }

    player2Left() {
        this.player2.left();
    }

    player1Right() {
        this.player1.right();
    }

    player2Right() {
        this.player2.right();
    }
}

export class Player {

    constructor(name, position, direction) {

        this.name = name;
        this.xPos = position[0];
        this.yPos = position[1];
        this.direction = direction;

    }

    forward() {

        switch (this.direction) {
            case playerDirection.UP:
                this.yPos++;
                break;
            case playerDirection.DOWN:
                this.yPos--;
                break;
            case playerDirection.RIGHTUP:
                this.xPos++;
                if (this.xPos % 2 === 0) {
                    this.yPos++;
                }
                break;
            case playerDirection.RIGHTDOWN:
                this.xPos++;
                if (this.xPos % 2 !== 0) {
                    this.yPos--;
                }
                break;
            case playerDirection.LEFTUP:
                this.xPos--;
                if (this.xPos % 2 === 0) {
                    this.yPos++;
                }
                break;
            case playerDirection.LEFTDOWN:
                this.xPos--;
                if (this.xPos % 2 !== 0) {
                    this.yPos--;
                }
                break;
        }

    }

    left() {

        switch (this.direction) {
            case playerDirection.UP:
                this.direction = playerDirection.LEFTUP;
                break;
            case playerDirection.DOWN:
                this.direction = playerDirection.RIGHTDOWN;
                break;
            case playerDirection.RIGHTUP:
                this.direction = playerDirection.UP;
                break;
            case playerDirection.RIGHTDOWN:
                this.direction = playerDirection.RIGHTUP;
                break;
            case playerDirection.LEFTUP:
                this.direction = playerDirection.LEFTDOWN;
                break;
            case playerDirection.LEFTDOWN:
                this.direction = playerDirection.DOWN;
                break;
        }

    }

    right() {

        switch (this.direction) {
            case playerDirection.UP:
                this.direction = playerDirection.RIGHTUP;
                break;
            case playerDirection.DOWN:
                this.direction = playerDirection.LEFTDOWN;
                break;
            case playerDirection.RIGHTUP:
                this.direction = playerDirection.RIGHTDOWN;
                break;
            case playerDirection.RIGHTDOWN:
                this.direction = playerDirection.DOWN;
                break;
            case playerDirection.LEFTUP:
                this.direction = playerDirection.UP;
                break;
            case playerDirection.LEFTDOWN:
                this.direction = playerDirection.LEFTUP;
                break;
        }

    }
}

//export var gameState = {
//
//    PAUSED: 0,
//    RUNNING: 1
//
//};

export var cellState = {

    EMPTY: 0,
    HEAD1: 1,
    HEAD2: 2,
    BODY1: 3,
    BODY2: 4

};

export var playerDirection = {

    UP: 0,
    RIGHTUP: 1,
    RIGHTDOWN: 2,
    DOWN: 3,
    LEFTDOWN: 4,
    LEFTUP: 5,

};
