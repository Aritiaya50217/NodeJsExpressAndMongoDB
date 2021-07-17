const step1 = () => {
    // 3000 ms = 3s
    setTimeout(()=> {
        console.log('The First step');
    },3000);
}
const step2 = () => {
    // ไม่ได้ setTime จะแสดงก่อน
    console.log('The Second step');
}

// เรียกใช้ฟังก์ชัน
step1();
step2();