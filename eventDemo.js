import { EventEmitter } from 'events'

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' + name);
}
function goodbyeHandler(name) {
    console.log('GoodBye ' + name);
}

// Register event listeners

myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit
myEmitter.emit('greet', 'john');
myEmitter.emit('goodbye', 'john');

// Error handling
myEmitter.on('error', (err) => {
    console.log('An error occured:', err);
})
 // Simulate error
 myEmitter.emit('error', new Error('something went wrong'));