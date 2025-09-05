const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let url = req.url;
    let method = req.method;

    if (url === '/' && method === 'GET') {
        fs.readFile('formValue.txt', { encoding: 'utf-8' }, (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            res.end(`
                ${data}
                <h1>Form</h1>
                <form action='/message' method='POST'>
                    <label for='naam'>Name</label>
                    <input id='naam' name='username' placeholder='Type Something...'></input>
                    <button type='submit'>Add</button>
                </form>
            `);
        });
    }
    else if (url === '/message' && method === 'POST') {
        let dataChunks = [];

        req.on('data', (chunks) => {
            dataChunks.push(chunks);
        });

        req.on('end', () => {
            let combinedBuffer = Buffer.concat(dataChunks);
            let value = combinedBuffer.toString();
            let formValue = value.split('=')[1];

            fs.readFile('formValue.txt', { encoding: 'utf-8' }, (err, oldData) => {
                const updatedMessages = formValue + '\n' + (oldData || '');
                fs.writeFile('formValue.txt', updatedMessages, () => {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    res.end();
                });
            });
        });
    }
});

const port = 5000;
server.listen(port, () => {
    console.log("Server Running on http://localhost:5000");
});
