const myAsync = (callback) => {
    // synchronous
    console.log('Begin');
    // Asynchronous
    setTimeout(() => {
        const result = callback('First');
        console.log(result);
    },3000);
    setTimeout(() => {
        const result = callback('Second');
        console.log(result);
    },1000);
    setTimeout(() => {
        const result = callback('Third');
        console.log(result);
    },0);
    console.log('End');
}
myAsync((message) => {
    return message;
});