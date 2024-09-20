// const {createServerLocalhost } = require('./helpers/helper');
//
// createServerLocalhost();


// const http = require('node: http');
//
// const createServer = async () => {
//         const server = http.createServer((req, res) => {
//             res.writeHead(200, {'Content-Type': 'application/json'});
//             res.end(JSON.stringify({
//                 data: 'Hello World',
//             }))
//         })
//
//         server.listen(3000)
// }
//
// void createServer();
// --------------------------------
//
// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd())
// --------------------------------

// const path = require('node:path');
// const  foo = () => {
//     // path
//     const pathToFile = __filename;
//     console.log('dirname', path.dirname(pathToFile));
//     console.log('extname', path.extname(pathToFile));
//     console.log('basename', path.basename(pathToFile));
//     console.log('parse', path.parse(pathToFile));
//     console.log('isAbsolute', path.isAbsolute(pathToFile));
// }

// ===============================================================
// Readline

// const readline = require('node:readline/promises');
//
// const foo = async ()=>{
//     const rlInstance = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     })
//
//     const name = await rlInstance.question('Name?: ');
//     console.log(`Your name ${name}`)
//     process.exit(0);
// }
//
// void foo()

// require('./helpers/helper');
//
// const foo = () => {
//     console.log(1111111111111111)
// }
//
// foo()

// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd());

// ==============================================================================

const http = require('node:http');
const path = require('node:path');
const readline = require('node:readline/promises');
const os = require("node:os");


const foo = async () => {
//HTTP
//         const server = http.createServer((req, res) => {
//             res.writeHead(200, {'Content-Type': 'application/json'});
//             res.end(JSON.stringify({
//                 data: 'Hello World',
//             }))
//         })
//
//         server.listen(3000);
// ----------------------------------------------
//PATH
//     const pathToFile = __filename;
//     console.log(pathToFile)
//     console.log(path.dirname(pathToFile))
//     console.log(path.extname(pathToFile))
//     console.log(path.basename(pathToFile))
//     console.log(path.parse(pathToFile))
//     console.log(path.isAbsolute(pathToFile))
// ----------------------------------------------------

//Readline
//     const rlInstance = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     })
//
//     const name = await rlInstance.question('Name:');
//     console.log(`Your name ${name}`)
//     process.exit(0)
//     ============================================================

    //os
    // console.log(os.arch())
    // console.log(os.cpus())
    // console.log(os.platform())
    // console.log(os.totalmem()/1024/1024/1024, 'gb')
    // console.log(os.homedir())
    // console.log(os.hostname())
    // console.log(os.userInfo())
}

void foo();