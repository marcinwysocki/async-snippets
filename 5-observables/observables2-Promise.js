/*************************
 * Promise vs Observable *
 *************************/

/**
 * 1. Jedna wartość, zawsze asynchronicznie, gorliwy, nieanulowalny
 */
Promise.resolve('abc').then(console.log); // abc

new Promise(resolve => {
    resolve(5);
});

const promise = new Promise(resolve => {
    setTimeout(resolve, 1000);
});

/////////////////////////////////////////////////

console.log("Let's go!");
promise.then(() => console.log("Time's up!"));
console.log('THE END');

/*
Let's go!
THE END

(...1 second passes...)

Time's up!
*/

/**
 *  Wiele wartości, potencjalnie asynchronicznie, leniwy, można anulować
 */

Observable.of(1, 2, 3).subscribe(console.log); // 1 -> 2 -> 3

////////////////////////////////////////////////////

const observable = Observable.interval(1000);

console.log("Let's go!");
const sub = observable.subscribe(val =>
    console.log("Time's up after " + val + 'seconds'),
);

console.log('...or maybe not');
sub.unsubscribe();
console.log('THE END');

/*
Let's go!
...or maybe not
THE END
*/
