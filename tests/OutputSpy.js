class OutputSpy 
{
    constructor()
    {
        this.hints = [];
    }

    write(output)
    {
        this.hints.push(output);
    }
}

module.exports = OutputSpy;