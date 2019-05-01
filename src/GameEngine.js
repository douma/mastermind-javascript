var underscore = require("underscore");

class GameEngine 
{
	generateCombination()
	{
		return underscore.sample("AAAABBBBCCCCDDDDEEEEFFFF".split(""), 4).join("");
	}

	match(code, input)
	{
		return code == input;
	}

	endReached(num)
	{
		return num == 8;
	}

	hint(code, input)
	{
		const codeParts = code.split("");
		const inputParts = input.split("");

		let returnCode = "";
		for(let x = 0; x<inputParts.length;x++){
			if(inputParts[x] == codeParts[x]) {
				returnCode += "+";
			} else if(underscore.contains(codeParts,inputParts[x])) {
				returnCode += "-";
			} else {
				returnCode += " ";
			}
		}
		return returnCode;
	}
}

module.exports = GameEngine;