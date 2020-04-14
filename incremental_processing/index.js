require('pretty-console-colors');
const fs = require('fs');
const Stream = require('stream');
console.info('INCREMENTAL PROCESSING');
console.info('Read file and save file using streams and pipes');
(() => {
    const inputFilePath = `${__dirname}/example.csv`;
    const outputFilePath = `${__dirname}/example_output.csv`;
    const fileInputStream = fs.createReadStream(inputFilePath);
    const fileOutputStream = fs.createWriteStream(outputFilePath);
    function transformStream() {
        const transformStream = new Stream.Transform();
        transformStream._transform = (inputChunk, encoding, callback) => {
            const transformedChunk = inputChunk.toString().toLowerCase();
            transformStream.push(transformedChunk);
            callback();
        };
        return transformStream;
    };
    fileInputStream
        .pipe(transformStream())
        .pipe(fileOutputStream)
        .on("error", err => {
            console.error(err);
        }); //  
    console.info('New file saved with all the data lowercase at example_output.csv');
})();