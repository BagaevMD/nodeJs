const os = require('os');

console.log('System platform: ', os.platform());
console.log('Processor: ', os.arch());
console.log('Processor info: ', os.cpus());
console.log('Free memory: ', os.freemem());
console.log('Total memory ', os.totalmem());
console.log('Home dir: ', os.homedir());
console.log('System uptime ', os.uptime());