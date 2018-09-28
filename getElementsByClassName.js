const jsdom = require('jsdom');

// document.body
// element.children --> HTMLCollection of direct children
// element.classList.contains(className)

function getElementsByClassName(className) {
  let body = document.body;
  let results = [];
  
  const getChildren = function(node) {
    if (node.classList.contains(className)) {
      results.push(node);
    }
    
    for(let i = 0; i < node.children.length; i++) {
      let child = node.children[i];
      if (child.classList.contains(className)) {
          results.push(child);
      }
    
      if (child.children.length > 0) {
        getChildren(child);
      }
    }
  }

  getChildren(body);

  return results;
}
  
// This sets up the html on the "page".
const dom = new jsdom.JSDOM(`
  <body class="foo">
    <div>
      <h1 class="foo"></h1>
      <div>
        <span class="foo"></span>
        <p class="bar"></p>
      </div>
    </div>
    <div class="bar foo">
      <span></span>
      <p class="foo"></p>
    </div>
  </body>
`);
 
this.document = dom.window.document;
 
 
function classNameHelper(elements) {
  return elements.map(({ tagName, className }) => {
    return `${tagName} (${className})`;
  })
}
  
console.log(classNameHelper(getElementsByClassName('foo')));

