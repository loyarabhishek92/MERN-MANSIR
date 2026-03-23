// const m = setInterval(() => {
//     const date = new Date();
//     console.log(date.getMilliseconds());
// }, 1000);

// setTimeout(() => {
//     clearTimeout(m);
//     console.log("Hello");
// }, 5000);



// import os from 'os';

// // console.log(os.hostname());
// const cpus = os.cpus();
// console.log(`CPU cores: ${cpus.length}`);
// console.log(`First core model: ${cpus[0].model}`);




import fs from "fs";

// for reading content on file
// fs.readFile('./dummy.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

// for writing new context on file 
// fs.writeFile('./dummy.txt', 'Abhishek raj rauniyar', (err) => {
//     console.log(err);
// });

// for adding context on existing context 
// fs.appendFile('./dummy.txt', ' hello jee', (err) => {
//     console.log(err);
// });

// for creating folder 
// fs.mkdir('./upload', (err) => {
//     console.log(err)
// });

// for removing/deleting folder 
// fs.rmdir('./upload', (err) => {
//     console.log(err);
// });

// for reading context on file making file sync 
// const m = fs.readFileSync('./dummy.txt', 'utf-8');
// console.log(m);

// for checking 'upload' folder is exist or not if not exist then created, if exist then removed 
// if(fs.existsSync('./uploads')) {
//     fs.rmdir('./uploads', (err) => {
//         console.log(err);
//     });
// } else {
//     fs.mkdir('./uploads', (err) => {
//         console.log(err);
//     });
// }