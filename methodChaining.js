var obj = function() {
  this.i = 0;

  this.add = function(i) {
    this.i += i;
    return this;
  }

  this.substract = function(i) {
    this.i -= i;
    return this;
  }

  this.print = function() {
    console.log(this.i);
  }
}

var x = new obj();
x.add(3).substract(2).print();