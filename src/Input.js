var readline = require('readline-sync');

class Input
{
	ask()
	{
		return readlineSync.question('Please try?');
	}
}

module.exports = Input;