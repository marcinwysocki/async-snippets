/**
 * Iterator
 */

function makeIterator(array) {
    let nextIndex = 0;

    return {
        next: () =>
            nextIndex < array.length
                ? { value: array[nextIndex++], done: false }
                : { done: true },
    };
}
