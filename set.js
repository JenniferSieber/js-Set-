console.log('Creating a Set')
const mySet = new Set([1, 2, 3, 1, 4, 5]);
// The set now contains unique values: 1, 2, 3, 4, 5
console.log('const mySet = Set([1, 2, 3, 1, 4, 5])',mySet)
console.log('__________________________________________')

console.log('Properties examples:')
console.log('Property: Set.size')
console.log('Set.size Arr of above created set', mySet)
console.log(mySet.size); // Output: 5
console.log('__________________________________________')
console.log('Methods examples:')
console.log('Method: Set.add()')
const mySetAdd = new Set();
console.log('Set.add() Array', mySetAdd)
mySetAdd.add(1);
console.log('Set.add(1)', mySetAdd)
mySetAdd.add(20);
console.log('Set.add(20)', mySetAdd)
console.log('______')
console.log('Methods: Set.delete()')
const mySetDelete = new Set([1, 2, 3, 5]);
console.log('Set.delete() Array' , mySetDelete)
mySetDelete.delete(2); // Removes 2 from the set
console.log('Set.delete(2)', mySetDelete)
mySetDelete.delete(1); // Removes 2 from the set
console.log('Set.delete(1)', mySetDelete)
console.log('______')

console.log('Methods: Set.has()')
const mySetHas = new Set([8, 2, 3, 22, 33,44]);
console.log('Set.has() Array', mySetHas)
console.log(mySet.has(2)); // Output: true
console.log('Set.has(2)', mySetHas)
console.log('______')
console.log('Methods: Set.clear()')
const mySetClear = mySetHas
console.log('Set.clear() Array', mySetClear)
mySetClear.clear()
console.log('after Set.clear() Array', mySetClear)
console.log('______')

console.log('Set.forEach(cbf,thisArg):')
const mySetLoop = new Set([9, 99, 999]);
console.log('The Array of the Set we will loop with forEach:',mySetLoop)
mySetLoop.forEach(value => {
  console.log('loop each value in the Set:', value);
});
console.log('______')

console.log('...and more: Set.values(), Set.keys() Set.entries()')
console.log('Set.values():')
const mySetMore = new Set([1, 2, 3]);
console.log('Array of set for: Set.values()', mySetMore)
const valuesIterator = mySet.values();
console.log('valuesIterator: mySet.values()',valuesIterator)
for (const value of valuesIterator) {
  console.log('the value', value);
}

console.log('___')
console.log('Set.keys():')
console.log("In this example, Set.keys() returns an iterator over the keys of the set. Since sets don't have keys (they only have values), the iterator returns the same values as Set.values(). ")
const mySetKeys = new Set([300, 400, 500])
console.log('array:', mySetKeys)
const keysIterator = mySetKeys.keys()
console.log('keysIterator = mySetKeys.keys()', keysIterator)
for (const key of keysIterator) {
  console.log('the key', key)
}


console.log('___')
console.log('Set.entries():')
console.log('In this example, Set.entries() returns an iterator over the entries (which are [value, value] pairs) of the set. Since sets only contain values, the entries will be pairs with the same value for both the key and the value. ')
const mySetEntries = new Set([33, 44, 55]);
console.log('Set.entries() Array:', mySetEntries)
// Using Set.entries()
const entriesIterator = mySetEntries.entries();
console.log('entriesIterator = mySetEntries.entries()', entriesIterator)
console.log('for of loop logging the entry')
for (const entry of entriesIterator) {
  console.log('the entry', entry);
}
