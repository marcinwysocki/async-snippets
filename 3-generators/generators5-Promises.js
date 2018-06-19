/**
 * A co gdyby tak połączyć generatory z Promisami i zawiesić
 * funkcję aż takowy się nie rozwiąże?
 */

function* generator() {
    const value = yield getSomePromise();

    return value;
}

// function wrapper(generator) {
//     const gen = generator();
//     return new Promise((resolve, reject) => {
//         const execute = (promise) => {
//             const { value, done } = gen.next();

//             if (done) {
//                 resolve(value);
//             }

//             value.then(value => {
//                 gen.next(value);
//             });
//         }
//     });
// }
