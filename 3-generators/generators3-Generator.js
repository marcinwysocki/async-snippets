/**
 * Iterable z generatorem
 */

const iterableCollection = {
    array: [11, 22, 33, 44, 55],
    nextIndex: 0,
    [Symbol.iterator]: function* generator() {
        while (this.nextIndex < this.array.length) {
            yield this.array[this.nextIndex++];
        }
    },
};

for (let elem of iterableCollection) {
    console.log(elem);
}
