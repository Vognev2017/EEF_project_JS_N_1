const moment = require('moment');
console.log(moment().format());
console.log(moment().format("dddd, MMMM Do YYYY, HH:mm:ss"));
console.log(moment().add(5, 'hours').format("dddd, MMMM Do YYYY, HH:mm:ss"));