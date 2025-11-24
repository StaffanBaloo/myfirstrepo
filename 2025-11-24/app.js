//@ts-check

/**
 * Represents a queue, where the first thing entered will be the first thing out.
 * @template T
 *
 */

class Queue {
    /**
     * Initializes the queue as empty.
     */
    constructor() {
        /**
         *
         * @type {T[]}
         */
        this.items = [];
    }

    /**
     * Adds an item at the end of the queue
     *
     * @param {T} item
     */
    add(item) {
        this.items.push(item);
    }

    /**
     * Removes an item from the front of the queue and returns it.
     * @returns {T| undefined}
     */
    remove() {
        return this.items.shift();
    }
}

/**
 * Create a queue of names that have to be strings.
 * @type {Queue<string>}
 *
 */
const nameQueue = new Queue();

/**
 * Create a queue of ticketQueue that have to be numbers or undefined.
 * @type {Queue<number>}
 *
 */
const ticketQueue = new Queue();

/**
 * Create a variable to hold a name, which can either be a string or undefined.
 * @type {string|undefined}
 */

let aName;

/**
 * Create a variable to hold a ticket number, which has to be a number or undefined.
 * @type {number|undefined}
 */
let aTicket;

// Add 7 names to the queue
nameQueue.add("Anna");
nameQueue.add("Bertil");
nameQueue.add("Cecilia");
nameQueue.add("David");
nameQueue.add("Estelle");
nameQueue.add("Filip");
nameQueue.add("Gunilla");

// First log the current queue, then remove and log the first item in the queue, and finally display the new queue.
console.log(nameQueue.items.join(", "));
aName = nameQueue.remove();
console.log(aName);
console.log(nameQueue.items.join(", "));

// Repeat the same process for ticket numbers
ticketQueue.add(101);
ticketQueue.add(102);
ticketQueue.add(103);
ticketQueue.add(104);
ticketQueue.add(105);
ticketQueue.add(106);
ticketQueue.add(107);

console.log(ticketQueue.items.join(", "));
aTicket = ticketQueue.remove();
console.log(aTicket);
console.log(ticketQueue.items.join(", "));

/**
 * @template T
 * @param {T[]} arr
 * @returns {T|undefined}
 */

function getLastItem(arr) {
    return arr[arr.length - 1];
}
