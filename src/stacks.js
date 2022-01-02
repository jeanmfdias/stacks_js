const lifo = 'lifo';
const fifo = 'fifo';

class Stacks {
    // LIFO or FIFO
    constructor(type = lifo) {
        this.type = type;
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
            switch (this.type) {
                // delete by fifo method
                case fifo:
                    let newStack = [];
                    let top = this.top - 1;
                    let i = 0;
                    let valueDeleted = this.data[0];

                    while (top > 0) {
                        newStack[i] = this.data[top];
                        top--;
                        i++;
                    }
                    this.data = newStack;
                    this.top = this.top - 1;
                    return valueDeleted;
                // delete by lifo method
                case lifo:
                    this.top = this.top - 1;
                    return this.data.pop();
            }
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
    search(search) {
        if (search < this.top) {
            return this.data[search];
        }

        console.log('element not found');
        return false;;
    }

    // check if the stack is empty
    isEmpty() {
        return this.top === 0;
    }

    // print the elements of the stack
    print() {
        let top = this.top - 1;

        while (top >= 0) {
            console.log(this.data[top]);
            top--;
        }
    }

    reverse() {
        this._reverse(this.top - 1);
    }

    getType() {
        return this.type.toUpperCase();
    }

    _reverse(index) {
        if (index !== 0) {
            this._reverse(index - 1);
        }

        console.log (this.data[index]);
    }

    static get lifo() {
        return lifo;
    }

    static get fifo() {
        return fifo;
    }
}

module.exports = Stacks;