const Stack = require('../src/stacks');

const stackLifo = new Stack();
const stackFifo = new Stack(Stack.fifo);

console.log('--- test get type');
console.log(stackLifo.getType());

console.log('--- test push three times');
stackLifo.push("hello");
stackLifo.push("world");
stackLifo.push("!!!");

console.log('--- test lenght');
console.log(stackLifo.lenght());

console.log('--- test peek');
console.log(stackLifo.peek());

console.log('--- test isempty');
console.log(stackLifo.isEmpty());

console.log('--- test pop');
console.log(stackLifo.pop());

console.log('--- test lenght after pop');
console.log(stackLifo.lenght());

console.log('--- test print');
stackLifo.print();

console.log('--- test reverse');
stackLifo.reverse();

console.log('--- test search element');
console.log(stackLifo.search(1));

console.log('--- test search element invalid');
console.log(stackLifo.search(100));

console.log('--- test get type');
console.log(stackFifo.getType());

console.log('--- test push three times');
stackFifo.push("hello");
stackFifo.push("world");
stackFifo.push("!!!");

console.log('--- test lenght');
console.log(stackFifo.lenght());

console.log('--- test pop');
console.log(stackFifo.pop());

console.log('--- test print');
stackFifo.print();