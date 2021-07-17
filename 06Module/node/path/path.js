const path = require('path');
// Method  parse ตรวจสอบไฟล์ปัจจุบันอยู่ในพาธอะไร ชื่อไฟล์อะไร นามสกุลอะไร
const pathObject = path.parse(__filename);
console.log(pathObject);