// implement a simple promise by ES6
let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
  // cleaning the room

  let isClean = true;

  if(isClean) {
    resolve('Clean');
  } else {
    reject('not Clean');
  }
});

promiseToCleanTheRoom.then(function(fromResolve) {
  console.log('this room is' + fromResolve);
}).catch(function(fromReject) {
  console.log('this rom is' + fromReject);
});

// three promises
let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned The Room');
  });
}

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' remove Gabage');
  });
}

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + 'won Icecream');
  })
}

cleanRoom().then(function(result) {
  return removeGarbage(result);
}).then(function(result) {
  return winIcecream(result);
}).then(function(result) {
  console.log('finished ' + result);
});

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
  console.log('all finished');
});

Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
  console.log('one finished');
})