//Sofia Kononenko and Sham Hason
const fs = require('fs'); 
const nameFiles = [
    '1.txt',   
    '2.txt',
    '3.txt',
    '4.txt',
    '5.txt',
    '6.txt',   
    '7.txt',
    '8.txt',
    '9.txt',
    '10.txt'
];
const path = require('path');
const dirPath = path.join(__dirname, '/txts');

let newGroupContent = '';

// Loop through each file in the nameFiles array
for (let i = 0; i < nameFiles.length; i++) {
    const filePath = path.join(dirPath, nameFiles[i]);
    if (fs.existsSync(filePath)) {
        const lines = fs.readFileSync(filePath, 'utf-8').split('\n'); // Read and split into lines
        newGroupContent += lines.slice(0, i + 1).join('\n') + '\n';   // Extract (i+1) lines and append
    }
}

fs.writeFileSync(path.join(dirPath, 'new_group.txt'), newGroupContent.trim(), 'utf-8');
console.log('New group of lines saved in new_group.txt');

