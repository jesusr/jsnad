require('pretty-console-colors');
const { spawn, exec, execFile, fork } = require('child_process');

console.info('Child processes spawn');
console.info('1. The child_process module provides the ability to spawn child processes in a manner that is similar, but not identical, to popen(3). This capability is primarily provided by the child_process.spawn() function');
(async () => {
    const ls = spawn('ls', ['-lh', '/usr']);
    ls.stdout.on('data', data => console.log(`stdout: INIT ----- \n${data}\n -------- END`));
    ls.stderr.on('data', data => console.error(`stderr: INIT ----- \n${data}\n -------- END`));
    ls.on('close', code => console.log(`child process exited with code ${code}`));
})();

console.info('There is some alternatives on top of spawn method:');
console.info('2. child_process.exec');
(async () => {
    const ls = exec('echo "The \\$HOME variable is $HOME"');
    ls.stdout.on('data', data => console.log(`stdout: INIT ----- \n${data}\n -------- END`));
    ls.stderr.on('data', data => console.error(`stderr: INIT ----- \n${data}\n -------- END`));
    ls.on('close', code => console.log(`child process exited with code ${code}`));
})();

console.info('3. child_process.execFile');
(async () => {
    const child = execFile('node', ['--version'], (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        console.log(stdout);
    });
})();

console.info('4. child_process.fork');
(async () => {
    const forked = fork(`${__dirname}/child.js`);

    forked.on('message', (msg) => {
        console.log('Message from child', msg);
    });

    forked.send({ hello: 'world' });
})();