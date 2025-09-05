const fs = require('fs');

const requestHandler = (req,res) => {
    console.log("Server Created");

    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type','text/html');

        res.end(
            `
            <h1>Form</h1>
            <form action='/message' && method = 'POST'>
                <label for='naam'>Name</label>
                <input id='naam' name='username' placeholder='Type Something'></input>
                <button type='submit'>Add</button>
            </form>
            `
        )
    }else{
        if(url === '/message' && method === 'POST'){
            let dataChunks = [];

            req.on('data',(chunks)=>{
                console.log(chunks);
                dataChunks.push(chunks);
            })

            req.on('end',()=>{
                let combinedBuffer = Buffer.concat(dataChunks);
                let value = combinedBuffer.toString();
                let formValue = value.split('=')[1];

                fs.writeFile('formValue.txt',formValue,(err)=>{
                    if(err){
                        console.log(err);
                    }

                    res.statusCode = 302;
                    res.setHeader('location','/');
                    res.end();
                })
            })

        }else if(url === '/read'){
            fs.readFile('formValue.txt', { encoding: 'utf-8' }, (err,data)=>{
                if (err) {
                    res.end('<h1>Error reading file</h1>');
                    console.log(err);
                    return;
                }

                res.setHeader('Content-Type', 'text/html');
                
                res.end(
                    `
                    <h1>${data.toString()}</h1>
                    `
                )
            })
        }
    }
}

const anotherFunction = () => {
    console.log('I am another function');
}


// 1

// module.exports = {
//     requestHandler,
//     anotherFunction
// }


// 2
// module.exports = {
//     handler: requestHandler,
//     testFunction: anotherFunction
// }


// 3

// module.exports.handler = requestHandler;
// module.exports.testFunction = anotherFunction;


// 4

exports.handler = requestHandler;
exports.testFunction = anotherFunction;