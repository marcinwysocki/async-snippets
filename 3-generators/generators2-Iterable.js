/**
 * Iterable oraz pętla for..of
 */
const iterableCollection = {
    array: [11, 22, 33, 44, 55],
    nextIndex: 0,
    [Symbol.iterator]() {
        return {
            next: () =>
                this.nextIndex < this.array.length
                    ? { value: this.array[this.nextIndex++], done: false }
                    : { done: true },
        };
    },
};

for (let elem of iterableCollection) {
    console.log(elem);
}
