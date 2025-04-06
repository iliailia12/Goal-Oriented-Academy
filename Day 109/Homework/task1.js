// JavaScript ის ფაილიდან მიწვდით ვებსაიტის body ნაწილს და გამოიტანეთ ვებსაიტზე ღილაკის სახით - 'SUP???'r
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
        console.log('Request for index.html received.');
        });
        
    if (req.url === '/button-click') {
        res.writeHead(200);
        res.end('Button clicked!');
        console.log('Button clicked');
    }
    });
    server.listen(3000, () => {
        console.log('Server running at http://localhost:3000/');
    });
 