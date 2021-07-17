const os = require('os');
// method freemem() ใช้เพื่อหาความจำที่ว่างอยู่
var freeMemory = os.freemem();
console.log(freeMemory);
//  userInfo  แสดงข้อมูลเกี่ยวกับผู้ใช้งานปัจจุบัน
var user = os.userInfo();
console.log(user);