// Task 1
let person = {
    name: 'Sasha',
    age: 18
}

function infoPerson() {
    console.log(`Name: ${this.name} age: ${this.age}`);
}

function bind(context, fn, ...rest) {
    return function(...args) {
        fn.apply(context, rest.concat(args));
    }    
}


bind(person, infoPerson)();












// Task 2





function map(arr, callback, thisArg) {
    let i,
        length = arr.length,
        results = [];
  
    for (i = 0; i < length; i++) {
      results.push(callback.call(thisArg, arr[i], i, arr));
    }
  
    return results;
}



let listRandoms = map([10, 20, 30], function(elem) {
    return Math.random() * elem;
});
console.log(listRandoms);



