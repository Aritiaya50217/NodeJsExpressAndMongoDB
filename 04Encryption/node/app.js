const bcrypt = require('bcrypt');
const password = '1234';
// ค่า myHash สร้างขึ้นมาเอง ยังไม่ได้เข้ารหัส
const myHash = '1234565443hjooll';
// method compare ใช้ในการตรวจสอบว่า password กับ myHash ตรงกันหรือไม่
bcrypt.compare(password,myHash,function(err,res){
    if(res === true) {
        console.log("Yes");
    }else{
        console.log('Error !!');
    }
});