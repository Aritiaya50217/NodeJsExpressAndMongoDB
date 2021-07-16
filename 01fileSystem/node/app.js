// การใช้งานโมดูล
const fs = require('fs');
// เขียนข้อความลงในไฟล์
fs.writeFileSync('data.txt','Hello,Node.js App!');
// เอาข้อความไปต่อท้ายข้อความเดิม
fs.appendFileSync('data.txt',' JavaScript Language');