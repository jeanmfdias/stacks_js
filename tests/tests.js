const Stack = require('../src/stacks');

console.log('--- test push three times');
Stack.push("hello");
Stack.push("world");
Stack.push("!!!")

console.log('--- test lenght');
console.log(Stack.lenght());

console.log('--- test peek');
console.log(Stack.peek());

console.log('--- test isempty');
console.log(Stack.isEmpty());

console.log('--- test pop');
console.log(Stack.pop());

console.log('--- test lenght after pop');
console.log(Stack.lenght());

console.log('--- test print');
Stack.print();

console.log('--- test reverse');
Stack.reverse();

console.log('--- test search element');
console.log(Stack.search(1));

console.log('--- test search element invalid');
console.log(Stack.search(100));