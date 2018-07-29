frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


# Udacity GwG FEND Classic Arcade Game Clone

This is a project completed while achieving a Udacity Nanodegree in Front End Web 
Design. It is a Frogger-like arcade game, where the player must cross several 
lanes of enemies without being touched by any of them. Enemies change speeds 
randomly. When the user reaches the top of the screen, they win!

## Getting Started

These instructions will get you a copy of the project up and running on your 
local machine for development and testing purposes. See deployment for notes on 
how to deploy the project on a live system.

### Prerequisites

You need a local folder for the project, into which you will copy index.html.
You will also need the following subfolders:
* js (for javascript files)
* css (for css files)
* images (for image files)

### Installing

In the main folder the only individual file will be index.html

In the js file, you will need to place the following files:
* app.js
* engine.js
* resources.js

In the css file, you will need to place the following file:
* style.css

In the images file, you will need to place the follwing image files:
* char-boy.png
* char-cat-girl.png
* char-horn-girl.png
* char-pink-girl.png
* char-princess-girl.png
* enemy-bug.png
* grass-block.
* stone-block.png
* water-block.png

Once these files and folders are properly set up, simply open index.html in a 
browser of your choice to initiate the game.

## Running the game

Once the game is running, you should see the enemy bugs marching across the screen.
Your character can be moved by using the arrow keys on your keyboard - up, down, 
left, and right will move your character in the selected direction. Your character 
will be unable to move off the play board, and will return to its starting position 
if you win the game by reaching the water at the top of the board, or if you are 
impacted by an enemy bug at any point while attempting to reach the water.

## Built With

* JavaScript ES5 (object-oriented)
* HTML
* CSS

## Contributing

This was built as a project towards completion of the Udacity Front End Development 
Nanodegree program, and as such, I will most likely NOT accept any pull requests.

## Acknowledgments

* Ben Cunnnigham (https://www.youtube.com/watch?v=7PHhRrjgTDA)
I was, initially, completely overwhelmed by this project and I did not know where 
to start at all. Ben's video, above, allowed me to get a version working, from 
which I could "reverse engineer" and play around with working code to figure out
how it worked, and where changes could be made, and what the effects of those 
changes were. From there, I was able to "reboot" from where Udacity starts us out, 
and was able to create my own version with what I learned from Ben's code.

Though I may never meet you, Ben, you have my thanks for an ENORMOUS assist in 
completing this project.

* W3 Schools (https://www.w3schools.com/jsref/)
As always, I could not have completed this project without the amazing resource 
that is W3 Schools. Reminding me how to get setTimeout to work is only the 
beginning of how this site makes my programming journey just a little bit easier...