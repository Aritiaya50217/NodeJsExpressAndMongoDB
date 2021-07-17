const EventEmitter = require('events');
const { emit } = require('process');
const emitter = new EventEmitter();
emitter.addListener('myEvent',function(args){
    console.log('I found you : myEvent');
});
emitter.addListener('says',function(hi){
    console.log('Hello World');
});
// สั่งให้ปล่อย(emit) เหตุการณ์ที่ชื่อว่า myEvent ออกมา
emitter.emit('myEvent');
// สั่งให้ปล่อย(emit) เหตุการณ์ที่ชื่อว่า says ออกมา
emitter.emit('says');