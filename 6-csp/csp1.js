/**
 * CSP
 */

const { take, chan, put, timeout, go, CLOSED } = require('js-csp');

function* player(name, table) {
    while (true) {
        let ball = yield take(table);

        if (ball === CLOSED) {
            console.log(name + ": table's gone");
            return;
        }

        ball.hits += 1;
        console.log(`${name} ${ball.hits}`);

        yield timeout(100);
        yield put(table, ball);
    }
}

go(function*() {
    const table = chan();

    go(player, ['ping', table]);
    go(player, ['pong', table]);

    yield put(table, { hits: 0 });
    yield timeout(1000);

    table.close();
});
