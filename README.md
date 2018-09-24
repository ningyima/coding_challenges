# coding_challenges

1. == vs. ===

2. What does 1+2+"3"+4+5 evaluate to?
Answer: “3345"

3. Write a function that makes multiple AJAX calls until it reaches success,
$.ajax({
  url: 'http://www.xxxxxxx',
  data: {name: 'xxx'},
  dataType: 'jsonp',
  success: function(data) {
    // do stuff

    // call next ajax function
    $.ajax({xxx});
  }
});

4. shows/hides content in DOM, etc.

5. Is javascript OOP language ? Implement OOP principles like inheritance, polymorphism in javascript.

6. What is the difference between function and a method in javascript?

7. What are global variables and how many ways you can declare a global variables? Are they good or bad? Explain.

8. Scoping and Hoisting concepts.

9. a = b = c;
  Can be written as
  a = (b = c);
  Is equivalent to
  b = c;
  a = b;

10. Write a mul function which will produce the following outputs when invoked
  console.log(mul(2)(3)(4));
  console.log(mul(4)(3)(4));

  function mul(x) {
    return function(y) {
      return function(z) {
        return x * y * z;
      }
    }
  }

11. How can you empty an array in JavaScript?
  var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
  arrayList.length = 0;

  The code will clear the existing array by setting its length to 0. This way of emptying the array 
  will also updates all the reference variables that point to the original array.

12. How can you check if an object is an array or not?
  var arrayList = [1, 2, 3];
  Array.isArray(arrayList);

13. What will be the output of the following code?
  var output = (function(x) {
    delete x;
    return x;
  }) (0);
  console.log(output); // 0

  var x = 1;
  var output = (function() {
    delete x;
    return x;
  }) ();
  console.log(output); // 1

  var x = { foo: 1 };
  var output = (function() {
    delete x.foo;
    return x.foo;
  }) ();
  console.log(output); // undefined



  The output will be 0. The delete operator is used to delete properties from an object.
  Here x is not an object but a local variable. delete operator don't affect local variables.

14. What will be the output of the following code?
  var Employee = {
    company: 'xyz'
  }

  var emp1 = Object.create(Employee);
  delete emp1.company;
  console.log(emp1.company); //xyz

  emp1 object doesn't have company as its own property
  console.log(emp1.hasOwnProperty('company')); // false

  delete emp1.__proto__.company

15. What will be the output of the following code?
  var trees = ['xyz', 'xxxx', 'test', 'ryan', 'apple'];
  delete trees[3];
  console.log(trees.length); // 5

16. What will be the output of the code below?
  var bar = true;
  console.log(bar + 0); // 1
  console.log(bar + 'xyz'); // truexyz
  console.log(bar + true);  // 2
  console.log(bar + false); // 1

General guildline for addition operators:
  Number + Number -> Addition
  Boolean + Number -> Addition
  Boolean + Boolean -> Addition
  Number + String -> Concatenation
  String + Boolean -> Concatenation
  String + String -> Concatenation

17. What will be the output of the code below?
  var z = 1, y = z = typeof y;
  console.log(y); // undefined

  The associativity of the assignment operator is Right to Left

18. What will be the output of the code below?
  var foo = function bar() { return 12; };
  typeof bar(); // Reference Error

  function bar() {
    return 12;
  };
  typeof bar();

19. What's the difference between the function declarations below?
  var foo = function() {}

  function bar() {}

  Run-Time function declaration 
  <script>
    foo(); // Calling foo function here will give an Error
    var foo = function(){ 
      console.log("Hi I am inside Foo");
    }; 
  </script>

  <script>
    Parse-Time function declaration 
    bar(); // Calling foo function will not give an Error
    function bar(){ 
      console.log("Hi I am inside Foo");
    }; 
</script>

20. How to fix the following code?
  const obj = {
    a: 1,
    b: 2,
    getA() {
      console.log(this.a);
    },
    getB() {
      console.log(this.b);
    }
  };

  obj.getA().getB();

  const obj = {
    a: 1,
    b: 2,
    getA() {
      console.log(this.a);
      return this;
    },
    getB() {
      console.log(this.b);
    }
  };

  obj.getA().getB();

21. What's the output?
  var myObject = {
    hi: "test",
    func: function() {
        var self = this;
        console.log("outer func:  this.hi = " + this.hi);
        console.log("outer func:  self.hi = " + self.hi);
        (function() {
            console.log("inner func:  this.hi = " + this.hi);
            console.log("inner func:  self.hi = " + self.hi);
        }());
    }
  };
  myObject.func();

22. svg vs. convas?

23. localStorage vs. sessionStorage

24. [1, 2].print(); //1,2
  Array.prototype.print = () => {

  }

25. How to modify the following code?
  const a = function(x) {
    this.x = x;
  };

  const b = function(x, y) {
    this.y = y;
  }

  const newB = new b('x', 'y');
  newB.getX();
  newB.getY();

//========================================
  const a = function(x) {
    this.x = x;
  }

  a.prototype = {
    getX() {
      return this.x;
    }
  }

const b = function(x, y) {
    this.y = y;
    a.call(this, x);

    getY() {
      return this.y;
    }
  }

26. How to make a copy of an object?
  const obj = {
    a: {
      b: {
        c: 1
      }
    }
  };

  const clone = JSON.parse(JSON.stringify(obj));
  clone.a.b.c = 2;
  console.log(obj.a.b.c);



