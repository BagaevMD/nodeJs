// File System
const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), error => {
//     if (error) {
//         throw error;
//     }
//
//     console.log('Dir created');
// })

const filePath = path.join(__dirname, 'test', 'text.txt');
// fs.writeFile(filePath, 'Hello nodeJs', error => {
//     if (error) {
//         throw error
//     }
//
//     console.log('File created');
//
//     fs.appendFile(filePath, '\nHello again', error => {
//         if (error) {
//             throw error
//         }
//
//         console.log('File created');
//     })
//
// })

fs.readFile(filePath, 'utf-8' , (error, content) => {
    if (error) {
        throw error
    }

    console.log(content)

    // const data = Buffer.from(content)
    // console.log('Content: ' ,data.toString())
})

