// let http = require("http");
// let fs = require('fs');


// const server = http.createServer((request, response) => {
//     let path = request.url;

//     if (path === '/home' || path.toLowerCase() === '/home')
//         response.end("Welcome to my website");
//     else if (path.toLowerCase() === '/image')
//         response.end("You are in about page");
//     else if (path.toLowerCase() === '/pdf')
//         response.end("You are in contact page");
//     else {
//         response.writeHead(404);
//         response.end("Error 404: Page not found");
//     }
// })

// server.listen(3000, '127.0.0.1', () => {
//     console.log('Server has started...');
// });

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
    let url = request.url.toLowerCase();

    if (url === '/home') {
        response.end("Welcome to my website");
    } else if (url === '/image') {
        // Read the image file
        const imagePath = path.join(__dirname, 'images', 'maxresdefault.jpg');
        const imageData = fs.readFileSync(imagePath);

        // Set the appropriate content type
        response.setHeader('Content-Type', 'image/jpeg');

        // Send the image data as the response
        response.end(imageData);
    } else if (url === '/pdf') {
        // Read the PDF file
        const pdfPath = path.join(__dirname, 'lesson10-Event handling.pdf');
        const pdfData = fs.readFileSync(pdfPath);

        // Set the appropriate content type
        response.setHeader('Content-Type', 'application/pdf');

        // Send the PDF data as the response
        response.end(pdfData);
    } else {
        response.writeHead(404);
        response.end("Error 404: Page not found");
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server has started...');
});
