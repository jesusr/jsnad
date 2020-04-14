require('pretty-console-colors');
console.info('Control Flow');
console.info('1. Series - an asynchronous for loop');
(async () => {
    function async(arg, callback) {
        console.log('do something with \'' + arg + '\', return 1 sec later');
        setTimeout(function () { callback(arg * 2); }, 1000);
    }
    // Final task (same in all the examples)
    function final() { console.log('Done', results); }

    // A simple async series:
    var items = [1, 2, 3, 4, 5, 6];
    var results = [];
    function series(item) {
        if (item) {
            async(item, function (result) {
                results.push(result);
                return series(items.shift());
            });
        } else {
            return final();
        }
    }
    series(items.shift());
})();
