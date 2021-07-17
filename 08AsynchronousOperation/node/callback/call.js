// ประกาศฟังก์ชัน myRequest
// callback พารามิเตอร์ในรูปแบบของฟังก์ชัน
const myRequest = (data,callback) => {
    const response = 10 + data ;
    const error = undefined;
    // เรียกใช้ฟังก์ชัน callback
    const result = callback(error,response);
    return result ;
}
// (data,callback) => (5,(error,res))
const result = myRequest(5,(error,res) => {
    if(error){
        return 'You have got Error';
    }else{
        return res;
    }
});

console.log(result);
