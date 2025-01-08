/* Task 1: No Parameters: Activate Hyperdrive */
const activateHyperdrive = () => console.log('Hyperdrive activated!');
activateHyperdrive();

/* Task 2: Implicit Return: Scan for Lifeforms */
const scanForLife = () => 'No lifeforms detected';
console.log(scanForLife());

/* Task 3: Implicit Return with Objects: Log Coordinates */
const currentCoordinates = () => ({ x:1, y:2, z:3 });
console.log(currentCoordinates())

/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
/*
 * Observations:
 * TODO: Explain here.
 */
const spacecraft = {
    receiveMessage: (message) => {
        console.log('Message received: ' + message);
        console.log(`This spacecraft is: ${this.name}`);
    },
};
spacecraft.receiveMessage("Hello from Earth!");
/*
 * Observations:
 * The console.log statement prints "undefined" for `this.name` because arrow functions do not have their own `this` context.
 * Instead, they inherit `this` from the parent scope at the time they are defined.
 * In this case, `this` does not refer to the `spacecraft` object.
 */