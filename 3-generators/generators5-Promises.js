/**
 * A co gdyby tak połączyć generatory z Promisami i zawiesić
 * funkcję aż takowy się nie rozwiąże?
 */

function* generator() {
    const value = yield getSomePromise();

    return value;
}

/**
 * Naiwna implementacja wrappera a la co
 */

function wrapper(gen) {
    const generator = gen();

    const handleGenResult = result => {
        const { value, done } = result;

        if (done) {
            return Promise.resolve(value);
        }

        return value
            .then(res => handleGenResult(generator.next(res)));
    };

    return handleGenResult(generator.next());
}

/**
 * Przykład zastosowania
 */

const promise = wrapper(function*() {
    const value = yield Promise.resolve(5);
    const anotherValue = yield Promise.resolve(4);

    return value + anotherValue;
});

promise.then(console.log); // 9

/**
 * Wersja z obsługą błędów
 */

function wrapper(gen) {
    const generator = gen();

    const execute = result => {
        const { value, done } = result;

        if (done) {
            return Promise.resolve(value);
        }

        return value
            .then(res => execute(generator.next(res)))
            .catch(err => execute(generator.throw(err)));
    };

    try {
        return execute(generator.next());
    } catch (ex) {
        return Promise.reject(ex);
    }
}
