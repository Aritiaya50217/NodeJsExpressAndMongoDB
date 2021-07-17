// สร้าง object p จากคลาส Promise
const p = new Promise(function(resolve,reject){
    // Asynchronous
    setTimeout(function(){
        // เอาผลลัพธ์ไปเก็บยัง object p 
        resolve({id:1,name:"oil"});
    },2000);
});
console.log("Before");
p.then(function(result){
    console.log('The is result :',result);
})
.catch(function(err){
    console.log(err.message);
});
console.log('After')