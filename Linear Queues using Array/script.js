class Queue {
    constructor(sizeArg) {
        this.size = sizeArg;
        this.front = -1;
        this.rear = -1;
        this.arr = new Array(this.size);
    }

    isEmpty() {
        if (this.front == -1 && this.rear == -1) {
            return true;
        } else {
            return false;
        }
    }

    isFull() {
        if (this.rear == this.size - 1) {
            return true;
        } else {
            return false;
        }
    }

    insert(element) {
        if (this.isFull()) {
            console.log("\nStack Overflow\n");
        } else {
            this.rear = this.rear + 1;
            this.arr[this.rear] = element;
        }
    }

    remove() {
        if (this.isEmpty()) {
            console.log("\nStack Underflow\n");
        } else {
            console.log(`\nThe removed element is:\t${this.arr[this.front]}`);
            this.front = this.front + 1;
        }
    }
}


const readline = require('readline-sync');

let size = readline.question("Please enter size of the Stack:\t?");
let choice;
const objQueue = new Queue(size);
do {


    console.log("Press:");
    console.log("0. to exit");
    console.log("1. to insert element into Queue");
    console.log("2. to remove element from Queue");
    choice = readline.question("Choice >>:\t?");

    if (choice == 1) {
        let element = readline.question("Element >>:\t?");
        objQueue.insert(element);
    } else if (choice == 2) {
        objQueue.remove();
    } else {
        if (choice == 0) {
            console.log("You are exiting the loop");
        } else {
            console.log("\nInvalid Option!!");
        }

    }

} while (choice != 0)

console.log("Thank you!\nGood Bye");