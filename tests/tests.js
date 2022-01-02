const Stack = require('../src/stacks');

console.log('--- test push two times');
Stack.push("hello");
Stack.push("world");

console.log('--- test lenght');
console.log(Stack.lenght());

console.log('--- test peek');
console.log(Stack.peek());

console.log('--- test isempty')
console.log(Stack.isEmpty());

Stack.print();