var GameEngine = require('../src/GameEngine');
var MasterMind = require('../src/MasterMind');
var Output = require('../src/Output');
var Input = require('../src/Input');

var masterMind = new MasterMind(new GameEngine());
masterMind.run(new Input, new Output);
