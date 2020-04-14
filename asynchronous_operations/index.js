require('pretty-console-colors');
console.info('Asynchronous operations');
console.info('Using promises');
(() => {
    const fn1 = () => new Promise(res => setTimeout(() => res(console.log('fn1 resolve')), 1000));
    const fn2 = () => new Promise(res => setTimeout(() => res(console.log('fn2 resolve')), 500));
    console.info('This should resolve first fn2 before fn1.');
    fn1();
    fn2();
})();
console.info('Using async/await');
(async () => {
    const fn3 = async () => setTimeout(() => console.log('fn3 resolve'), 1000);
    const fn4 = async () => setTimeout(() => console.log('fn4 resolve'), 500);
    const fn5 = async () => setTimeout(() => console.log('fn5 resolve'), 800);
    console.info('This should resolve first fn5 because the await, fn4 before fn1.');
    await fn5();
    fn3();
    fn4();
})();