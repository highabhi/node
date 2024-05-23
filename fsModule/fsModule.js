// reading a file
const { readFileSync, writeFileSync } = require('fs');
const readFile = readFileSync('./fsHi.txt', 'utf8');

console.log(readFile);

// writing a file 
{/* 
    this method will override the file and replace any existing
    content with the new content whic you intend to write.
*/}
const writeFile = writeFileSync(
    './fsHi.txt',
    'Hey Hehe Again!'
);


// Writing a file contenet to another
const writeNewFile = writeFileSync(
    './fsHello.txt',
    // './fsHell.txt', // If the file doesn't exist already it'll create a new file with the same name and put the intended content into it
    // `Hey this is a test: ${readFile}`
    `Hey this is a test: ${readFile} `,
    { flag: 'a' } //if you want to just append to the file and not mess with the existing content 
);

const readChanges = readFileSync('./fsHello.txt', 'utf8');
console.log(readChanges)
