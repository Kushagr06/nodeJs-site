var events=require('events');
var eventEmitter=new events.EventEmitter();

var myEventHandler=function(){
  console.log('OK bro');
}

eventEmitter.on('why', myEventHandler);

eventEmitter.emit('why');