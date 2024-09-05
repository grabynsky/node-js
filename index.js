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

const readline = require('node:readline/promises');

const foo = async ()=>{
    const rlInstance = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const name = await rlInstance.question('Name?: ');
    console.log(`Your name ${name}`)
    process.exit(0);
}

void foo()