var OutputSpy = require('../../tests/OutputSpy');
var MasterMind = require('../../src/MasterMind');
var GameEngineStub = require('../../tests/GameEngineStub');
var OutputSpy = require('../../tests/OutputSpy');
var InputSpy = require('../../tests/InputSpy');
const { Given, When, Then } = require('cucumber')

var combination;
var input;

Given('The combination is {string}', function (string) {
  combination = string;
});

Given('the user enters {string}', function (string) {
 input = string;
});

When('the code is entered', function () {
 //...nothing
});

Then('the hint is {string}', function (string) {
    var outputSpy = new OutputSpy();
    var masterMind = new MasterMind(new GameEngineStub(1,combination));
    var inputSpy = new InputSpy([
      input
    ]);
    var outputSpy = new OutputSpy();
    masterMind.run(inputSpy,outputSpy);

    if(string !== outputSpy.hints[0])
    {
        throw string + " does not equal " + outputSpy.hints[0];
    }
});
