const fs = require('fs');
// ./ คือ พาธของโฟล์เดอร์ของไฟล์ปัจจุบัน
fs.readdir('./',function(err,files){
    if(err){
        console.log('We got this error :',err);
    }else{ 
        console.log('List of file are: ',files);
    }
});