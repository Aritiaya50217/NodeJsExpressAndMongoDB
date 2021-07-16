// ประกาศตัวแปร เก็บข้อมูลแบบ object
const Settings = {
    secretKey :'12345667yghjk',
    userPass:'68900000jgyii',
    databaseName : 'node.js'
} 
// ประกาศฟังก์ชัน
const getSecretKey = () => {
    return Settings.secretKey;
}
// แสดงค่า secretKey ผ่านฟังก์ชัน
module.exports.getSecretKey = getSecretKey;
// แสดงค่า userPass ผ่านการเรียกใช้ module
module.exports.userPass = Settings.userPass;
module.exports.databaseName = Settings.databaseName;
