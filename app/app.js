//enter in constants below:
const sourceFileName = 'package.json'; // Enter in the name of your json file 
const targetFileName = 'target.txt'; // Enter the name of the output file

//NOTE: to change property parsed, change '.dependencies' on line 8 to desired property

fs = require('fs');

const dataObject = JSON.parse(fs.readFileSync(sourceFileName, 'utf8')).dependencies;

const appendToFile = (targetFileName, data) => {
    fs.appendFile(targetFileName, data, 'utf8', () => {
        console.log('appended');
    })
}

const objectToString = (obj) => {
    let str = "";
    for (let i = 0; i < Object.keys(obj). length; i++) {
        str += `${Object.keys(obj)[i]} ${Object.values(obj)[i]}\n`
    }
    return str;
}

appendToFile('test.txt', objectToString(dataObject));






