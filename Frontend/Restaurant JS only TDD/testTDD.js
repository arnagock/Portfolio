var test = require('tape');
var exercises = require('./TDD.js');
var test = require('tape-catch');


test('isAnagram function', function(t) {
  t.test('pass anagramm', function(t) {
  t.true(exercises.isAnagram('hello',"ollhe"), 'should return true');
  t.end();
});

t.test('dont pass anagramm', function(t) {
t.false(exercises.isAnagram('world',"ordly"), 'should return false');
t.end();
});

t.test('pass sentance ', function(t) {
  t.false(exercises.isAnagram('i live in life',"life in i live"), 'should return false');
  t.end();
});

t.test('pass invalids ', function(t) {
  t.throws(function() { exercises.isAnagram(0.9); });
  t.throws(function() { exercises.isAnagram(0.9,0.2); });
  t.throws(function() { exercises.isAnagram("hi",0.2); });
  t.throws(function() { exercises.isAnagram({N:1},"hi") });
  t.throws(function() { exercises.isAnagram(1,2); });
  t.end();
});

});

test('boxVolume function', function(t) {
  t.test('pass valids', function(t) {
    t.deepEqual(exercises.boxVolume(1,1,1),0.001, 'should return true');
    t.deepEqual(exercises.boxVolume(10,10,10),1, 'should return true');
    t.deepEqual(exercises.boxVolume(5,5,5.1),0.1275, 'should return true');
    t.end();
  });


  t.test('pass invalids ', function(t) {
    t.throws(function() { exercises.boxVolume("0.9","la","foo"); });
    t.throws(function() { exercises.boxVolume(-1,-1,-1); });
      t.throws(function() { exercises.boxVolume(-1,2,2); });
    t.throws(function() { exercises.boxVolume(0.9,0.2,""); });
    t.throws(function() { exercises.boxVolume("hi",0.2,""); });
    t.throws(function() { exercises.boxVolume({N:1},"hi","") });
    t.throws(function() { exercises.boxVolume(1,2,""); });
    t.end();
  });

});
