class Stacks {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    // add an element to the stack
    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }

    // delete an element from the stack
    pop() {
        if (this.isEmpty() === false) {
            this.top = this.top - 1;
            return this.data.pop();
        }
    }

    // get the top element of the stack
    peek() {
        return this.data[this.top - 1];
    }

    // return the length of the stack
    lenght() {
        return this.top;
    }

    // search for the element in the stack
    search() {

    }

    // check if the stack is empty
    isEmpty() {
        return this.top === 0;
    }

    // print the elements of the stack
    print() {

    }
}

module.exports = new Stacks()