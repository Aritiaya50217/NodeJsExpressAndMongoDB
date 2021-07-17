const http = require('http');
const server = http.createServer(function(req,res){
    if (req.url === '/'){
        res.write('You are at home page');
        // บอกว่าเนื้อหารใน Http response นั้นหมดแล้ว
        res.end()
    }
});
// EventEmitter
server.addListener('connection',function(socket){
    console.log('Client connected');
});
server.listen(3000);
console.log('Listening form port 3000');