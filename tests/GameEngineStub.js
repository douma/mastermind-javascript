var GameEngine = require('../src/GameEngine');

class GameEngineStub extends GameEngine 
{
    constructor(end, combination)
    {
        super();
        this.end = end;
        this.combination = combination;
    }

    endReached(num)
    {
        return num == this.end;
    }

    generateCombination()
    {
        return this.combination;
    }
}

module.exports = GameEngineStub;