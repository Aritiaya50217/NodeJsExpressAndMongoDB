// เรียกใช้โมดูลที่เราสร้าง 
const Car = require('./class');
// เก็บข้อมูลลงในคลาส Car
const myCar = new Car(4,'red','Pick-up');
// ใช้ `...` แสดงค่าที่อยู่ใน Object
console.log(`My Car's color is ${myCar.color}`);