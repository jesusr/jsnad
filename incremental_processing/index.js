require('pretty-console-colors');
console.info('Creation');
console.info('new Buffer() is deprecated but still returns the same that Buffer.alloc()');
(() => {
    const buf1 = Buffer.alloc(10);
    const buf2 = Buffer.alloc(10);
    console.info('Compare returns 0, that means they have the same length');
    console.log(Buffer.compare(buf1, buf2));
})();
console.info('Alloc');
console.info('Buffer.alloc vs Buffer.allocUnsafe vs Buffer.allocUnsafeSlow');
(() => {
    const buf1 = Buffer.alloc(10);
    const buf2 = Buffer.allocUnsafe(10);
    const buf3 = Buffer.allocUnsafeSlow(10);
    console.info('Compare returns 0, that means they have the same length');
    console.log(Buffer.compare(buf1, buf2), Buffer.compare(buf2, buf3));
    console.info('See what we have into the buffers');
    console.log(buf1, buf2, buf3);
    console.info('If we fill with zero the buffer2 and buffer3, the three buffers will be the same');
    buf2.fill(0);
    buf3.fill(0);
    console.log(buf1, buf2, buf3);
})();
console.info('ByteLength');
console.info('buff.byteLength returns byte size');
(() => {
    const str = 'españa';
    const str2 = 'espana';
    const buf1 = Buffer.from(str);
    const buf2 = Buffer.from(str2);
    console.log('Buffer from string length', buf1.length, buf2.length);
    console.log('Buffer byteLength', Buffer.byteLength(str, 'utf8') + ' bytes', str.length + ' hars', Buffer.byteLength(str2, 'utf8') + ' bytes', str2.length + ' chars');
})();
console.info('Concat');
console.info('Buffer.concat returns new Buffer');
(() => {
    const buf1 = Buffer.alloc(10);
    const buf2 = Buffer.concat([buf1, buf1]);
    console.log('The result is a buffer', Buffer.isBuffer(buf2));
    console.log(buf2.length); // it should be 20
})();
console.info('Write json, read json');
(() => {
    const buf1 = Buffer.alloc(255);
    console.log('buf1:', buf1);
    buf1.write(JSON.stringify({ field: 'value' }));
    console.log('buf1 written:', buf1);
    console.log('buf1 json:', Buffer.from(buf1.toJSON().data));
    console.log('buf1 string:', buf1.toString());
})();
console.info('Check constants');
console.info('Those constants are only in a explicit required buffer module');
(() => {
    const BufferModule = require('buffer');
    console.log('MAX_LENGTH', BufferModule.constants.MAX_LENGTH);
    console.log('MAX_STRING_LENGTH', BufferModule.constants.MAX_STRING_LENGTH);
})();

