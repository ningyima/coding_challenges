Array.prototype.equals = function(array) {
  if (this.length != array.length) {
    return false;
  }
 
  for (var i = 0, l = this.length; i < l; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals(array[i])) {
        return false;
      }
    } else if (this[i] != array[i]) {
      return false;
    }
  }
 
  return true;
}

var Mocha = require('mocha');
var assert = require('assert');
var mocha = new Mocha();
 
mocha.suite.emit('pre-require', this, 'solution', mocha);
 
function areDeepEqual(array1, array2) {
  return true;
}
 
describe('#areDeepEqual', function() {
  it('should return false if arrays are not the same length', function() {
    assert(!areDeepEqual([1,2], [1]));
  });
 
  it('should return false if not given arrays', function() {
    assert(!areDeepEqual({}, {}));
    assert(!areDeepEqual(4, 4));
    assert(!areDeepEqual([], 4));
    assert(!areDeepEqual(4, []));
  });
 
  it('should return false if given items in a different order', function() {
    assert(!areDeepEqual([2, 4], [4, 2]));
  });
 
  it('should return false if given items that cast to the same thing', function() {
    assert(!areDeepEqual([2], ["2"]));
  });
 
  it('should return true if given equal arrays of primitives', function() {
    assert(areDeepEqual([2, 4, "foo", 0.52], [2, 4, "foo", 0.52]));
  });
 
  it('should not match null and undefined', function() {
    assert(!areDeepEqual([null], [undefined]));
  });
 
  it('should return false if nested arrays are not equal', function() {
    assert(!areDeepEqual([[2, 3, 5]], [[2, 3, 4]]))
  });
 
  it('should return true if nested arrays are equal', function() {
    assert(areDeepEqual([[2, 3, 4]], [[2, 3, 4]]))
  });
 
  it('should return false if given functions that are not the same', function() {
    function func1() {}
    function func2() {}
    assert(!areDeepEqual([func1], [func2]));
  });
 
  it('should return true if given functions that are the same', function() {
    function func1() {}
    assert(areDeepEqual([func1], [func1]));
  });
 
  it('should return false if not given the same object', function() {
    var obj1 = {};
    var obj2 = {};
    assert(!areDeepEqual([obj1], [obj2]));
  });
 
  it('should return true if given the same object', function() {
    var obj1 = {};
    assert(areDeepEqual([obj1], [obj1]));
  });
   
  it('should return false when comparing functions and objects', function() {
    function func1() {}
    var obj1 = {};
    assert(!areDeepEqual([func1], [obj1]));
  });
  
  it('should continue checking future elements after equal arrays', function() {
    assert(!areDeepEqual([[2], 3], [[2], 4]))
  });
 
  it('should return false when given objects with a length', function() {
    var obj1 = { length: 3 };
    var obj2 = { length: 3 };
    assert(!areDeepEqual(obj1, obj2));
  });
});
 
mocha.run(function() {});