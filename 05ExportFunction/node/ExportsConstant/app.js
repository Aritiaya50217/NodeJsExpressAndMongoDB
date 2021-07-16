const settings = require('./setting');
// การเข้าถึง object ที่อยู่ใน module Setting
const databaseName = settings.databaseName;
console.log("Database Name :",databaseName);