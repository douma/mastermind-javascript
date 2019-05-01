class InputSpy 
{
    constructor(answers)
    {
        this.pointer = -1;
        this.answers = answers;
    }

    ask()
    {
        this.pointer++;
        return this.answers[this.pointer];
    }  
}

module.exports = InputSpy;