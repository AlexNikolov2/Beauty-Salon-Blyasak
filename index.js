const http = require('http');
const port = 3000;

http.get('http://localhost:3000/', (res) => {
    console.log(`Got response: ${res.statusCode}`);
}).on('error', (err) => {
    console.log(`Got error: ${err.message}`);
});
http.createServer().listen(port);