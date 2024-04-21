// create tuple 
let ourTuple:  [number, boolean, string] = [5, false, 'Coding was here']

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
ourTuple.push(100);
console.log(ourTuple);