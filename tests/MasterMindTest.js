var test = require('tape');
var GameEngine = require('../src/GameEngine');
var MasterMind = require('../src/MasterMind');
var OutputSpy = require('../tests/OutputSpy');
var InputSpy = require('../tests/InputSpy');
var GameEngineStub = require('../tests/GameEngineStub');

test('game loop; should ask input and show hints', function (t) {
    t.plan(3);
    var masterMind = new MasterMind(new GameEngineStub(3,'ABCD'));
    var inputSpy = new InputSpy(['DCBA','AAAA','ABCD']);
    var outputSpy = new OutputSpy();

    masterMind.run(inputSpy,outputSpy);

    t.equals('----', outputSpy.hints[0]);
    t.equals('+---', outputSpy.hints[1]);
    t.equals('++++', outputSpy.hints[2]);
});

test('game loop; should complete when correct answer is given', function (t) {
    t.plan(2);
    var masterMind = new MasterMind(new GameEngineStub(3,'ABCD'));
    var inputSpy = new InputSpy(['DCBA','ABCD']);
    var outputSpy = new OutputSpy();

    masterMind.run(inputSpy,outputSpy);

    t.equals('----', outputSpy.hints[0]);
    t.equals('++++', outputSpy.hints[1]);
});

