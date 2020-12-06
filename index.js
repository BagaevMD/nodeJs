const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((request, response) => {
    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);
    const ext = path.extname(filePath);
    let contentType = 'text.html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/js'
            break
        default:
            contentType = 'text.html'
    }

    if (!ext) {
        filePath += '.html';
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (error, data) => {
                if (error) {
                    request.writeHead(500);
                    response.end('Error');
                } else {
                    response.writeHead(200, {
                        'Content-Type': contentType,
                    });
                }

                response.end(data);
            })
        } else {
            response.writeHead(200, {
                'Content-Type': contentType,
            });

            response.end(content);
        }
    })
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port`);
})