// file system asynchrounous programming
const { readFile, writeFile } = require('fs');


// function to read file asynchrounously
readFile('./fsHi.txt' , 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})
