#Pokemon Drinking Game
This Pokemon Drinking Game is built using [jQuery](http://jquery.com) and [impress.js](https://github.com/bartaz/impress.js/).


##The Board

![Pokemon Drinking Game Board] (http://bytebucket.org/smleimberg/pokemon-drinking-game/raw/9f73f2b161b5e3b26e04f8c624999debe81c9eba/wall-old.png "Pokemon Drinking Game Board")

##Game features:

- track of player positions
- Stops players on gold squares no matter their roll.
- Changes a player's token to yellow when landing on tile 4 (You caught a Pikachu!).
- up to 9 players

##How to play:

1. Open `index.html` in a modern browser that supports CSS3 transforms and transitions.
2. Enter up to 9 player names and select the one of three starter pokemon tokens.
3. Read the instructions in the center of the board.
4. Press the `s` key or click player 1's name in the control bar to view player 1's token.
5. Press the `e` key or press the "Roll" button to roll a D6. (you can also enter values manually including negative values for certain events or if using real dice).
6. Press the `w` key to move the current player the "rolled" number of spaces.
7. Follow the instructions on the tile.
8. Press the `d` key or the `>` button in the control bar to switch to the next character.
9. Repeat steps 5 - 8 until everyone is drunk or someone wins.

##Keyboard shortcuts:

	e = roll a D6
	w = move spaces rolled
	a = go to previous player
	d = go to next player
	s = go to currently selected player
	q = game overview

##Notes:

The game does not force players to round robin turns since certain tiles have certain "effects".
