fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.readFile('./users.csv', (err, users) => {
    if (err) throw err;

    const parsed = parse(data);
    getDetails(users, (err, usersWithDetails) => {
        if (err) throw err;

        const csv = toCSV(usersWithDetails);
        fs.writeFile('withDetails.csv', csv, (err, data) => {
            if (err) throw err;

            console.log('The file has been saved!');
        })
    })
});

fs.readFile('./users.csv', (err, users) => {
    if (err) throw err;
    const parsed = parse(data);
    getDetails(users, handleGetDetails);
});

function handleGetDetails(err, usersWithDetails) {
    if (err) throw err;
    const csv = toCSV(usersWithDetails);
    fs.writeFile('withDetails.csv', csv, handleWriteFile);
}

function handleWriteFile(err) {
    if (err) throw err;
    console.log('The file has been saved!');
}

readFile('./users.csv')
    .then(users => getDetails(parse(data)))
    .then(withDetails => writeFile('withDetails.csv', toCSV(withDetails)))
    .then(() => console.log('The file has been saved!'))
    .catch(err => console.error('Error: ', err))

function asyncFunc() {
    return Promise.resolve(5);
}

it('resolves with "Hello CodeMeetings!"', () => {
    asyncFunc().then(value => {
        expect(value).toBe('Hello CodeMeetings!');
    });
});

it('resolves with "Hello CodeMeetings!"', done => {
    asyncFunc().then(value => {
        expect(value).toBe('Hello CodeMeetings!');
        done();
    });
});

it('resolves with "Hello CodeMeetings!"', () => {
    return asyncFunc().then(value => {
        expect(value).toBe('Hello CodeMeetings!');
    });
});

Promise.all([getUsers(), getOffers(), getContacts()]).then(([users, offers, contacts]) => {...});

function makeIterator(array) {
    let nextIndex = 0;

    return {
        next: () => nextIndex < array.length ?
            { value: array[nextIndex++], done: false } :
            { done: true }
    };
}

const iterableCollection = {
    array: [11, 22, 33, 44, 55],
    nextIndex: 0,
    [Symbol.iterator]() {
        return {
            next: () => this.nextIndex < this.array.length ?
                { value: this.array[this.nextIndex++], done: false } :
                { done: true }
        }
    }
}

for (let elem of iterableCollection) { 
    console.log(elem) 
}

const iterableCollection = {
    array: [11, 22, 33, 44, 55],
    nextIndex: 0,
    [Symbol.iterator]: function* generator() {
        while (this.nextIndex < this.array.length) {
            yield this.array[this.nextIndex++];
        }
    }
}

for (let elem of iterableCollection) { 
    console.log(elem) 
}

function* gen() {
    yield 3;
    // some instructions
    yield 5;
    const value = yield 'Hello CodeMeetings';
    console.log(value);
}

