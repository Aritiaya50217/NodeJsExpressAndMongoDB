// สร้าง server
const http = require('http');
const server = http.createServer();
// event listener กำหนดเหตุการณ์เมื่อมีการเชื่อมต่อ
server.addListener('connection',function(socket){
    console.log('Client connected');
});
// กำหนด port
server.listen(3000);
console.log('Listening form port 3000');