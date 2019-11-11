class Stack {
    constructor(sizeArg) {
        this.size = sizeArg;
        this.top = -1;
        this.arr = new Array(this.size);
    }

    isEmpty() {
        if (this.top == -1) {
            return true;
        } else {
            return false;
        }
    }

    isFull() {
        if (this.top == this.size - 1) {
            return true;
        } else {
            return false;
        }
    }

    push(element) {
        if (this.isFull()) {
            console.log("\nStack Overflow\n");
        } else {
            this.top = this.top + 1;
            this.arr[this.top] = element;
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log("\nStack Underflow\n");
        } else {
            console.log(`\nThe removed element is:\t${this.arr[this.top]}`);
            this.top = this.top - 1;
        }
    }
}


const readline = require('readline-sync');

let size = readline.question("Please enter size of the Stack:\t?");

let objStack = new Stack(size);
objStack.push(1);
objStack.push(2);
objStack.push(3);
objStack.pop();
objStack.pop();
objStack.pop();