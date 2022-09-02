//BUILT IN modules in node js such as OS, http, path, fs

const os = require('os');
//info about user
const user = os.userInfo();
// console.log(user);

//method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

//Information about the current Operating System 
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
    
}

console.log(currentOs);
