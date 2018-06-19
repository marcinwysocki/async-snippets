/**
 * Generatory - "przerywane" funkcje
 */

function* gen() {
    console.log('START');
    yield 3;

    const result = 3 + 2;
    const moarResults = result - 1;
    console.log('Result: ', moarResults);

    yield 5;

    const value = yield 'Hello CodeMeetings';
    console.log('Value:', value);
    console.log('STOP');

    return value;
}

const generator = gen(); // gen {<suspended>}

generator.next(); // Stop, { value: 3, done: false }
generator.next(); // Result: 4, { value: 5, done: false }
generator.next(); // { value: 'Hello CodeMeetings', done: false }
generator.next('abc'); // Value: abc, STOP, { value: 'abc', done: true }
