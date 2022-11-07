const os = require("os");
// const { sayHi } = require("./utils");
require("./utils");
// NODE => an enviroment which javascript executes outside of the browser => NO Browser APIs => no dom , no window , no document , ....
// but we still access setTimeOut() , setInterval()
// built on top of v8 engine

// execution of node =>
// REPL => Read Print Eval Loop => playground => /node
// CLI =>  executes javascript file with node => /node ....js

// console.log("MAX");

/* GLOBALS =>  
1- __dirname => full path to current directory
2- __filename 
3- require()
4- module
5- process => information about the enviroment which node executes 

*/

// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(require);
// console.log(process);

// setTimeout(() => {
//   console.log("SET TIME OUT");
// }, 1000);

// setInterval(() => {
//   console.log("SET INTERVAL");
// }, 2000);

/* Module => every file inside node is a module => Encapsulation  => whatever is needed will be exported
export => 
1- module.exports = ..... 
2- module.exports = {...,...}
3- exports.file = ....

import => 
const name = require("./")

//  Importing a module causes execution of every function that been called inside that module

*/

/*
Built in modules => they are inside node core => os / path / fs / http
os => allows Interacting with operating system


*/

// console.log(os.userInfo());
// console.log(os.uptime());
// console.log(os.type());
// console.log(os.release());
// console.log(os.totalmem());
// console.log(os.freemem());
