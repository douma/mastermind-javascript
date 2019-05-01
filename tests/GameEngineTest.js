var test = require('tape');
var GameEngine = require('../src/GameEngine');

test('should generate combination', function (t) {
    t.plan(1);
    var gameEngine = new GameEngine();
   	t.equal(4, gameEngine.generateCombination().length);
});

test('should generate different combination', function (t) {
    t.plan(1);

    var gameEngine = new GameEngine();
    var combination = gameEngine.generateCombination();
    var tries = 0;
    while(gameEngine.generateCombination() == combination){
    	tries++;
    	if(tries == 100){
    		throw "Tried 100 times";
    	}
    }
   	t.equal(4, gameEngine.generateCombination().length);
});

test('should give hint', function (t) {
    t.plan(4);
    var gameEngine = new GameEngine();
   	t.equal("+-+-", gameEngine.hint("ABCD","ACCC"));
   	t.equal("++++", gameEngine.hint("ABCD","ABCD"));
   	t.equal("----", gameEngine.hint("ABCD","DCBA"));
   	t.equal("+   ", gameEngine.hint("ABBB","ACCD"));
});

test('end reached on 8', function (t) {
    t.plan(2);
    var gameEngine = new GameEngine();
   	t.equal(false, gameEngine.endReached(7));
   	t.equal(true, gameEngine.endReached(8));
});

test('should return if match', function (t) {
    t.plan(4);
    var gameEngine = new GameEngine();
   	t.equal(false, gameEngine.match("ABCD","ACCC"));
   	t.equal(true, gameEngine.match("ABCD","ABCD"));
   	t.equal(false, gameEngine.match("ABCD","DCBA"));
   	t.equal(false, gameEngine.match("ABBB","ACCD"));
});

