const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('myEvent',function(args){
    console.log('You met myEvent with:',args);
});
emitter.on('myProfile',function(n){
    console.log('Profile : ',n)
});

// ปล่อย event ที่ชื่อ myEvent ผ่านค่าพารามิเตอร์ในแบบ object
emitter.emit('myEvent',{id:1,name:'test'});
emitter.emit('myEvent',{firstname:'Artitaya',age:23});

// ปล่อย event ที่ชื่อ myProfie ผ่านค่าพารามิเตอร์ในแบบ object
emitter.emit('myProfile',{name:'artitaya yaemjaraen',age:23,weight:63,height:160});