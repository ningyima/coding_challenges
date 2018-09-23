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


