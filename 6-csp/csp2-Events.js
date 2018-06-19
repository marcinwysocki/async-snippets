/**
 * Obsługa zdarzeń
 */

const { take, chan, putAsync, go, CLOSED } = require('js-csp');
const readline = require('readline');

function* readFromStdIn(channel) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line', line => {
        putAsync(channel, line);
    });
}

go(function*() {
    const ch = chan();

    go(readFromStdIn, [ch]);

    while (true) {
        const value = yield take(ch);

        if (value === CLOSED) {
            return 'The end';
        }

        console.log("You've written: ", value);
    }
});

/**
 * Ogólniej
 */

// chan.fromEvent = (obj, ev) => {
//     const ch = chan();

//     go(function*() {
//         obj.on(ev, data => {
//             putAsync(ch, data);
//         });
//     });

//     return ch;
// };

// go(function*() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });

//     const ch = chan.fromEvent(rl, 'line');

//     while (true) {
//         const value = yield take(ch);

//         if (value === CLOSED) {
//             return 'The end';
//         }

//         console.log("You've written: ", value);
//     }
// });
