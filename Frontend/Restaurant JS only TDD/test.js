var test = require('tape');
var exercises = require('./exercises.js');
var test = require('tape-catch')


test('isString function', function(t) {
  t.test('when passed a string', function(t) {
  t.true(exercises.isString('hello'), 'should return true');
  t.end();
});

t.test('when passed an array', function(t) {
  t.false(exercises.isString([1, 2]), 'should return false');
  t.end();
});

t.test('when passed an object', function(t) {
  t.false(exercises.isString({ a: 2 }), 'should return false');
  t.end();
});

t.test('when passed a sentance', function(t) {
  t.true(exercises.isString('this is a long sentence'), 'should return true');
  t.end();
});

t.test('when passed an integer', function(t) {
  t.false(exercises.isString(2), 'should return false');
  t.end();
});

t.test('when passed an boolean', function(t) {
  t.false(exercises.isString(true), 'should return false');
  t.end();
});
});

///////////////////////////////////////////////////////

test('isArray function', function(t) {
  t.test('when passed a string', function(t) {
  t.false(exercises.isArray('hello'), 'should return false');
  t.end();
});

t.test('when passed an array', function(t) {
  t.true(exercises.isArray([1, 2]), 'should return false');
  t.end();
});

t.test('when passed an object', function(t) {
  t.false(exercises.isArray({ a: 2 }), 'should return false');
  t.end();
});

t.test('when passed a sentance', function(t) {
  t.false(exercises.isArray('this is a long sentence'), 'should return false');
  t.end();
});

t.test('when passed an integer', function(t) {
  t.false(exercises.isArray(2), 'should return false');
  t.end();
});

t.test('when passed an boolean', function(t) {
  t.false(exercises.isArray(true), 'should return false');
  t.end();
});
});

////////////////////////////////////////////////////////////

test('typeOfElement function', function(t) {
  t.test('when passed a Array', function(t) {
  t.deepEqual(exercises.typeOfElement([1,2]),"array", '');
  t.end();
});

t.test('when passed a object', function(t) {
t.deepEqual(exercises.typeOfElement({ a: 2 }),"object", '');
t.end();
});

t.test('when passed a string', function(t) {
t.deepEqual(exercises.typeOfElement("hi"),"string", '');
t.end();
});

t.test('when passed a integer', function(t) {
t.deepEqual(exercises.typeOfElement(2),"number", '');
t.end();
});

t.test('when passed a boolean', function(t) {
t.deepEqual(exercises.typeOfElement(true),"boolean", '');
t.end();
});

t.test('when passed a null', function(t) {
t.deepEqual(exercises.typeOfElement(null),"object", '');
t.end();
});

t.test('when passed a function', function(t) {
t.deepEqual(exercises.typeOfElement(()=>{}),"function", '');
t.end();
});
});

///////////////////////////////////////////////////////////

test('areSameType function', function(t) {
  t.test('when passed a numbers', function(t) {
  t.true(exercises.areSameType([1,2]), 'should retrun true');
  t.end();
});
});
//////////////////////////////////////////////////////////
test('longest function', function(t) {
  t.test('when passed two strings with repets', function(t) {
    a = 'xyaabbbccccdefww';
    b = 'xxxxyyyyabklmopq';
  t.deepEqual(exercises.longest(a, b),"abcdefklmopqwxy", 'should retrun true');
  t.end();
});

t.test('when passed two strings without repets', function(t) {
  a = 'xyabcdefw';
  b = 'xyabklmopq';
t.deepEqual(exercises.longest(a, b),"abcdefklmopqwxy", 'should retrun true');
t.end();
});
//error handlere here is better
  t.test('when passed a numbers', function(t) {
    a = 1;
    b = 2;
  if (t.notDeepEqual(exercises.longest(a, b),"abcdefklmopqwxy","Wrong Value")) {
    t.pass(msg)
  }
  t.end();
});
});

////////////////////////////////////////////////////////

test('convert function', function(t) {
  t.test('when passed a Number', function(t) {
  t.deepEqual(exercises.convert(12345),[5,4,3,2,1], 'should retrun true');
  t.end();
});
});

////////////////////////////////////////////////////////////
test('countRepetitions function', function(t) {
  t.test('multible repetitions', function(t) {
  var elements = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];
  var results = exercises.countRepetitions(elements);
  t.deepEqual(exercises.countRepetitions(elements),{kerouac: 2, fante: 3, buk: 2, hemingway: 1, hornby: 1}, 'should retrun true');
  t.end();
});
});

////////////////////////////////////////////////////////////////////////////
test('isCaught function', function(t) {
  t.test('ditance 5 right', function(t) {
    var value = "C.....m";
  t.false(exercises.isCaught(value), 'should retrun false');
  t.end();
});

  t.test('ditance 4 right', function(t) {
    var value = "C....m";
  t.false(exercises.isCaught(value), 'should retrun false');
  t.end();
});

t.test('ditance 2 right', function(t) {
  var value = 'C..m';
t.true(exercises.isCaught(value), 'should return true');
t.end();
});

t.test('ditance 2 left', function(t) {
  var value = 'm..C..';
t.true(exercises.isCaught(value), 'should return true');
t.end();
});

t.test('2 mouses 1 in range one not', function(t) {
  var value = 'm...C..m';
t.true(exercises.isCaught(value), 'should return true');
t.end();
});

t.test('2 mouses 2in range', function(t) {
  var value = 'm..C..m';
t.true(exercises.isCaught(value), 'should return true');
t.end();
});

t.test('ditance 2 right 2 left ', function(t) {
  var value = "..C..m";
t.true(exercises.isCaught(value), 'should retrun true');
t.end();
});

t.test('ditance 4 right 3 left ', function(t) {
  var value = "...C....m";
t.false(exercises.isCaught(value), 'should retrun true');
t.end();
});

t.test('no mouse', function(t) {
  var value = "...C....";
t.false(exercises.isCaught(value), 'should retrun true');
t.end();
});

t.test('no cat', function(t) {
  var value = "...m....";
t.false(exercises.isCaught(value), 'should retrun true');
t.end();
});

});
///////////////////////////////////////////////////////////////////////
test('splitTheBill function', function(t) {
  t.test('3 memebers', function(t) {
    var group = {
      Amy: 20,
        Bill: 15,
       Chris: 10
    }
  t.deepEqual(exercises.splitTheBill(group),{ Amy: -5, Bill: 0, Chris: 5 }, 'should retrun false');
  t.end();
});


t.test('all 0', function(t) {
  var group = {
    Amy: 0,
      Bill: 0,
     Chris: 0
  }
t.deepEqual(exercises.splitTheBill(group),{ Amy: 0, Bill: 0, Chris: 0 }, 'should retrun false');
t.end();
});

t.test('all negative', function(t) {
  var group = {
    Amy: -5,
      Bill:  -5,
     Chris:  -5
  }
t.deepEqual(exercises.splitTheBill(group),{ Amy:  0, Bill:  0, Chris:  0 }, 'should retrun false');
t.end();
});

t.test('2 0 1 full', function(t) {
  var group = {
    Amy: 0,
      Bill:  0,
     Chris:  120
  }
t.deepEqual(exercises.splitTheBill(group),{ Amy:  40, Bill:  40, Chris:  -80 }, 'should retrun false');
t.end();
});

t.test('all equal', function(t) {
  var group = {
    Amy: 120,
      Bill:  120,
     Chris:  120
  }
t.deepEqual(exercises.splitTheBill(group),{ Amy: 0, Bill:  0, Chris:  0 }, 'should retrun false');
t.end();
});
});

/////////////////////////////////////////////////////////////////////////////
test('exp function', function(t) {
  t.test('check some true values', function(t) {
  t.deepEqual(exercises.exp(5,3),125);
  t.deepEqual(exercises.exp(2,4),16);
  t.deepEqual(exercises.exp(5,1),5);
  t.deepEqual(exercises.exp(6,0),1);
  t.deepEqual(exercises.exp(5,2),25);
  t.end();
});

t.test('check with negativ base', function(t) {
t.deepEqual(exercises.exp(-5,3),-125);
t.deepEqual(exercises.exp(-2,4),16);
t.deepEqual(exercises.exp(-5,1),-5);
t.end();
});

t.test('check with negativ exp', function(t) {
t.throws(function() { exercises.exp(5,-3); });
t.end();
});
});
///////////////////////////////////////////////////////////////
test('factorial function', function(t) {
  t.test('check some true values', function(t) {
  t.deepEqual(exercises.factorial(5),120);
  t.deepEqual(exercises.factorial(4),24);
  t.deepEqual(exercises.factorial(3),6);
  t.deepEqual(exercises.factorial(2),2);
  t.deepEqual(exercises.factorial(1),1);
  t.end();
});

t.test('exception with 0', function(t) {
t.deepEqual(exercises.factorial(0),1);
t.end();
});

t.test('negative falue', function(t) {
t.throws(function() { exercises.factorial(-2); });
t.end();
});

t.test('throw exceptions', function(t) {
t.throws(function() { exercises.factorial(0.9); });
t.throws(function() { exercises.factorial("hi"); });
t.throws(function() { exercises.factorial([1,0]); });
t.throws(function() { exercises.factorial({lala:1}); });
t.end();

});
});
////////////////////////////////////////////////////////////////
test('fibs function', function(t) {
  t.test('check some true values', function(t) {
  t.deepEqual(exercises.fibs(1),[0]);
  t.deepEqual(exercises.fibs(2),[0,1]);
  t.deepEqual(exercises.fibs(3),[0,1,1]);
  t.deepEqual(exercises.fibs(5),[0,1,1,2,3]);
  t.end();
});

t.test('wrong input exceptions', function(t) {
t.throws(function() { exercises.fibs(0.9); });
t.throws(function() { exercises.fibs("hi"); });
t.throws(function() { exercises.fibs([1,0]); });
t.throws(function() { exercises.fibs({lala:1}); });
t.end();
});
});

////////////////////////////////////////////////////////////////
test('zeroSum function', function(t) {
  t.test('check some true values', function(t) {
  t.deepEqual(exercises.zeroSum([1, 5, 0, -5, 3, -1]),[[0, 5], [1, 3]]);
  t.deepEqual(exercises.zeroSum([1, -1]),[[0, 1]]);
  t.deepEqual(exercises.zeroSum([0, 4, 3, 5]),[]);
  t.end();
});
/*
t.test('wrong input exceptions', function(t) {
t.throws(function() { exercises.zeroSum(0.9); });
t.throws(function() { exercises.zeroSum("hi"); });
t.throws(function() { exercises.zeroSum({lala:1}); });
t.end();
});*/
});
