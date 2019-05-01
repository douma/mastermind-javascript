var readline = require('readline-sync');

class Input
{
	ask()
	{
		return readline.question('Please try? ');
	}
}

module.exports = Input;