/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */

// Create a Map
let technologies = new Map();
technologies.set(1,'HTML');
technologies.set(2,'CSS');
technologies.set(3,'JavaScript');
technologies.set(4,'JQuery');
technologies.set(5,'AJAX');
console.log(technologies);

// Get function
console.log(`value at the Key : ${technologies.get(5)}`);

// has key
console.log(`has the key 4 : ${technologies.has(4)}`);

// delete
technologies.delete(2);
console.log(technologies);

// get all the keys
for(let key of technologies.keys()){
    console.log(key);
}

// get all the values
for(let value of technologies.values()){
    console.log(value);
}

// Get all the entries
for(let entry of technologies.entries()){
    console.log(`${entry[0]} => ${entry[1]}`);
}

// clear the map
technologies.clear();
console.log(technologies);

/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

let techSet = new Set();
techSet.add('html');
techSet.add('html');
techSet.add('css');
techSet.add('js');
techSet.add('css');
techSet.add('Jquery');
console.log(techSet);

// delete
techSet.delete('css');
console.log(techSet);

// has
let hasCSS = techSet.has('css');
console.log(hasCSS);

// size
console.log(`Size : ${techSet.size}`);

// clear
techSet.clear();
console.log(techSet);