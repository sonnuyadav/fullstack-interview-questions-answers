//1
setTimeout(() => console.log(1), 0); // run by task queue

console.log(2); // callstack

new Promise(res => {
  console.log(3)
  res();
}).then(() => console.log(4)); // micro task queue

console.log(5); //callstack

//Output 2 3 5 4 1

//#2

setTimeout(() => {
    console.log('timeout 1');
    const promise = new Promise((res) => res());
    promise.then(() => console.log('promise 1'));
  });
  
  setTimeout(() => console.log('timeout 2'));
  
  const promise = new Promise((res) => res());
  
  promise.then(() => console.log('promise 2'));

  //promise
  Promise.resolve(1)
  .then(x => { throw x })
  .then(x => console.log(`then ${x}`))
  .catch(err => console.log(`error ${err}`))
  .then(() => Promise.resolve(2))
  .catch(err => console.log(`error ${err}`))
  .then(x => console.log(`then ${x}`));