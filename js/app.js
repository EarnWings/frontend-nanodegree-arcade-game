// Enemies our player must avoid
var Enemy = function(x, y, rate) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
	this.x = x;
	this.y = y;
	this.rate = rate;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x += this.rate * dt;
	if (this.x > 510) {
		this.x = -100;
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(x, y) {
	this.x = x;
	this.y = y;
	this.sprite = 'images/char-cat-girl.png';
}

Player.prototype.update = function() {
	if (this.y < 50) {
		setTimeout(function() {
			player.x = 203;
			player.y = 403;
		}, 300);
	}
}

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(e) {
	if (e === 'left' && this.x >= 50) {
		this.x -= 100;
	}
	if (e === 'right' && this.x <= 400) {
		this.x += 100;
	}
	if (e === 'up' && this.y >= 50) {
		this.y -= 83;
	}
	if (e === 'down' && this.y <= 400) {
		this.y += 83;
	}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
const enemyY = [60, 145, 230, 310];
for (en = 0; en < enemyY.length; en++) {
	let enemySpeed = (this.rate * Math.random * 100);
	allEnemies.push(new Enemy(-100, enemyY[en], 150));
}
const player = new Player(203, 403);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});