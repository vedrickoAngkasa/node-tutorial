

const EventEmitter = require('events');


const customEmitter = new EventEmitter()
//on - listen for an event
//emit - emit an event or give off or out based on an event

//We can place as many on method as we want, but it need to be order, for example on first then emit
//we need to have the same event name, if not it wont work, for example response
customEmitter.on('response', (name, id)=> {
  console.log(`data recieved ${name} and ${id}`);
})
customEmitter.on('response', ()=> {
  console.log(`Some logic`);
})


customEmitter.emit('response', 'john', 34)