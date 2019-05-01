class MasterMind
{
    constructor(gameEngine)
    {
        if(!gameEngine){
            throw "Game engine not defined";
        }
        this.gameEngine = gameEngine;
    }

    run(input, output)
    {
        var combination = this.gameEngine.generateCombination();

        var tries = 0;
        while(!this.gameEngine.endReached(tries))
        {
            var answer = input.ask();
            output.write(this.gameEngine.hint(combination, answer));
            tries++;

            if(this.gameEngine.match(answer, combination)){
                break;
            }
        }
    }
}

module.exports = MasterMind;