const myAsync = (callback) => {
    console.log('Start');
    setTimeout(() => {
        // แสดงข้อความหลังจาก 3s
        const result = callback('Hello');
        console.log(result);
    },3000);
    console.log('Finish');
}
myAsync((message)=>{
    return message + ' Async.';
});