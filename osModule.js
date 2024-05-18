const os = require('os');

const user = os.uptime();

const minutes = user / 60;

const hours = minutes / 60;

console.log(`The system has been up for  ${hours} hours and ${minutes} minutes.`)

console.log(user);