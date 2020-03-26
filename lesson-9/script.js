// Task 1
let keys = [

    ['value', 42, true, false, false],
   
    ['value2', true, false, false, false],
   
    ['value3', 'Hello', true, true, true]
   
];
function makeObject(keys) {
    let obj = {};
    keys.forEach(function(item) {
        Object.defineProperty(obj, item[0], {
            value: item[1],
            enumerable: item[2],
            writable: item[3],
            configurable: item[4]
        })
    })
    return obj;
}
   















// Task 2

let obj1 = {
    value: 42,
    value2: true
}
   

let obj2 = {
    value: 42,
    value2: true
}

function compareObj(obj1, obj2) {
    let bool = false;
    let obj_values1 = Object.values(obj1);
    let obj_keys1 = Object.keys(obj1);
    let obj_values2 = Object.values(obj2);
    let obj_keys2 = Object.keys(obj2);
    obj_values1.forEach(function(item, i) {
        if(item === obj_values2[i]) {
            bool = true;
        } else {
            bool = false;
        }
    })
    obj_keys1.forEach(function(item, i) {
        if(item === obj_keys2[i]) {
            bool = true;
        } else {
            bool = false;
        }
    })

    return bool
}; // true

