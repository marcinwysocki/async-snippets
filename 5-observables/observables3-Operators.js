/**
 * Operatory
 */

// Observable jako kolekcja

Observable.of(1, 2, 3, 4, 5)
    .map(val => val * 10)
    .filter(val => val % 20 === 0)
    .reduce((sum, val) => sum + val, 0);

// Observable jako stream

Observable.interval(100)
    .startWith(-1)
    .throttleTime(250)
    .skipWhile(number => number < 5)
    .take(10);
