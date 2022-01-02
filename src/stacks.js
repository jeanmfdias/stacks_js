class Stacks {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }

    pop() {

    }

    peek() {

    }

    lenght() {
        return this.top;
    }

    search() {

    }

    isEmpty() {

    }

    print() {

    }
}

module.exports = new Stacks()