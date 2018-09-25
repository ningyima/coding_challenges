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

27. What will be the output?
  const obj = {
    x: 1,
    getX() {
      const inner = function() {
        console.log(this.x);
      }
      inner();
    }
  };

  obj.getX(); // undefined;

28. Caculate the sum of integer array
  let ary = [1, 2, 5, 7];
  const sumOfArray = (ary) => {
    return ary.reduce((acc, item) => {
      return acc + item;
    });
  }

  console.log(sumOfArray(ary));
  
29. // add(1, 2);
    // add(1)(2);
  function add(num1, num2) {
    if (arguments.length === 2) {
      return num1 + num2;
    } else {
      return function(num3) {
        return num1 + num3;
      }
    }
  }

30. What is the difference between Node.js and Tomcat server?

31. What is heap / stack / queue? Are recursive functions in heap / stack / queue?

32. Is JavaScript synchronous? How about JavaScript runtime: V8 engine or Node.js

33. If you open a new tab in the browser, is it a new process or a new thread?

34. Calculate the Nth value in Fibonacci sequence, can you use multithreading to speedup this problem?

35. // const array = [1 - 100] 
    // 1 number is missing

  function findMissingNum(array) {
    let len = array.length;
    let total = n * (n + 1) / 2;

    let arrayTotal = array.reduce((acc, item) => acc + item);
    return (total - arrayTotal);
  }

36. Difference between
  // function decoration
  function x() {

  }

  // function expression
  let x = function() {

  }
  // IIFE immediately invoked function expression
  (function() {

  })()
    
37. get the changes
  const til = {
    penny: 12,
    nickel: 10,
    dime: 2,
    quarter: 12,
    dollar: 30
  };

  // 20.47

  function money(total) {
    const value = {
      penny: 1,
      nickel: 5,
      dime: 10,
      quarter: 25,
      dollar: 100
    }

    let changeTotal = total * 100; // 2047
    
  }

38. reverse the string
  return str.split('').reverse().join('');

39. Find min and max of the array

40. Find the length of an integer

41. What's wrong with the following code, and how do you fix it?
  const profile = {
    name: 'Miller',
    getName: () => {
      console.log(this.name);
    }
  };

  profile.getName();

42. Count the appearing times of the max value of an array with integers
  let x = [1, 2, 2, 4, 2, 4];
  let mxN = Math.max(...x);

43. What's the output of the following code?
  const arr = [5, 120, 15, 21];
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(`Index: ${i}, element: ${arr[i]}`);
    }, arr[i]);
  }
  
  0 5
  2 15
  3 21
  1 120

44. Convert the time to 24 hours format
  let time = '09:03AM';


45. Method chaining
  let x = {
    a() {
      return this;
    },
    b() {
      return this;
    }
  };

  x.a().b().a().a();

46. Number to Hex
  let x = 2;
  x.toString(16);

47. Write a program that prints the numbers from 1 to 100
    But for multiples of three print "Fizz" instead of the number and for
    the multiples of five print "Buzz"
    For numbers which are multiples of both three and five print "FizzBuzz"

48. Draw three squares of width 50px side by side;
    each square should have a circle in the center with radius of 10px
    distance between three square would be 10px    

    <div class='sq'>
      <span></span>
    </div>
    <div class='sq'>
      <span></span>
    </div>
    <div class='sq'>
      <span></span>
    </div>

    .sq {
      width: 50px;
      height: 50px;
      border: thin dashed red;
      float: left;
      text-align: center;
      position: relative;
      box-sizing: border-box;
      margin-left: 10px;
    }

    .sq:last-child {
      margin-right: 0;
    }

    .sq span {
      display: inline-block;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: yellow;
      vertical-align: middle;
    }

49. Find the greatest common diviser of two numbers
  // example: 4, 6 == 2
  // example: 2, 3 == 1

  var getCommonDiviser = function(x, y) {
    
  }