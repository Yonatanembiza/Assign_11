const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/image') {
        // Send image
        const imagePath = path.join(__dirname, 'images', 'maxresdefault.jpg');
        const imageStream = fs.createReadStream(imagePath);
        res.setHeader('Content-Type', 'image/jpg');
        imageStream.pipe(res);
    } else if (url === '/pdf') {
        // Send PDF
        const pdfPath = path.join(__dirname, 'lesson10-Event handling.pdf');
        const pdfStream = fs.createReadStream(pdfPath);
        res.setHeader('Content-Type', 'application/pdf');
        pdfStream.pipe(res);
    } else if (url === '/home') {
        // Send text
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to my website');
    } else {
        // Handle other paths or send a 404 response
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 8888;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
