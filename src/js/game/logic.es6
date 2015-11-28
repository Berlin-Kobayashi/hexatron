export class Grid {

// Player 1 starts at the bottom Player 2 at the top

    constructor(gridSizeX, gridSizeY, trailLength) {

        //this.state = gameState.PAUSED;

        this.turnCounter = 0;

        this.gridSizeX = gridSizeX;
        this.gridSizeY = gridSizeY;

        this.trailLength = trailLength;

        this.player1 = new Player("Player 1", {}, playerDirection.UP);
        this.player2 = new Player("Player 2", {}, playerDirection.DOWN);

        this.grid = null;

        this.initializeGrid();

    }

    initializeGrid() {

        let gridSizeX = this.gridSizeX;
        let gridSizeY = this.gridSizeY;

        let grid = new Array(gridSizeX);

        // create an cellState.EMPTY, gridSizeX x gridSizeY array
        for (let i = 0; i < gridSizeX; i++) {
            grid[i] = new Array(gridSizeY);
            for (let j = 0; j < gridSizeY; j++) {
                grid[i][j] = cellState.EMPTY;
            }
        }

        let middleColumnPos = parseInt((gridSizeX - 1) / 2);

        grid[middleColumnPos][0] = cellState.HEAD1;
        grid[middleColumnPos][gridSizeY - 1] = cellState.HEAD2;

        this.player1.xPos = middleColumnPos;
        this.player1.yPos = 0;

        this.player2.xPos = middleColumnPos;
        this.player2.yPos = gridSizeY - 1;

        this.grid = grid;

    }

    nextTurn() {

        let didPlayer1Lose = this.playerForward(this.player1, cellState.BODY1, cellState.HEAD1);
        let didPlayer2Lose = this.playerForward(this.player2, cellState.BODY2, cellState.HEAD2);

        if (didPlayer1Lose === 0 && didPlayer2Lose === 0) {
            this.turnCounter++;
            return winner.RUNNING;
        } else if (didPlayer1Lose === 1 && didPlayer2Lose === 1) {
            return winner.DRAW;
        } else if (didPlayer1Lose === 1 && didPlayer2Lose === 0) {
            return winner.PLAYER2;
        } else if (didPlayer1Lose === 0 && didPlayer2Lose === 1) {
            return winner.PLAYER1;
        }

    }

    /**
     * @returns {number} 1 if this player lost and 0 if the game is not decided yet
     */
    playerForward(player, bodyKey, headKey) {

        let initialXPos = player.xPos;
        let initialYPos = player.yPos;

        player.forward();

        if (this.turnCounter > this.trailLength) {
            let tailPos = player.trail.pop();
            this.grid[tailPos.x][tailPos.y] = cellState.EMPTY;
        }

        //if out of bounce in front cell status = bodyKey
        let inFrontCellState = (player.xPos >= this.gridSizeX || player.yPos >= this.gridSizeY || player.xPos < 0 || player.yPos < 0) ? bodyKey : this.grid[player.xPos][player.yPos];

        if (inFrontCellState !== cellState.EMPTY) {
            return 1;
        }


        this.grid[initialXPos][initialYPos] = bodyKey;

        this.grid[player.xPos][player.yPos] = headKey;

        return 0;

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
        this.trail = new Array();

    }

    forward() {

        this.trail.push({x: this.xPos, y: this.yPos});

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

export var winner = {

    RUNNING: 0,
    PLAYER1: 1,
    PLAYER2: 2,
    DRAW: 3

};

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
    LEFTUP: 5

};
